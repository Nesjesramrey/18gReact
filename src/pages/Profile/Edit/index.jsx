import { useState } from "react";
import "./Edit.css";

export default function ProfileEdit() {
  const dataUser = {
    name: "",
    lastName: "",
    photoUrl: "",
    email: "",
    birthday: "",
  };

  const [user, setUser] = useState(dataUser);

  const captureInput = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const saveData = async (e) => {
    e.preventDefault();
    console.log(user);
    setUser({ ...dataUser });
  };

  function sendData() {
    fetch("https://poised-shift-162315-default-rtdb.firebaseio.com/.json", {
      method: "POST",
      headers: {
        "Content-Type": "Application/JSON",
      },

      body: JSON.stringify(user),
    }).then((response) => console.log(response));
  }

  return (
    <div className="profile-create-container">
      Datos a modificar
      <form onSubmit={saveData} className="form-container">
        <input
          className="form-control"
          type="text"
          name="name"
          placeholder="Nombre"
          onChange={captureInput}
          value={user.name}
        ></input>
        <input
          className="form-control"
          type="text"
          name="lastName"
          placeholder="Apellido"
          onChange={captureInput}
          value={user.lastName}
        ></input>
        <input
          className="form-control"
          type="text"
          name="photoUrl"
          placeholder="Foto"
          onChange={captureInput}
          value={user.photoUrl}
        ></input>
        <input
          className="form-control"
          type="email"
          name="email"
          placeholder="email"
          onChange={captureInput}
          value={user.email}
        ></input>
        <input
          className="form-control"
          type="date"
          name="birthday"
          placeholder="Fecha de nacimiento"
          onChange={captureInput}
          value={user.birthday}
        ></input>
        <button onClick={sendData} className="btn-form-submit">
          Suscribete
        </button>
      </form>
    </div>
  );
}
