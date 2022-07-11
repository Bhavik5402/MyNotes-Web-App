import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function Login(props) {

  const [credentials, setCredentials] = useState({email:"" , password:""})
  let history = useHistory();

  const onChange = (e)=>{
      setCredentials({...credentials, [e.target.name] : e.target.value})  
  }
 
  const handlesubmit = async (e)=>{
        e.preventDefault();
        const response = await fetch("http://localhost:5000/api/auth/login", {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({email: credentials.email , password: credentials.password}),
          });

          const json= await response.json();
          console.log(json)
          if(json.authtoken)
          {
            localStorage.setItem('token' , json.authtoken)
            history.push("/")
            props.showAlert("Logged In Successfully","success")
          }
          else{
            props.showAlert("Invalid Credentials","danger")
          }
      
    }

  return (
    <div className="container">
      <h1 className="text-center">Login</h1>
      <form onSubmit={handlesubmit}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            name="email"
            className="form-control"
            id="email"
            aria-describedby="emailHelp"
            value={credentials.email}
            onChange = {onChange}
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            name="password"
            className="form-control"
            id="password"
            value={credentials.password}
            onChange = {onChange}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
