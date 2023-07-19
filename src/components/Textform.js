import React, { useState } from "react";

export default function Textform(props) {
  const Onclickup = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleOnchange = (event) => {
    console.log("Onchange");
    setText(event.target.value);
  };

  const [text, setText] = useState("Enter Your Text");
  return (
    <>
      <div className="mb-3 my-3">
        <h1>{props.heading}</h1>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="8"
          value={text}
          onChange={handleOnchange}
        ></textarea>
      </div>
      <button className="btn btn-primary" onClick={Onclickup}>
        Click To Convert To Uppercase
      </button>
    </>
  );
}
