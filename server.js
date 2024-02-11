import RSSParser from "rss-parser";
import express from "express";
import cors from "cors";

const feedURL = "https://www.thehindu.com/news/feeder/default.rss";

const parser = new RSSParser();

let articles = [];

const parse = async (url) => {
  const feed = await parser.parseURL(url);
  feed.items.forEach((item) => {
    articles.push(item);
  });
};

parse(feedURL);

let app = express();
app.use(cors());

const server = app.listen("4000", () => {
  console.log("App is listening at http://localhost:4000");
});

app.get("/", (req, res) => {
  res.send(articles);
});

export default server;
