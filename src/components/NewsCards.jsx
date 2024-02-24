import { Link } from "react-router-dom";
import sample from "/Sample.jpg";

// NewsCards component receives a 'title' prop
const NewsCards = ({ title }) => {
  return (
    <>
      {/* News card container with custom styling */}
      <div className="card custom-newscard" style={{ width: 18 + "rem" }}>
        {/* Image section using the 'sample' image */}
        <img src={sample} className="card-img-top" alt="..." />

        {/* Body section containing the news title */}
        <div className="card-body custom-newscard__body">
          <p className="card-text">{title}</p>
        </div>

        {/* Read More button linking to the root path */}
        <Link to="/" className="btn custom-newscard__btn">
          Read More
        </Link>
      </div>
    </>
  );
};

// Exporting the NewsCards component as the default export
export default NewsCards;
