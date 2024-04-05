import { useContext, useState } from "react";
import FeedContext from "../contexts/FeedContext";

const DarkMode = () => {
  const { setIsDarkMode } = useContext(FeedContext);
  const [check, setCheck] = useState(false);

  const setDarkMode = () => {
    document.querySelector("body").setAttribute("data-theme", "dark");
  };
  const setLightMode = () => {
    document.querySelector("body").setAttribute("data-theme", "light");
  };

  const toggleTheme = () => {
    setCheck(!check);
    check ? setDarkMode() : setLightMode();
    setIsDarkMode(check);
  };

  const selectedTheme = localStorage.getItem("selectedTheme");
  if (selectedTheme === "dark") {
    setDarkMode();
  }
  return (
    <>
      <div className="dark-mode">
        <button className="dark-mode__btn" onClick={toggleTheme}>
          Toggle Theme
        </button>
      </div>
    </>
  );
};

export default DarkMode;
