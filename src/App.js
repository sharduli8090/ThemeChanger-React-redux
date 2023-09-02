import { BiSolidSun, BiSolidMoon } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { setTheme } from "./redux/actions";
import { lightTheme, darkTheme } from "./styles/theme";

const App = () => {
  const theme = useSelector((state) => state.theme.theme);
  const dispatch = useDispatch();

  const toggleTheme = () => {
    dispatch(setTheme(!theme));
  };
  return(
    <>
     <div
      className={`bg-${
        theme ? darkTheme.bodyBgColor : lightTheme.bodyBgColor
      } flex justify-center items-center min-h-screen flex-col`}
    >
         <div
      className={`w-20 h-8 mb-4 rounded-lg flex items-center justify-${
        !theme ? "start" : "end"
      } transition-all duration-300 ${
        !theme ? lightTheme.toggleBg : darkTheme.toggleBg
      }`}
    >
      <button onClick={toggleTheme}>
        <div
          className={`transition-transform transform ${
            !theme ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {!theme ? (
            <div className={`bg-${lightTheme.toggleBtn} rounded-lg p-1.5`}>
              <BiSolidSun className="w-6 h-6 text-yellow-200" />
            </div>
          ) : (
            <div className={`bg-${darkTheme.toggleBtn} rounded-lg p-1.5 mr-4`}>
              <BiSolidMoon className="w-6 h-6 " />
            </div>
          )}
        </div>
      </button>
    </div>
      <div
        className={`text-${
          theme ? darkTheme.btnTextColor : lightTheme.btnTextColor
        } flex justify-center items-center text-xl text-center w-64 h-32 bg-${
          theme ? darkTheme.boxBgColor : lightTheme.boxBgColor
        } rounded-lg shadow-lg p-4 `}
      >
        Theme Changer
      </div>
    </div>
    </>
    );
};

export default App;
