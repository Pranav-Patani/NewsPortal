import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="py-3 custom-footer">
        <ul className="nav justify-content-center border-bottom pb-3 mb-3">
          <li className="nav-item">
            <Link to="/" className="nav-link custom-footer__link">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/" className="nav-link custom-footer__link">
              Features
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/" className="nav-link custom-footer__link">
              Pricing
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/" className="nav-link custom-footer__link">
              FAQs
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/" className="nav-link custom-footer__link">
              About
            </Link>
          </li>
        </ul>
        <p className="text-center custom-footer__paragraph">
          © 2024 Newshastra
        </p>
      </footer>
    </>
  );
};

export default Footer;
