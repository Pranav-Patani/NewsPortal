const Credits = () => {
  return (
    <>
      <div className="credits-container">
        <h2 className="credits-container__heading">Credits</h2>
        <div className="credits-inner-container">
          <div className="credits-inner-container__row">
            <h3 className="credits-inner-container__row__heading">
              Developed by:
            </h3>
            <p className="credits-inner-container__row__text">
              Divyansh Pandey
            </p>
            <p className="credits-inner-container__row__text">Pranav Patani </p>
          </div>
          <div className="credits-inner-container__row">
            <h3 className="credits-inner-container__row__heading">
              Major TechStack:
            </h3>
            <p className="credits-inner-container__row__text">React.js</p>
            <p className="credits-inner-container__row__text">Node.js</p>
            <p className="credits-inner-container__row__text">Sass</p>
          </div>
        </div>
        <div className="credits-container__row-center">
          <h3 className="credits-container__row-center__heading">
            Special Thanks:
          </h3>
          <p className="credits-container__row-center__text">
            <strong>Mr. Saurabh Srivastava</strong>, for his guidance and
            support.
          </p>
        </div>
      </div>
    </>
  );
};

export default Credits;
