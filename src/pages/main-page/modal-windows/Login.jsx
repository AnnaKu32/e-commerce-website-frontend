import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Modal.css';

const Login = () => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loggedInUser, setLoggedInUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (loggedInUser) {
      console.log("Logged-in User:", loggedInUser);
    }
  }, [loggedInUser]);

  const handleSubmit = (event) => {
    event.preventDefault();
  
    const bodyData = {
      username,
      password
    };

    axios.post("http://localhost:8080/auth/login", bodyData)
    .then((response) => {
      console.log("Login response received:", response);
    
      const resultData = response.data;
      console.log("Result Data:", resultData);
    
      if (resultData.success) {
        console.log("Login successful");
      
        const jwtToken = resultData.jwt;
        localStorage.setItem("jwtToken", jwtToken);
      
        axios.get("http://localhost:8080/auth/me", {
          headers: {
            Authorization: "Bearer " + jwtToken
          }
        })
          .then((response) => {
            console.log("User profile response received:", response);
          
            const loggedInUser = response.data;
            setLoggedInUser(loggedInUser);
          
            alert("Login successful. Welcome, " + (loggedInUser ? loggedInUser.username : ''));

            navigate('/me');
          })
          .catch((error) => {
            console.error("Error occurred while fetching user profile:", error);
          });
      } else {
        console.log("Login failed");
      }
    })
    .catch((error) => {
      console.error("Error occurred during login:", error);
    });

    setUsername('');
    setPassword('');
  }

  return (
      <div className="col-6 sign-in">
        <h2 className="sign-in-title">Sign in</h2>
      
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input
              type="username"
              id="username"
              name="username"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
            />
          </div>
      
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>
      
            <div className="form-group">
              <div className="remember-me">
                <input type="checkbox" id="rememberMe" name="rememberMe" />
                <label htmlFor="rememberMe">Remember Me</label>
              </div>
            </div>
      
            <button className="login-button" type="submit">Login</button>
          </form>
      </div>
  );
}
export default Login;