import { useState } from "react";

import "./App.css";

// Components
import Title from "./components/Title";
import FullName from "./components/FullName";

function App() {
  const [count, setCount] = useState(0);
  const [state, onOffLigth] = useState("off");

  const handleClick = (increase) => {
    let newCount = count;
    if (increase) {
      newCount = newCount + 1;
    } else {
      newCount = newCount - 1;
    }
    setCount(newCount);
  };

  const handleClick2 = (off_on) => {
    let button = "";
    if (off_on === "off") {
      button = "on";
    }
    if (off_on === "on") {
      button = "off";
    } else {
      button = "off";
    }
    onOffLigth(button);
  };

  const isMultiple = count % 5 === 0 && count !== 0 ? true : false;
  const countType = isMultiple ? "Es multiplo de 5" : "No es multiplo de 5";
  const countClass = isMultiple ? "active" : "inactivo";

  const isOnOff = state === "off" ? true : false;
  const buttonOn = isOnOff ? "on" : "off";
  const colorButton = buttonOn ? "squareOn" : "squareOff";

  return (
    <div className="App">
      <header className="App-header">
        <Title text="Aaron"></Title>
        <FullName firstName="Luis" lastName="Vera"></FullName>
        <p className={countClass}>
          Counter: {count}, {countType}
        </p>
        <button onClick={() => handleClick(true)}>Increase</button>

        <div className={colorButton}>{state}</div>
        <button onClick={() => handleClick2(true)}>off_on</button>
      </header>
    </div>
  );
}

export default App;
