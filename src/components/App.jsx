import React, { useState } from "react";
import $ from "jquery";

function App() {
  const [headingText, setHeadingText] = useState("Hello");
  // const [onMouseEffect, setOnMouseEffect] = useState("white");

  function inputValueChange(e) {
    setHeadingText(e.target.value);
  }
  function gotClicked() {
    $("#heading").text(headingText);
  }
  function mouseHover() {
    $("#submitBTN").css("background-color", "black");
  }
  function mouseOut() {
    $("#submitBTN").css("background-color", "white");
  }
  return (
    <div className="container">
      <h1 id="heading">Hello</h1>
      <input
        onChange={inputValueChange}
        type="text"
        placeholder="What's your name?"
      />
      <button
        id="submitBTN"
        onClick={gotClicked}
        onMouseOver={mouseHover}
        onMouseOut={mouseOut}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
