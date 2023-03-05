import "./styles.css";
import { useState, useEffect } from "react";

export default function App() {
  const initValues = {
    firstName: "",
    lastname: "",
    email: "",
    mobNumber: ""
  };

  const [register, setRegister] = useState(initValues);
  const [isSubmit, setIsSubmit] = useState(false);
  const [formErrors, setformErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target; //to access value from inputfield(array destruct)
    setRegister({ ...register, [name]: value }); // keep on adding data to register object
  };
  const validate = (values) => {
    const error = {};

    if (!values.firstName) {
      error.firstName = " First name required";
    }
    if (!values.lastname) {
      error.lastname = "Last name required";
    }
    if (!values.email) {
      error.email = "Email is required";
    }
    if (!values.mobNumber) {
      error.mobNumber = "Mobile number is required";
    }
    return error;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(register);
    setRegister({ ...register }); //to show next data
    setRegister({ firstName: "", lastname: "", email: "", mobNumber: "" });
    setformErrors(validate(register));
    setIsSubmit(true);
    //window.location.reload();
  };

  return (
    <div className="App">
      <div className="container">
        <div className="displayonDom">
          {Object.keys(formErrors).length === 0 && isSubmit ? (
            <div className="ui message success">Signed in successfully</div>
          ) : (
            <pre>{JSON.stringify(register, undefined, 2)}</pre>
          )}
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
            <div className="p">{formErrors.firstName}</div>
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
            <div className="p">{formErrors.lastname}</div>
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
            <div className="p">{formErrors.email}</div>
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
            <div className="p">{formErrors.mobNumber}</div>
          </div>
          <button>Submit</button>
        </form>
      </div>
    </div>
  );
}
