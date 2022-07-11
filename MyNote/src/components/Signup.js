import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function Signup(props) {

    const [credentials, setCredentials] = useState({name:"",email:"" , password:""})
  let history = useHistory();

  const onChange = (e)=>{
      setCredentials({...credentials, [e.target.name] : e.target.value})  
  }
 
  const handlesubmit = async (e)=>{
        e.preventDefault();
        const response = await fetch("http://localhost:5000/api/auth/createuser", {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({name: credentials.name, email: credentials.email , password: credentials.password}),
          });

          const json= await response.json();
          console.log(json)
          if(json.password)
          {
            localStorage.setItem('password' , json.password)
            history.push("/login")
            props.showAlert("Account is created Successfully","success")
          }
          else{
            props.showAlert("Email is already exist","danger")
          }
      
    }

  return (
    <div className="container">
      <h1 className="text-center">User Registration</h1>
      <form onSubmit={handlesubmit}>
        <div class="mb-3">
          <label for="name" class="form-label">
            Name
          </label>
          <input
            type="text"
            class="form-control"
            id="name"
            aria-describedby="emailHelp"
            name="name"
            onChange={onChange}
          />
        </div>
        <div class="mb-3">
          <label for="email" class="form-label">
            Email address
          </label>
          <input
            type="email"
            class="form-control"
            id="email"
            aria-describedby="emailHelp"
            name="email"
            onChange={onChange}
          />
          <div id="emailHelp" class="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div class="mb-3">
          <label for="password" class="form-label">
            Password
          </label>
          <input
            type="password"
            class="form-control"
            id="password"
            name="password"
            onChange={onChange}
          />
        </div>

        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Signup;
