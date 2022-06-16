import { useState } from "react";

import "./App.css";

//Components

import Title from "./components/Title";
import FullName from "./components/FullName";

function App() {
  // Local state
  // [0] = valor del state
  // [1] = función que actualiza el state
  // si `useState` recibe un argumento, este será el valor inicial del estado
  // si no el estado es undefined
  const [count, setCount] = useState(0);
  console.log(count, "COUNT");
  console.log(setCount, "SET_COUNT");

  const handleClick = () => {
    setCount(count + 1);
  };

  const handleClickResta = () => {
    setCount(count + -1);
  };

  return (
    <div className="App">
      <header className="App-header">
        <Title text="Aaron"></Title>
        <FullName firstName="Luis" lastName="Vera"></FullName>

        <p>Counter: {count}</p>
        <button onClick={handleClick}>Increase</button>
        <button onClick={handleClickResta}>Decrease</button>
      </header>
    </div>
  );
}

export default App;
