import "../index.css";
import ToggleButton from "./ToggleButton";
import { useSelector } from "react-redux";
import { lightTheme, darkTheme } from "../styles/theme";

const ThemeChanger = () => {
  const theme = useSelector((state) => state.theme.theme);

  return (
    <div
      className={`${
        theme ? darkTheme.bodyBgColor : lightTheme.bodyBgColor
      } flex justify-center items-center min-h-screen flex-col`}
    >
      <ToggleButton />
      <div
        className={`${
          theme ? darkTheme.btnTextColor : lightTheme.btnTextColor
        } flex justify-center items-center text-xl text-center w-64 h-32 ${
          theme ? darkTheme.boxBgColor : lightTheme.boxBgColor
        } rounded-lg shadow-lg p-4 `}
      >
        Theme Changer
      </div>
    </div>
  );
};

export default ThemeChanger;
