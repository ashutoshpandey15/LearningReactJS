import React, { useState } from "react";

export default function Textform(props) {
  // this function on clickup will change the text to uppercase
  const Onclickup = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };
  const Onclickdown = () => {
    // this function will change the text to lOWER CASE
    let newText = text.toLowerCase();
    setText(newText);
  };
  const handleOnchange = (event) => {
    console.log("Onchange");
    setText(event.target.value);
  };
  const toReverse = () => {
    let newText = text.split("").reverse().join("");
    setText(newText);
  };

  const [text, setText] = useState(""); // shows default text value
  return (
    <>
      <div
        className="container mb-3 my-3"
        style={{
          color: props.mode === "dark" ? "white" : "black",
        }}
      >
        <div className="mb-3">
          <h1>{props.heading}</h1>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="8"
            value={text}
            onChange={handleOnchange}
            style={{
              backgroundColor: props.mode === "dark" ? "grey" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
          ></textarea>
        </div>
        <button className="btn mx-2 btn-primary" onClick={Onclickup}>
          To Uppercase
        </button>
        <button className="btn btn-primary mx-2" onClick={Onclickdown}>
          To Lowercase
        </button>
        <button className="btn btn-primary mx-2" onClick={toReverse}>
          To Reverse
        </button>
      </div>
      <div
        className="container"
        style={{
          color: props.mode === "dark" ? "white" : "black",
        }}
      >
        <h2>Your Text Summary</h2>
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
