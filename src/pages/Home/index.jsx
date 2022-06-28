import { useEffect, useState } from "react";
import "./Home.css";

// Services
import { getUsers } from "../../services/users";

export default function Home() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUserQuery = async () => {
      const data = await getUsers();
      console.log(data, "response");
      setUsers(data);
    };
    getUserQuery();
  }, []);

  const test = [
    {
      name: "John",
      email: "john@example.com",
      photoURL: "http://example.com",
    },
  ];

  const usersKodemia = test.map((user, index) => (
    <div className="card" key={index}>
      <div className="nameCharacter">Nombre: {user.name}</div>
      <div className="nameSpecie">Especie: {user.email}</div>
      <img className="imageCharacter" src={user.photoURL} alt={user.name} />
    </div>
  ));

  return (
    <div className="mainContainer">
      <h1 className="titleHome">Bienvenidos a la pagina de Rick and Morty</h1>
      <div className="cardsHome">{usersKodemia}</div>
    </div>
  );
}

// 1. Componente se Monta
// 2. Estado se define como []
// 3. Se renderiza
// 4. Se ejecuta el useEffect
// 5. Se ejecuta una petición al servidor y se espera
// 6. Con la respuesta del servidor, actualizamos el estado
// 7. Se renderiza el componente, pero ahora el state, tiene el valor
// del resultado del servidor
