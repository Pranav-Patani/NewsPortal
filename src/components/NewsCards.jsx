import { Link } from "react-router-dom";
import sample from "/Sample.jpg";

const NewsCards = ({ title }) => {
  return (
    <>
      <div className="card custom-newscard" style={{ width: 18 + "rem" }}>
        <img src={sample} className="card-img-top" alt="..." />
        <div className="card-body custom-newscard__body">
          <p className="card-text">{title}</p>
        </div>
        <Link to="/" className="btn custom-newscard__btn">
          Read More
        </Link>
      </div>
    </>
  );
};

export default NewsCards;
