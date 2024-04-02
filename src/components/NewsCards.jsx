// NewsCards component receives a 'title' prop
const NewsCards = ({ title, link, imgUrl }) => {
  return (
    <>
      {/* News card container with custom styling */}
      <div className="card custom-newscard">
        {/* Image section using the 'sample' image */}
        <img src={imgUrl} className="card-img-top" alt="news" />

        {/* Body section containing the news title */}
        <div className="card-body custom-newscard__body">
          <p className="card-text">{title}</p>
        </div>

        {/* Read More button linking to the root path */}
        <a href={link} target="_blank" className="btn custom-newscard__btn">
          Read More
        </a>
      </div>
    </>
  );
};

// Exporting the NewsCards component as the default export
export default NewsCards;
