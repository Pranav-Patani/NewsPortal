// Importing the sample image
import sample from "/Sample.jpg";

// Carousel component
const Carousel = () => {
  return (
    // Carousel container with custom styling and data attributes
    <div
      id="carouselExampleCaptions"
      className="carousel slide custom-carousel"
      data-bs-ride="carousel"
      data-bs-theme="dark"
    >
      {/* Carousel indicators */}
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>

      {/* Carousel inner container */}
      <div className="carousel-inner">
        {/* First slide */}
        <div className="carousel-item active">
          {/* Image for the first slide */}
          <img
            src={sample}
            className="d-block w-100 custom-carousel__img"
            alt="news"
          />

          {/* Caption for the first slide */}
          <div className="carousel-caption d-none d-md-block">
            <h5>First slide label</h5>
            <p>Some representative placeholder content for the first slide.</p>
          </div>
        </div>

        {/* Second slide */}
        <div className="carousel-item">
          {/* Image for the second slide */}
          <img
            src={sample}
            className="d-block w-100 custom-carousel__img"
            alt="news"
          />

          {/* Caption for the second slide */}
          <div className="carousel-caption d-none d-md-block">
            <h5>Second slide label</h5>
            <p>Some representative placeholder content for the second slide.</p>
          </div>
        </div>

        {/* Third slide */}
        <div className="carousel-item">
          {/* Image for the third slide */}
          <img
            src={sample}
            className="d-block w-100 custom-carousel__img"
            alt="news"
          />

          {/* Caption for the third slide */}
          <div className="carousel-caption d-none d-md-block">
            <h5>Third slide label</h5>
            <p>Some representative placeholder content for the third slide.</p>
          </div>
        </div>
      </div>

      {/* Carousel control buttons for previous and next slides */}
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

// Exporting the Carousel component
export default Carousel;
