import { Routes, Route } from "react-router-dom";
import { useContext } from "react";
// Importing global styles
import "./css/style.css";

// Importing components
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import NewsList from "./pages/NewsList";
import Footer from "./components/Footer";
import FeedContext from "./contexts/FeedContext";

// App component
const App = () => {
  const { feedUrl } = useContext(FeedContext);
  console.log(feedUrl);
  // Rendering components based on routes
  return (
    <>
      {/* Navbar component rendered at the top */}
      <Navbar />

      {/* Routes component for handling navigation */}
      <Routes>
        {/* Route for the Home page */}
        <Route path="/" element={<Home />} />
        <Route path="/news/:category" element={<NewsList />} />
      </Routes>

      {/* Footer component rendered at the bottom */}
      <Footer />
    </>
  );
};

// Exporting the App component
export default App;
