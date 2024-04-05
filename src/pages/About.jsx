import { useContext } from "react";

import logo from "/svg-logo.svg";
import whiteLogo from "/white-svg-logo.svg";
import FeedContext from "../contexts/FeedContext";

const About = () => {
  const { isDarkMode } = useContext(FeedContext);
  return (
    <>
      <section className="section-about">
        <div className="section-about__text">
          <h2 className="section-about__text__heading">
            Embark on a Personalized News Journey with Newshastra: Where Your
            Interests Shape the Stories You Discover
          </h2>
          <div className="section-about__text__paragraph">
            Welcome to Newshastra, a platform that puts you in the driver's seat
            of your news experience. Our mission is to empower you to explore
            the stories that matter most to you, tailored to your unique
            interests. By creating an account and selecting your preferences,
            you unlock a world of curated news content spanning technology,
            politics, sports, fashion, and beyond. Newshastra is more than just
            a news site; it's a reflection of your passions and a gateway to
            discovering the stories that shape our world. Join us on this
            journey of discovery and stay informed, engaged, and inspired.
          </div>
        </div>
        <div className="section-about__img-container">
          <img
            src={isDarkMode ? whiteLogo : logo}
            alt="logo"
            className="section-about__img-container__img"
          />
        </div>
      </section>
    </>
  );
};

// Exporting the About component
export default About;
