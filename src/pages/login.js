import React, { useState } from "react";
import { Alert } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


function Login() {
  const [emaillog, setEmaillog] = useState(" ");
  const [passwordlog, setPasswordlog] = useState(" ");
  const navigate = useNavigate();

  const [flag, setFlag] = useState(false);


  function handleLogin(e) {
    e.preventDefault();
    let userDetails= JSON.parse(localStorage.getItem("user"));
    userDetails.find(element=>{
      if(element.email === emaillog && element.password === passwordlog){
        navigate("/dashbord");
        
      }else{
        setFlag(true);
      }
    })
   

  }

  return (
    <div className="register">
      
        <form onSubmit={handleLogin}>
          <h3>LogIn</h3>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
              onChange={(event) => setEmaillog(event.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              onChange={(event) => setPasswordlog(event.target.value)}
            />
          </div>

          <button type="submit" className="btn btn-dark btn-lg btn-block my-3">
            Login
          </button>
          {/* {/ <button type="button" className="btn btn-dark btn-lg btn-block mx-3"><Link className="link" to="/register">Registeration</Link></button> /} */}

          {flag && (
            <Alert color="primary" variant="warning">
              Fill correct Info else keep trying.
            </Alert>
          )}
        </form>
    </div>
  );
}

export default Login;