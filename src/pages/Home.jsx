import { useContext } from "react";
import { Link } from "react-router-dom";

import Carousel from "../components/Carousel";
import NewsCards from "../components/NewsCards";
import FeedContext from "../contexts/FeedContext";

// Home component
const Home = () => {
  // Using useContext to access the articles from FeedContext
  const articles = useContext(FeedContext);
  const categoryList = [
    "India",
    "World",
    "NRI",
    "Business",
    "US",
    "Cricket",
    "Sports",
    "Science",
    "Environment",
    "Tech",
    "Education",
    "Entertainment",
    "Life & Style",
    "Astrology",
  ];

  return (
    <>
      {/* Container for the home page with custom styling */}
      <div className="container text-center custom-home">
        {/* Container for the carousel */}
        <div className="carousel-container">
          <Carousel />
        </div>

        <div className="custom-home__categories-container">
          <h2 className="custom-home__categories-container__heading">
            Categories
          </h2>
          <div className="custom-home__categories-container__categories-tabs">
            {categoryList.map((cur) => (
              <Link
                key={cur}
                to="/news"
                className="custom-home__categories-container__categories-tabs__link"
              >
                <div
                  key="cur"
                  className="custom-home__categories-container__categories-tabs__tab"
                >
                  {cur}
                </div>
              </Link>
            ))}
          </div>
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
            {articles.map(({ guid, title, link }) => (
              <div
                key={guid}
                className="custom-home__news-cards-container__card-container__card"
              >
                <NewsCards title={title} link={link} />
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
