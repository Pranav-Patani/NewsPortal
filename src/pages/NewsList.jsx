import { useContext, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import FeedContext from "../contexts/FeedContext";
import { nanoid } from "nanoid";

const NewsList = () => {
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
  const { articles, category, setFeedUrl } = useContext(FeedContext);
  const filteredArticles = articles.filter(
    ({ contentSnippet }) => contentSnippet
  );
  const getDate = (newDate) => {
    let customDate = new Date(newDate);
    return `${customDate.toDateString()} at ${customDate.toLocaleTimeString()}`;
  };
  const { category: selectedCategory } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (selectedCategory) {
      const categoryUrl = categoryList.find(
        (item) => item.name.toLowerCase() === selectedCategory.toLowerCase()
      )?.url;
      if (categoryUrl) {
        setFeedUrl(categoryUrl);
        navigate(`/news/${selectedCategory.toLowerCase()}`);
      }
    }
  }, [selectedCategory, setFeedUrl, navigate]);
  return (
    <>
      <div className="section__news-list">
        <h1 className="section__news-list__heading">{category}</h1>
        <div className="section__news-list__content">
          {filteredArticles.map(
            ({ title, contentSnippet, link, pubDate, enclosure: { url } }) => (
              <div
                key={nanoid()}
                className="section__news-list__content__card card mb-3"
              >
                <img
                  src={url}
                  className="section__news-list__content__card-img card-img-top"
                  alt="news"
                />
                <div className="section__news-list__content__card-body card-body">
                  <h5 className="section__news-list__content__card-body__title card-title">
                    {title}
                  </h5>
                  <p className="section__news-list__content__card-body__text card-text">
                    {contentSnippet.substring(0, 300)}...
                  </p>
                  <p className="card-text">
                    <small className="section__news-list__content__card-body__date">
                      Published: {getDate(pubDate)}
                    </small>
                  </p>
                  <a
                    href={link}
                    target="_blank"
                    className="btn section__news-list__content__card-body__btn"
                  >
                    Read More
                  </a>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </>
  );
};

export default NewsList;
