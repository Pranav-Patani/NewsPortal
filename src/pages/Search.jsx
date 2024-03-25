import { useContext } from "react";
import SearchContext from "../contexts/SearchContext";
import { nanoid } from "nanoid";

const Search = () => {
  const { searchNews } = useContext(SearchContext);
  const getDate = (newDate) => {
    let customDate = new Date(newDate);
    return `${customDate.toDateString()} at ${customDate.toLocaleTimeString()}`;
  };
  return (
    <>
      <div className="section__news-list" style={{ minHeight: "60vh" }}>
        <h1 className="section__news-list__heading">Search Results</h1>
        <div className="section__news-list__content">
          {searchNews.length !== 0 ? (
            searchNews.map(
              ({
                title,
                contentSnippet,
                link,
                pubDate,
                enclosure: { url },
              }) => (
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
                    <p className="section__news-list__content__card-body__date card-text">
                      <small className="text-muted">
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
            )
          ) : (
            <>
              <h4
                style={{ margin: "auto" }}
              >{`No matching results found :(`}</h4>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Search;
