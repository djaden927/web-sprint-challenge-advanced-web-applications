import Axios from "axios";
import React, { useEffect, useState } from "react";

const Login = (props) => {
  const [credentials, setCredentials] = useState({
    username: "test",
    password: "password"
  })
  const [error, setError] = useState('')


  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  //replace with error state

  const handleChange = (e) => {
    setCredentials(
      {
        ...credentials,
        [e.target.name]: e.target.value
      }
    )
  }
  const handleSubmit = (e) => {
    e.preventDefault();

    Axios.post("http://localhost:5000/api/login", {
       username: credentials.username, 
       password: credentials.password 
      })
      .then(res => {
        localStorage.setItem("token", res.data.payload)
        setError('')
        props.history.push('/protected')
      })
      .catch(err => {
        console.log(err)
        setError("Username or Password not valid.")
      })
  }


  return (
    <div>
      <h1>Welcome to the Bubble App!</h1>
      <div data-testid="loginForm" className="login-form">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="username"
            value={credentials.username}
            data-testid="username"
            id="username"
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            value={credentials.password}
            data-testid="password"
            id="password"
            onChange={handleChange}
          />
          <button>Log in</button>
        </form>
      </div>

      <p data-testid="errorMessage" id="errorMessage" className="error">{error}</p>
    </div>
  );
};

export default Login;

//Task List:
//1. Build a form containing a username and password field.
//2. Add whatever state nessiary for form functioning.
//3. MAKE SURE YOUR USERNAME AND PASSWORD INPUTS INCLUDE data-testid="username" and data-testid="password"
//4. If either the username or password is not entered, display the following words with the p tag provided: Username or Password not valid.
//5. If the username / password is equal to Lambda / i<3Lambd4, save that token to localStorage.