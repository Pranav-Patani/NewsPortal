import { useState, useEffect, createContext } from "react";
import axios from "axios";

export const FeedContext = createContext([]);

export const FeedProvider = ({ children }) => {
  const [articles, setArticles] = useState([]);

  const getArticles = async () => {
    try {
      const { data } = await axios.get("http://localhost:4000");
      setArticles(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getArticles();
  }, []);

  return (
    <FeedContext.Provider value={articles}>{children}</FeedContext.Provider>
  );
};

export default FeedContext;
