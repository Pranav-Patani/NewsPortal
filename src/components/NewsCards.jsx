import { Link } from "react-router-dom";
import sample from "/Sample.jpg";

const NewsCards = ({ title }) => {
  return (
    <>
      <div className="card" style={{ width: 18 + "rem" }}>
        <img src={sample} className="card-img-top" alt="..." />
        <div className="card-body">
          <p className="card-text">{title}</p>
          <Link to="/" className="btn custom-newscards__btn">
            Read More
          </Link>
        </div>
      </div>
    </>
  );
};

export default NewsCards;
