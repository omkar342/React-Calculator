import React, { useEffect } from "react";

import "./Keypad.css";

function Keypad(props) {
  // Listener for keypad clicks
  useEffect(() => {
    window.addEventListener("keydown", handleKeyPress);

    return () => window.removeEventListener("keydown", handleKeyPress);
  }, []);

  // button press function
  const handleClick = (event) =>
    props.changeMyInput((prevResult) => prevResult + event.target.name);

  // function to clear the inputs
  const clear = () => props.changeMyInput("");

  // Function to handle backspaces
  const backspace = () =>
    props.changeMyInput((prevResult) =>
      prevResult.slice(0, prevResult.length - 1)
    );

  // Funtion to Handle key press
  const handleKeyPress = (event) => {
    let key = event.keyCode || event.charCode;

    console.log(event.key);

    if (key == 8) {
      //backspace pressed
      backspace();
      return;
    }

    if (key == 13) {
      // enter pressed
      handleSubmit();
      return;
    }

    key = event.key;

    if (key === "C" || key === "c") {
      // clear pressed
      clear();
      return;
    }

    if (key === "+" || key === "-" || key === "*" || key === "/") {
      // Pressed any operator
      console.log("Ca,e");
      props.changeMyInput((prevResult) => prevResult + key);
      return;
    }

    // Checking if any number is pressed
    const isNumber = /^[0-9]$/i.test(key);
    if (isNumber) props.changeMyInput((prevResult) => prevResult + key);
  };

  // Function which is called when the user submits the input
  const handleSubmit = () => {
    try {
      props.changeMyInput((prevResult) => eval(prevResult).toString());
    } catch (err) {
      console.log(err);
      props.changeMyInput("Error : Invalid Input");
    }
  };

  return (
    <div className="keypad">
      <button className="clear" onClick={clear}>
        Clear
      </button>
      <button className="backspace" onClick={backspace}>
        C
      </button>
      <button name="/" className="orange" onClick={handleClick}>
        &divide;
      </button>
      <button name="7" onClick={handleClick}>
        7
      </button>
      <button name="8" onClick={handleClick}>
        8
      </button>
      <button name="9" onClick={handleClick}>
        9
      </button>
      <button name="*" className="orange" onClick={handleClick}>
        &times;
      </button>
      <button name="4" onClick={handleClick}>
        4
      </button>
      <button name="5" onClick={handleClick}>
        5
      </button>
      <button name="6" onClick={handleClick}>
        6
      </button>
      <button name="-" className="orange" onClick={handleClick}>
        &minus;
      </button>
      <button name="1" onClick={handleClick}>
        1
      </button>
      <button name="2" onClick={handleClick}>
        2
      </button>
      <button name="3" onClick={handleClick}>
        3
      </button>
      <button name="+" className="orange" onClick={handleClick}>
        &#43;
      </button>
      <button name="0" onClick={handleClick}>
        0
      </button>
      <button name="." onClick={handleClick}>
        .
      </button>
      <button className="equals orange" onClick={handleSubmit}>
        =
      </button>
    </div>
  );
}

export default Keypad;
