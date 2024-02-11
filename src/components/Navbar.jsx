import { Link } from "react-router-dom";
import logo from "/svg-logo.svg";
import Dropdown from "react-bootstrap/Dropdown";

const Navbar = () => {
  return (
    <>
      <nav className="navbar fixed-top navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link to="/">
            <img src={logo} alt="logo" className="custom-navbar__logo" />
          </Link>
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
          <div className="collapse navbar-collapse" id="navbarScroll">
            <ul
              className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll"
              style={{ bsScrollHeight: 100 + "px" }}
            >
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  <button type="button" className="btn">
                    Home
                  </button>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about-us">
                  <button type="button" className="btn">
                    About Us
                  </button>
                </Link>
              </li>

              <li
                className="nav-item"
                style={{
                  position: "relative",
                  top: 0.5 + "rem",
                  marginLeft: 0.5 + "rem",
                }}
              >
                <Dropdown>
                  <Dropdown.Toggle variant="none" id="dropdown-basic">
                    Settings
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Theme</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Preferences</Dropdown.Item>
                    <Dropdown.Item
                      className="custom-navbar__settings__logout"
                      href="#/action-3"
                    >
                      Logout
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </li>
            </ul>

            <input
              className="form-control me-2 custom-navbar__search-bar"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn custom-navbar__search-btn" type="submit">
              Search
            </button>



            <button className="btn custom-navbar__login" type="submit">
              Login
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
