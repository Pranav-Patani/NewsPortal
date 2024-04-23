import { FaLinkedin, FaGithub } from "react-icons/fa";

const Contact = () => {
  return (
    <>
      <div className="contact-container">
        <h2 className="contact-container__heading">Contact us</h2>
        <div className="contact-container__row">
          <h4 className="contact-container__row__heading">Divyansh Pandey</h4>
          <p className="contact-container__row__text">
            <a
              href="https://www.linkedin.com/in/divyansh-pandey0108/"
              target="_blank"
              className="contact-container__row__text__link"
            >
              <FaLinkedin />
            </a>
          </p>
          <p className="contact-container__row__text">
            <a
              href="https://github.com/Divyansh0108"
              target="_blank"
              className="contact-container__row__text__link"
            >
              <FaGithub />
            </a>
          </p>
        </div>
        <div className="contact-container__row">
          <h4 className="contact-container__row__heading">Pranav Patani</h4>
          <p className="contact-container__row__text">
            <a
              href="https://www.linkedin.com/in/pranavpatani/"
              target="_blank"
              className="contact-container__row__text__link"
            >
              <FaLinkedin />
            </a>
          </p>
          <p className="contact-container__row__text">
            <a
              href="https://github.com/Pranav-Patani"
              target="_blank"
              className="contact-container__row__text__link"
            >
              <FaGithub />
            </a>
          </p>
        </div>
      </div>
    </>
  );
};

export default Contact;
