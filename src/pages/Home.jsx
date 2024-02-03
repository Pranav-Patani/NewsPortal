import Carousel from "../components/Carousel";
import NewsCards from "../components/NewsCards";

const Home = () => {
  const sampleNews = ["", "", "", "", "", ""];
  return (
    <>
      <div className="container text-center custom-home">
        <div className="carousel-container">
          <Carousel />
        </div>

        <div className="custom-home__news-cards-container">
          <div className="custom-home__news-cards-container__heading">
            <h2>Persnoalized Recommendations</h2>
          </div>
          <div className="custom-home__news-cards-container__card-container">
            {sampleNews.map((cur) => (
              <div
                key={cur}
                className="custom-home__news-cards-container__card-container__card"
              >
                <NewsCards />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
