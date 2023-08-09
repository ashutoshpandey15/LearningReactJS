// import Aboutus from "./components/Aboutus";
// import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import React, { useState } from "react";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
  };
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "grey";
      showAlert("Dark mode has been enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
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
      {/* passing state variable alert  */}
      {/* <Alert alert={alert} /> */}
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
