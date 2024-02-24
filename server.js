import RSSParser from "rss-parser";
import express from "express";
import cors from "cors";

// RSS feed URL
const feedURL = "https://www.thehindu.com/news/feeder/default.rss";

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
app.get("/", (req, res) => {
  res.send(articles);
});

// Exporting the server instance
export default server;
