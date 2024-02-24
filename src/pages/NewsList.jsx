import { useContext } from "react";
import FeedContext from "../contexts/FeedContext";

const NewsList = () => {
  const articles = useContext(FeedContext);
  const filteredArticles = articles.filter(
    ({ contentSnippet }) => contentSnippet
  );
  return (
    <>
      <div className="section__news-list">
        <h1 className="section__news-list__heading">Category News</h1>
        <div className="section__news-list__content">
          {filteredArticles.map(
            ({
              guid,
              title,
              contentSnippet,
              link,
              pubDate,
              enclosure: { url },
            }) => (
              <div
                key={guid}
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
                  <p className="section__news-list__content__card-body__date card-text">
                    <small className="text-muted">Published: {pubDate}</small>
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
