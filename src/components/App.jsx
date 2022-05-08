import React, { useState } from "react";
import $ from "jquery";

function App() {
  const [heading, setHeadingText] = useState({
    Text1: "",
    Text2: ""
  });
  function updateInput(e) {
    const inputName = e.target.name;
    const inputValue = e.target.value;

    setHeadingText((preValue) => {
      if (inputName === "fName") {
        return {
          Text1: inputValue,
          Text2: preValue.Text2
        };
      } else if (inputName === "lName") {
        return {
          Text1: preValue.Text1,
          Text2: inputValue
        };
      }
    });
  }

  function gotClicked(e) {
    $("#heading").text(heading.Text1 + " " + heading.Text2);

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
          onChange={updateInput}
          name="fName"
          type="text"
          placeholder="First Name"
        />
        <input
          onChange={updateInput}
          name="lName"
          type="text"
          placeholder="Last Name"
        />
        <button id="submitBTN" onMouseOver={mouseHover} onMouseOut={mouseOut}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
