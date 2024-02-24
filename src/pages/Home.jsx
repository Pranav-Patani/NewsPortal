import { useContext } from "react";

import Carousel from "../components/Carousel";
import NewsCards from "../components/NewsCards";
import FeedContext from "../contexts/FeedContext";

// Home component
const Home = () => {
  // Using useContext to access the articles from FeedContext
  const articles = useContext(FeedContext);

  return (
    <>
      {/* Container for the home page with custom styling */}
      <div className="container text-center custom-home">

        {/* Container for the carousel */}
        <div className="carousel-container">
          <Carousel />
        </div>

        {/* Container for personalized news cards */}
        <div className="custom-home__news-cards-container">

          {/* Heading for personalized recommendations */}
          <div className="custom-home__news-cards-container__heading">
            <h2>Personalized Recommendations</h2>
          </div>

          {/* Container for the news cards */}
          <div className="custom-home__news-cards-container__card-container">
            {/* Mapping through articles and rendering NewsCards for each */}
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

// Exporting the Home component
export default Home;
