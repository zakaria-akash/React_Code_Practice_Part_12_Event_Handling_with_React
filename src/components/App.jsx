import React, { useState } from "react";
import $ from "jquery";

function App() {
  const [headingText1, setHeadingText1] = useState("Hello");
  const [headingText2, setHeadingText2] = useState("World!");
  // const [onMouseEffect, setOnMouseEffect] = useState("white");

  //applying event listener for input element
  function updateFirstInput(e) {
    setHeadingText1(e.target.value);
  }
  function updateLastInput(e) {
    setHeadingText2(e.target.value);
  }
  //applying event listener for button element
  function gotClicked(e) {
    $("#heading").text(headingText1 + " " + headingText2);

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
      <h1 id="heading">Hello World!</h1>
      <p>Submit your first name and last name to be shown above!</p>
      <form onSubmit={gotClicked}>
        <input
          onChange={updateFirstInput}
          type="text"
          placeholder="First Name"
        />
        <input onChange={updateLastInput} type="text" placeholder="Last Name" />
        <button id="submitBTN" onMouseOver={mouseHover} onMouseOut={mouseOut}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
