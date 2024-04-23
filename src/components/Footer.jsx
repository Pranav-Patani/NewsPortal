import React from "react";
import { Link } from "react-router-dom";

// Footer component
const Footer = () => {
  return (
    <>
      {/* Footer section with padding and custom styling */}
      <footer className="py-3 custom-footer">
        {/* Navigation links with justify-content-center and border-bottom */}
        <ul className="nav justify-content-center border-bottom pb-3 mb-3">
          {/* Home link */}
          <li className="nav-item">
            <Link to="/" className="custom-footer__link">
              Home
            </Link>
          </li>

          {/* About link */}
          <li className="nav-item">
            <Link to="/about" className="custom-footer__link">
              About
            </Link>
          </li>

          {/* Credits link */}
          <li className="nav-item">
            <Link to="/credits" className="custom-footer__link">
              Credits
            </Link>
          </li>

          {/* Contact link */}
          <li className="nav-item">
            <Link to="/contact" className="custom-footer__link">
              Contact
            </Link>
          </li>
        </ul>

        {/* Paragraph with text center and custom styling */}
        <p className="text-center custom-footer__paragraph">
          © 2024 Newshastra
        </p>
      </footer>
    </>
  );
};

// Exporting the Footer component
export default Footer;
