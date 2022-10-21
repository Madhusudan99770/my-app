import React, { useState } from "react";
import { Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";


function Registration() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("")
  const [flag, setFlag] = useState(false);
  const [login, setLogin] = useState(true);
  const navigate = useNavigate();



  function handleFormSubmit(e) {
    e.preventDefault();

    if (!name || !email || !password || !phone) {
      setFlag(true);
    } else {
      setFlag(false);

      let arr = [];
      if (localStorage.getItem("user")) {
        arr = JSON.parse(localStorage.getItem("user"))
      }
      let obj = { name, email, password, phone };
      arr.push(obj);
      localStorage.setItem("user", JSON.stringify(arr));

      console.log("Saved in Local Storage");

      navigate('/login')
    }
  }

  function handleClick() {
    navigate("/login")
  }




  return (


    <div className="register">

      <form onSubmit={handleFormSubmit}>
        <h3>Register</h3>

        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Full Name"
            name="name"
            onChange={(event) => setName(event.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Phone No.</label>
          <input
            type="Phone"
            className="form-control"
            placeholder="Enter contact no"
            onChange={(event) => setPhone(event.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-dark btn-lg btn-block my-3 ">
          Register
        </button>
        <p onClick={handleClick} className="forgot-password text-right">
          Already registered{" "}log in?

        </p>
        {flag && (
          <Alert color="primary" variant="danger">
            I got it you are in hurry! But every Field is important!
          </Alert>
        )}
      </form>

    </div>


  );
}

export default Registration;
