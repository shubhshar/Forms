import "./styles.css";
import { useState } from "react";

export default function App() {
  const initValues = {
    firstName: "",
    lastname: "",
    email: "",
    mobNumber: ""
  };

  const [register, setRegister] = useState(initValues);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRegister({ ...register, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setRegister({ ...register });
    console.log(register);
    setRegister({ firstName: "", lastname: "", email: "", mobNumber: "" });
  };
  return (
    <div className="App">
      <div className="container">
        <div className="displayonDom">
          <pre>{JSON.stringify(register, undefined, 2)}</pre>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="content">
            <div className="inputFields">
              <label>Firstname</label>
              <input
                type="text"
                name="firstName"
                value={register.firstName}
                placeholder="Firstname"
                onChange={handleChange}
              />
            </div>
            <div className="inputFields">
              <label>Last name</label>
              <input
                type="text"
                name="lastname"
                value={register.lastname}
                placeholder="Last name"
                onChange={handleChange}
              />
            </div>
            <div className="inputFields">
              <label>Email </label>
              <input
                type="text"
                name="email"
                value={register.email}
                placeholder="Email"
                onChange={handleChange}
              />
            </div>
            <div className="inputFields">
              <label>Phone</label>
              <input
                type="number"
                name="mobNumber"
                value={register.mobNumber}
                placeholder="Phone"
                onChange={handleChange}
              />
            </div>
          </div>
          <button>Submit</button>
        </form>
      </div>
    </div>
  );
}
