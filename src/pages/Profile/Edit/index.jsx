import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { editUser } from "../../../services/editUsers";
import { retrieve as retrieveUser } from "../../../services/editUsers";

// CSS
import "./Edit.css";

export default function ProfileEdit() {
  // Local state
  const [user, setUser] = useState(null);

  // RRD
  const { id } = useParams();

  useEffect(() => {
    console.log("PRIMERA VEZ");

    const getUser = async () => {
      const data = await retrieveUser(id);
      setTimeout(() => {
        setUser(data);
      }, 2000);
      console.log(data);
    };

    getUser();
  }, []);

  //console.log(id);
  // Local state
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [photoURL, setPhotoURL] = useState("");
  const [email, setEmail] = useState("");
  const [birthdate, setBirthdate] = useState("");

  const cleanForm = () => {
    setFirstName("");
    setLastName("");
    setPhotoURL("");
    setEmail("");
    setBirthdate("");
  };

  const isEmpty = (value) => !value;

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (
      isEmpty(firstName) ||
      isEmpty(lastName) ||
      isEmpty(photoURL) ||
      isEmpty(email) ||
      isEmpty(birthdate)
    ) {
      //toast.error("Llena el form!!!!");
      return;
    }

    const data = {
      firstName,
      lastName,
      photoURL,
      email,
      birthdate,
    };

    try {
      await editUser(data);
      // toast.success("Todo fine!!");
      cleanForm();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Editar</h2>
      {!user ? (
        <p>Loading</p>
      ) : (
        <div>
          <img src={user.photoURL} />
          <p>
            {user.firstName} {user.lastName}
          </p>
          <p>{user.email}</p>
          <div>
            <h2>Llena los campos a editar</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-container">
                <div className="form-child">
                  <input
                    className="input"
                    placeholder="First Name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </div>
                <div className="form-child">
                  <input
                    className="input"
                    placeholder="Last Name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </div>
              </div>
              <div className="form-container">
                <div className="form-child">
                  <input
                    className="input"
                    placeholder="Photo URL"
                    type="url"
                    value={photoURL}
                    onChange={(e) => setPhotoURL(e.target.value)}
                  />
                </div>
                <div className="form-child">
                  <input
                    className="input"
                    placeholder="Email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>
              <div className="form-container">
                <input
                  className="input"
                  placeholder="Birthdate"
                  type="date"
                  value={birthdate}
                  onChange={(e) => setBirthdate(e.target.value)}
                />
              </div>
              <button type="submit" className="btn">
                Create User
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
