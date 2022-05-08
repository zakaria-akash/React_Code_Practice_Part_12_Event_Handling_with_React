import React, { useState } from "react";
import $ from "jquery";

function App() {
  const [headingText, setHeadingText] = useState("Hello");
  // const [onMouseEffect, setOnMouseEffect] = useState("white");
  function gotClicked() {
    setHeadingText("Submitted");
  }

  function mouseHover() {
    $("#submitBTN").css("background-color", "black");
  }
  function mouseOut() {
    $("#submitBTN").css("background-color", "white");
  }
  return (
    <div className="container">
      <h1>{headingText}</h1>
      <input type="text" placeholder="What's your name?" />
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
