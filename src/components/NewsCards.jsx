import { Link } from "react-router-dom";
import sample from "/Sample.jpg";

const NewsCards = () => {
  return (
    <>
      <div className="card" style={{ width: 18 + "rem" }}>
        <img src={sample} className="card-img-top" alt="..." />
        <div className="card-body">
          <p className="card-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At,
            recusandae unde!
          </p>
          <Link to="/" className="btn custom-newscards__btn">
            Read More
          </Link>
        </div>
      </div>
    </>
  );
};

export default NewsCards;
