// import Aboutus from "./components/Aboutus";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import React, { useState } from "react";

function App() {
  const [mode, setMode] = useState("light");
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
    } else {
      setMode("light");
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
        <Textform heading="Enter the text to analyze" />
      </div>
      {/* <div>
        <Aboutus />
      </div> */}
    </>
  );
}

export default App;
