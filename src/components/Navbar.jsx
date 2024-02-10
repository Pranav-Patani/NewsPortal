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
                style={{ position: "relative", top: 0.5 + "rem" }}
              >
                <Dropdown>
                  <Dropdown.Toggle variant="none" id="dropdown-basic">
                    Cateogries
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Sports</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Crime</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Politics</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
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
                    Preferences
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">
                      Another action
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-3">
                      Something else
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

            <Dropdown>
              <Dropdown.Toggle
                variant="success"
                className="custom-navbar__sort"
                id="dropdown-basic"
                style={{ marginLeft: 0.5 + "rem" }}
              >
                Sort
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
