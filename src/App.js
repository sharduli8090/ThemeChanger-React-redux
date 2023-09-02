import { BiSolidSun, BiSolidMoon } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { setTheme } from "./redux/actions";
// import { lightTheme, darkTheme } from "./styles/theme";

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
        theme ? "gray-900" : "white"
      } flex justify-center items-center min-h-screen flex-col`}
    >
         <div
      className={`w-20 h-8 mb-4 rounded-lg flex items-center justify-${
        !theme ? "start" : "end"
      } transition-all duration-300 ${
        !theme ? "bg-yellow-300" : "bg-gray-300"
      }`}
    >
      <button onClick={toggleTheme}>
        <div
          className={`transition-transform transform ${
            !theme ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {!theme ? (
            <div className={`bg-yellow-600 rounded-lg p-1.5`}>
              <BiSolidSun className="w-6 h-6 text-yellow-200" />
            </div>
          ) : (
            <div className={`bg-gray-600 rounded-lg p-1.5 mr-4`}>
              <BiSolidMoon className="w-6 h-6 " />
            </div>
          )}
        </div>
      </button>
    </div>
      <div
        className={`text-${
          theme ? 'black' : 'white'
        } flex justify-center items-center text-xl text-center w-64 h-32 bg-${!theme ? 'blue-200' : 'gray-600'} rounded-lg shadow-lg p-4 `}
      >
        Theme Change
      </div>
    </div>
    </>
    );
};

export default App;
