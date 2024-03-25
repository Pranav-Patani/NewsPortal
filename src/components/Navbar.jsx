import { Link } from "react-router-dom";
import { useContext } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Dropdown from "react-bootstrap/Dropdown";
import logo from "/svg-logo.svg";
import SearchContext from "../contexts/SearchContext";
import { FaSearch } from "react-icons/fa";

// Navbar component
const Navbar = () => {
  const { loginWithRedirect, logout, isAuthenticated } = useAuth0();
  const { handleSearch } = useContext(SearchContext);
  return (
    <>
      {/* Navigation bar with fixed-top and expanded options */}
      <nav className="navbar fixed-top navbar-expand-lg bg-body-tertiary custom-navbar">
        <div className="container-fluid">
          {/* Link to home with logo */}
          <Link to="/">
            <img src={logo} alt="logo" className="custom-navbar__logo" />
          </Link>

          {/* Navbar toggler button for mobile view */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarScroll"
            aria-controls="navbarScroll"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Navbar collapse section */}
          <div className="collapse navbar-collapse" id="navbarScroll">
            {/* Navbar links with scrolling and custom styling */}
            <ul
              className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll"
              style={{ bsScrollHeight: 100 + "px" }}
            >
              {/* Home link */}
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  <button type="button" className="btn custom-navbar__btn">
                    Home
                  </button>
                </Link>
              </li>

              {/* About Us link */}
              <li className="nav-item">
                <Link className="nav-link" to="/about-us">
                  <button type="button" className="btn custom-navbar__btn">
                    About Us
                  </button>
                </Link>
              </li>
              {isAuthenticated ? (
                <li className="nav-item">
                  <Link className="nav-link" to="/user">
                    <button type="button" className="btn custom-navbar__btn">
                      Profile
                    </button>
                  </Link>
                </li>
              ) : (
                ""
              )}

              {/* Settings dropdown */}
              <li
                className="nav-item"
                style={{
                  position: "relative",
                  top: 0.5 + "rem",
                  marginLeft: 0.5 + "rem",
                }}
              >
                {isAuthenticated ? (
                  <Dropdown>
                    <Dropdown.Toggle variant="none" id="dropdown-basic">
                      Settings
                    </Dropdown.Toggle>

                    {/* Dropdown menu with options */}
                    <Dropdown.Menu>
                      <Dropdown.Item href="#/action-1">Theme</Dropdown.Item>
                      <Dropdown.Item href="#/action-2">
                        Preferences
                      </Dropdown.Item>
                      <Dropdown.Item
                        className="custom-navbar__settings__logout"
                        href="#/action-3"
                      >
                        <button
                          className="custom-navbar__settings__logout-btn"
                          onClick={() =>
                            logout({
                              logoutParams: {
                                returnTo: window.location.origin,
                              },
                            })
                          }
                        >
                          Logout
                        </button>
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                ) : (
                  ""
                )}
              </li>
            </ul>

            {/* Search bar */}
            <input
              className="form-control me-2 custom-navbar__search-bar"
              type="search"
              placeholder="Search"
              aria-label="Search"
              onChange={(e) => handleSearch(e)}
            />

            {/* Search button */}
            <div className="custom-navbar__search-icon">
              <FaSearch />
              <div className="custom-navbar__search-icon__tip">
                Type to search
              </div>
            </div>

            {/* Login button */}
            <button
              className="btn custom-navbar__login"
              type="submit"
              onClick={
                isAuthenticated
                  ? () =>
                      logout({
                        logoutParams: { returnTo: window.location.origin },
                      })
                  : () => loginWithRedirect()
              }
            >
              {isAuthenticated ? `Logout` : `Login`}
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

// Exporting the Navbar component
export default Navbar;
