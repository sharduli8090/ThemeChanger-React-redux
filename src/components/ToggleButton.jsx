import { useState } from "react";
import { BiSolidSun, BiSolidMoon } from "react-icons/bi";

const ToggleButton = ()=>{
    const [isDarkTheme, setDarkTheme] = useState(false); 

    const handleToggle = () => {
      setDarkTheme(!isDarkTheme);
    }; 
    return(

<div className={`w-20 h-8 mb-4 rounded-lg flex items-center justify-${isDarkTheme ? 'end' : 'start'} transition-all duration-300 ${isDarkTheme ? 'bg-gray-300' : 'bg-yellow-300'}`}>
      <button onClick={handleToggle}  >
        <div className={`transition-transform transform ${isDarkTheme ? 'translate-x-full' : 'translate-x-0'}`}>
          {isDarkTheme ? (
            <div className="bg-gray-600 rounded-lg p-1.5 mr-4">
            <BiSolidMoon className="w-6 h-6 " />
            </div>
          ) : (
            <div className="bg-yellow-600 rounded-lg p-1.5">
            <BiSolidSun className="w-6 h-6 text-yellow-200" />
            </div>
          )}
        </div>
      </button>
    </div>
    );
}

export default ToggleButton;