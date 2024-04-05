import { Routes, Route } from "react-router-dom";
import { useContext } from "react";
// Importing global styles
import "./css/style.css";

// Importing components
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import NewsList from "./pages/NewsList";
import UserProfile from "./pages/UserProfile";
import Footer from "./components/Footer";
import Search from "./pages/Search";
import About from "./pages/About";

// App component
const App = () => {
  // Rendering components based on routes
  return (
    <>
      <div className="app">
        {/* Navbar component rendered at the top */}
        <Navbar />
        <div className="app__main">
          {/* Routes component for handling navigation */}
          <Routes>
            {/* Route for the Home page */}
            <Route path="/" element={<Home />} />
            <Route path="/news/:category" element={<NewsList />} />
            <Route path="/user" element={<UserProfile />} />
            <Route path="/search" element={<Search />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>

        {/* Footer component rendered at the bottom */}
        <div className="app__footer">
          <Footer />
        </div>
      </div>
    </>
  );
};

// Exporting the App component
export default App;
