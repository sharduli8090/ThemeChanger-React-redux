import "../index.css";
import ToggleButton from "./ToggleButton"; 
const ThemeChanger = ()=>{ 
  return(
      <div className="bg-white flex justify-center items-center min-h-screen flex-col">
  <ToggleButton/>
      <div className="w-64 h-32 bg-blue-200 rounded-lg shadow-lg p-4">
      Theme Changer
      </div>
    </div>
);
}

export default ThemeChanger;