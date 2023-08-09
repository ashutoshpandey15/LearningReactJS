// import Aboutus from "./components/Aboutus";
// import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import React, { useState } from "react";

function App() {
  const [mode, setMode] = useState("light");
  
  
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "grey";
     
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      
    }
  };
  return (
    <>
      <Navbar
        title="TextUtils"
        abouttext="About TextUtils"
        mode={mode}
        toggleMode={toggleMode}
      />
    
      <div className="container">
        <Textform heading="Enter the text to analyze" mode={mode} />
      </div>
      {/* <div>
        <Aboutus />
      </div> */}
    </>
  );
}



export default App;
