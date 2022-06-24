import { useEffect, useState } from "react";
import "./Home.css";

// Services
import { getCharacters } from "../../services/characters";

export default function Home() {
  const [characters, setCharacters] = useState([]);

  // REQUEST A Rick and Morty API.
  useEffect(() => {
    const getCharactersQuery = async () => {
      const data = await getCharacters();
      //console.log(data);
      setCharacters(data.results);
    };

    getCharactersQuery();
  }, []);

  //console.log(characters, "STATE characters");

  const ricksandMortys = characters.map((character, index) => (
    <div className="card" key={index}>
      <div className="nameCharacter">Nombre: {character.name}</div>
      <div className="nameSpecie">Especie: {character.species}</div>
      <img
        className="imageCharacter"
        src={character.image}
        alt={character.name}
      />
    </div>
  ));
  //console.log(ricksandMortys);

  return <div className="cardsHome">{ricksandMortys}</div>;
}

// 1. Componente se Monta
// 2. Estado se define como []
// 3. Se renderiza
// 4. Se ejecuta el useEffect
// 5. Se ejecuta una petición al servidor y se espera
// 6. Con la respuesta del servidor, actualizamos el estado
// 7. Se renderiza el componente, pero ahora el state, tiene el valor
// del resultado del servidor
