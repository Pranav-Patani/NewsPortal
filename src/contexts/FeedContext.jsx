import { useState, useEffect, createContext } from "react";
import axios from "axios";

// Creating a context for the feed data
const FeedContext = createContext({});

// FeedProvider component to manage and provide feed data
export const FeedProvider = ({ children }) => {
  // State to store articles
  const [articles, setArticles] = useState([]);
  const [category, setCategory] = useState(["Category"]);
  const [feedUrl, setFeedUrl] = useState("");

  // Function to fetch articles from the server
  const getArticles = async () => {
    try {
      const { data } = await axios.get("http://localhost:4000/");
      setArticles(data);
    } catch (error) {
      console.log(error);
    }
  };

  // useEffect to fetch articles on component mount
  useEffect(() => {
    getArticles();
  }, []);

  // Providing the articles through the FeedContext.Provider
  return (
    <FeedContext.Provider
      value={{ articles, category, setCategory, feedUrl, setFeedUrl }}
    >
      {children}
    </FeedContext.Provider>
  );
};

// Exporting the FeedContext (not commonly done, usually only export the Provider)
export default FeedContext;
