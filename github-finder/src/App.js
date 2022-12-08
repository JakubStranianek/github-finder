import './App.css';
import moon from "./assets/moon.png"
import sun from "./assets/sun.png"

import { useState, useEffect } from "react"

function App() {
  const [mode, setMode] = useState("dark");
  const [modeImage, setModeImage] = useState(moon);
  
  useEffect(() => {
    if (mode === "light") {
      document.documentElement.classList.add("dark")
      setModeImage(sun);
    } else {  
      document.documentElement.classList.remove("dark")
      setModeImage(moon);
    }
  }, [mode])

  const handleSwitchMode = () => {
    setMode(mode === "dark" ? "light" : "dark");
  }

  return (
    <div className="App w-full h-screen bg-myLightWhite dark:bg-myDarkModeBlack">
      <main className='w-10/12 mr-auto ml-auto'>
       <header className='pt-8 flex justify-between items-center'>
          <h1 className='text-3xl font-bold dark:text-myWhite'>devfinder</h1>

          <div className="flex">
            <span className='uppercase pr-4 dark:text-myWhite'>{mode}</span>
            <img src={modeImage} alt={modeImage} className="w-5 h-5 cursor-pointer" onClick={handleSwitchMode}/>
          </div>
       </header>
      </main>
    </div>
  );
}

export default App;
