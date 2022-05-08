import React, { useState } from "react";
import $ from "jquery";

function App() {
  const [headingText, setHeadingText] = useState("Hello");
  // const [onMouseEffect, setOnMouseEffect] = useState("white");

  //applying event listener for input element
  function inputValueChange(e) {
    setHeadingText(e.target.value);
  }
  //applying event listener for button element
  function gotClicked(e) {
    $("#heading").text(headingText);

    e.preventDefault();
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
      <h2>Submit a title to be shown above!</h2>
      <form onSubmit={gotClicked}>
        <input
          onChange={inputValueChange}
          type="text"
          placeholder="What's your name?"
        />
        <button id="submitBTN" onMouseOver={mouseHover} onMouseOut={mouseOut}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
