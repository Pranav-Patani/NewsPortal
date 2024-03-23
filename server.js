import RSSParser from "rss-parser";
import express from "express";
import cors from "cors";

// RSS feed URL
let feedURL = "https://timesofindia.indiatimes.com/rssfeeds/-2128672765.cms";

// Creating an instance of RSSParser
const parser = new RSSParser();

// Array to store parsed articles
let articles = [];

// Function to parse the RSS feed
const parse = async (url) => {
  const feed = await parser.parseURL(url);
  feed.items.forEach((item) => {
    articles.push(item);
  });
};

// Initial parsing of the feed URL
parse(feedURL);

// Creating an Express app
let app = express();
app.use(cors());

// Starting the server on port 4000
const server = app.listen("4000", () => {
  console.log("App is listening at http://localhost:4000");
});

// Route to get the parsed articles
// app.get("/", (req, res) => {
//   res.send(articles);
//   console.log(req.query);
// });
const categoryList = [
  {
    name: "India",
    url: "https://timesofindia.indiatimes.com/rssfeeds/-2128936835.cms",
  },
  {
    name: "World",
    url: "https://timesofindia.indiatimes.com/rssfeeds/296589292.cms",
  },
  {
    name: "NRI",
    url: "http://timesofindia.indiatimes.com/rssfeeds/7098551.cms",
  },
  {
    name: "Business",
    url: "http://timesofindia.indiatimes.com/rssfeeds/1898055.cms",
  },
  {
    name: "US",
    url: "https://timesofindia.indiatimes.com/rssfeeds_us/72258322.cms",
  },
  {
    name: "Crickcet",
    url: "http://timesofindia.indiatimes.com/rssfeeds/54829575.cms",
  },
  {
    name: "Sports",
    url: "http://timesofindia.indiatimes.com/rssfeeds/4719148.cms",
  },
  {
    name: "Science",
    url: "http://timesofindia.indiatimes.com/rssfeeds/-2128672765.cms",
  },
  {
    name: "Environment",
    url: "http://timesofindia.indiatimes.com/rssfeeds/2647163.cms",
  },
  {
    name: "Tech",
    url: "http://timesofindia.indiatimes.com/rssfeeds/66949542.cms",
  },
  {
    name: "Education",
    url: "http://timesofindia.indiatimes.com/rssfeeds/913168846.cms",
  },
  {
    name: "Entertainmetn",
    url: "http://timesofindia.indiatimes.com/rssfeeds/1081479906.cms",
  },
  {
    name: "Life & Style",
    url: "http://timesofindia.indiatimes.com/rssfeeds/2886704.cms",
  },
  {
    name: "Astrology",
    url: "https://timesofindia.indiatimes.com/rssfeeds/65857041.cms",
  },
];

app.get("/:category", (req, res) => {
  const { category } = req.params;
  const selectedCategory = categoryList.find(
    (item) => item.name.toLowerCase() === category.toLowerCase()
  );
  if (selectedCategory) {
    feedURL = selectedCategory.url;
    res.send({ message: `Feed URL updated to ${selectedCategory.url}` });
  } else {
    res.status(404).send({ message: "Category not found" });
  }
});

app.get("/", (req, res) => {
  // Use feedURL to parse the RSS feed
  parse(feedURL);
  res.send(articles);
});
// Exporting the server instance
export default server;
