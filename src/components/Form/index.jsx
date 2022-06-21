import "./Form.css";

export default function Form({
  handleSubmit,
  firstName,
  lastName,
  age,
  gender,
  photoURL,
  setFirstName,
  setLastName,
  setGender,
  setPhotoURL,
  setAge,
}) {
  return (
    <form onSubmit={handleSubmit}>
      <input
        value={firstName}
        onChange={(event) => setFirstName(event.target.value)}
      />
      <input
        value={lastName}
        onChange={(event) => setLastName(event.target.value)}
      />
      <input value={age} onChange={(event) => setAge(event.target.value)} />
      <input
        value={gender}
        onChange={(event) => setGender(event.target.value)}
      />
      <input
        value={photoURL}
        onChange={(event) => setPhotoURL(event.target.value)}
      />
      <button type="submit">Agregar Koder</button>
    </form>
  );
}
