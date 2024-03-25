import { useState, createContext, useContext } from "react";
import FeedContext from "./FeedContext";
import { useNavigate } from "react-router-dom";

const SearchContext = createContext({});

export const SearchProvider = ({ children }) => {
  const { articles } = useContext(FeedContext);
  const [searchNews, setSearchNews] = useState([]);
  const navigate = useNavigate();

  const handleSearch = (event) => {
    const key = event.target.value;
    setSearchNews(
      articles.filter(({ title }) =>
        title.toLowerCase().includes(key.toLowerCase())
      )
    );
    event.target.value == "" ? navigate("/") : navigate("/search");
  };

  return (
    <SearchContext.Provider value={{ searchNews, handleSearch }}>
      {children}
    </SearchContext.Provider>
  );
};

export default SearchContext;
