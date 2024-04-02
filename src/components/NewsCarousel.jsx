import Carousel from "react-material-ui-carousel";
import { Paper, Button } from "@mui/material";
import FeedContext from "../contexts/FeedContext";
import { useContext } from "react";
import { useLocation } from "react-router-dom";

const NewsCarousel = () => {
  const location = useLocation();
  const { articles } = useContext(FeedContext);
  const trimmedArticles = articles.slice(16, 19);

  return location.pathname == "/" ? (
    <Carousel navButtonsAlwaysVisible>
      {trimmedArticles.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </Carousel>
  ) : null;
};

const Item = ({ item }) => {
  return (
    <Paper style={{ width: 100 + "%" }}>
      <div
        className="carousel-paper"
        style={{ backgroundImage: `url(${item.enclosure.url})` }}
      >
        <div className="carousel-paper__text">
          <h3 className="carousel-paper__text__title">
            {item.title.substring(0, 100)}...
          </h3>
          <a
            className="carousel-paper__text__link"
            href={item.link}
            target="_blank"
          >
            Read More
          </a>
        </div>
      </div>
    </Paper>
  );
};

export default NewsCarousel;
