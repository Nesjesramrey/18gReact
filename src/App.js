import { useEffect, useState } from "react";

import "./App.css";

function App() {
  // const [itemActive, setItemActive] = useState(null);

  // const isActive = (itemNumber) => itemNumber === itemActive;

  // console.log(itemActive);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setIsLoading(false);
  //   }, 3000);
  // }, []);

  const koders = [
    {
      firstName: "Luis",
      lastName: "Vera",
      age: 24,
      gender: "m",
      photoURL: "URL VALIDA",
    },
    {
      firstName: "Nestor",
      lastName: "Ramírez",
      age: 40,
      gender: "m",
      photoURL: "URL VALIDA",
    },
    {
      firstName: "David",
      lastName: "Romero",
      age: 28,
      gender: "m",
      photoURL: "URL VALIDA",
    },
    {
      firstName: "Yusef",
      lastName: "Lopéz",
      age: 40,
      gender: "m",
      photoURL: "URL VALIDA",
    },
  ];

  const listKoders = koders.map((koder, index) => (
    <li className="card" key={index}>
      <span className="card-photo">{koder.photoURL}</span>
      <span className="card-title">
        {koder.firstName} {koder.lastName}
      </span>{" "}
      <br></br>
      <span className="card-age">{koder.age}</span> <br></br>
      <span className="card-gender">{koder.gender}</span>
    </li>
  ));
  //console.log(listKoders);
  return (
    <div className="App">
      <header className="App-header">
        <ul>{listKoders}</ul>
      </header>
    </div>
  );
}

export default App;
