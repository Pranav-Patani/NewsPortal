import { useContext } from "react";

import Carousel from "../components/Carousel";
import NewsCards from "../components/NewsCards";
import FeedContext from "../contexts/FeedContext";
const Home = () => {
  const articles = useContext(FeedContext);

  return (
    <>
      <div className="container text-center custom-home">
        <div className="carousel-container">
          <Carousel />
        </div>

        <div className="custom-home__news-cards-container">
          <div className="custom-home__news-cards-container__heading">
            <h2>Personalized Recommendations</h2>
          </div>
          <div className="custom-home__news-cards-container__card-container">
            {articles.map(({ guid, title }) => (
              <div
                key={guid}
                className="custom-home__news-cards-container__card-container__card"
              >
                <NewsCards title={title} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
