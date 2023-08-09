import Aboutus from "./components/Aboutus";
// import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";


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
     
      <BrowserRouter>
        <Navbar
          title="TextUtils"
          abouttext="AboutUs"
          mode={mode}
          toggleMode={toggleMode}
        />
        
        <div className="container my-4" mode={mode}>
          <Routes>
            <Route exact path="/aboutus" element={<Aboutus />}></Route>
            <Route
              exact path="/"
              element={
                <Textform
                  
                  heading="Enter Text to analyze "
                  mode={mode}
                />
              }
            ></Route>
          </Routes>
        </div>
      </BrowserRouter>

















    </>
  );
}



export default App;
