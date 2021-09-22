import React, { useState } from "react";

import "./App.css";
import Keypad from "./Keypad";

function App() {
  const [result, setResult] = useState("");

  // This funtion handles input change events
  const handleInputChange = (event) => setResult(event.target.value);

  // This function handles keypad button clicks
  const changeInput = (clickedButton) => setResult(clickedButton);

  return (
    <div className="container">
      <form action="">
        <input onChange={handleInputChange} value={result || 0} type="text" />
      </form>
      <Keypad changeMyInput={changeInput} />
    </div>
  );
}

export default App;
