import { useContext } from "react";
import { Link } from "react-router-dom";

import Carousel from "../components/Carousel";
import NewsCards from "../components/NewsCards";
import FeedContext from "../contexts/FeedContext";
import { nanoid } from "nanoid";

// Home component
const Home = () => {
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
      name: "Entertainment",
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

  // Using useContext to access the articles from FeedContext
  const { articles, setCategory, setFeedUrl } = useContext(FeedContext);

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
            {categoryList.map(({ name, url }) => (
              <Link
                key={name}
                to={`/news/${name.toLowerCase()}`}
                className="custom-home__categories-container__categories-tabs__link"
                onClick={() => {
                  setCategory(name);
                  setFeedUrl(url);
                }}
              >
                <div className="custom-home__categories-container__categories-tabs__tab">
                  {name}
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
            {articles.map(({ title, link, enclosure: { url } }) => (
              <div
                key={nanoid()}
                className="custom-home__news-cards-container__card-container__card"
              >
                <NewsCards title={title} link={link} imgUrl={url} />
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
