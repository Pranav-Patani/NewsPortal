import { useContext } from "react";
import FeedContext from "../contexts/FeedContext";

const DarkMode = () => {
  const { setIsDarkMode } = useContext(FeedContext);

  const setDarkMode = () => {
    document.querySelector("body").setAttribute("data-theme", "dark");
  };
  const setLightMode = () => {
    document.querySelector("body").setAttribute("data-theme", "light");
  };
  let check = false;
  const toggleTheme = () => {
    check = !check;
    check ? setDarkMode() : setLightMode();
    setIsDarkMode(check);
  };
  return (
    <>
      <button className="dark-mode__btn" onClick={() => toggleTheme()}>
        Toggle Theme
      </button>
    </>
  );
};

export default DarkMode;
