import sample from "/Sample.jpg";

const NewsList = () => {
  return (
    <>
      <div className="section__news-list">
        <h1 className="section__news-list__heading">Category News</h1>
        <div className="section__news-list__content">
          <div className="section__news-list__content__card card mb-3">
            <img
              src={sample}
              className="section__news-list__content__card-img card-img-top"
              alt="news"
            />
            <div className="section__news-list__content__card-body card-body">
              <h5 className="section__news-list__content__card-body__title card-title">
                Card title
              </h5>
              <p className="section__news-list__content__card-body__text card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
              <p className="section__news-list__content__card-body__date card-text">
                <small className="text-muted">Last updated 3 mins ago</small>
              </p>
              <a
                href=""
                className="btn section__news-list__content__card-body__btn"
              >
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsList;
