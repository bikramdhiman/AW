import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Signin.css";

function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Here you can add form validation or API login logic
    console.log("Email:", email);
    console.log("Password:", password);

    // If login is successful, navigate to the main page
    if (email && password) {
      // Simulate saving data and redirecting
      navigate("/main");
    } else {
      alert("Please enter valid login credentials");
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <p>
        By signing in you are agreeing to our{" "}
        <a href="#">Term and privacy policy</a>
      </p>

      <div className="tabs">
        <button className="active">Login</button>
        {/* <button>Register</button> */}
      </div>

      {/* Add the handleSubmit to the form */}
      <form className="login-form" onSubmit={handleSubmit}>
        <div className="input-container">
          <label htmlFor="email">
            <i className="fas fa-envelope"></i>
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
          />
        </div>

        <div className="input-container">
          <label htmlFor="password">
            <i className="fas fa-lock"></i>
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            required
          />
          <i className="fas fa-eye"></i>{" "}
          {/* This is an icon for showing/hiding password */}
        </div>

        <div className="options">
          <label>
            <input type="checkbox" /> Remember password
          </label>
          <a href="#">Forget password</a>
        </div>

        <button type="submit" className="login-btn">
          Login
        </button>
      </form>
    </div>
  );
}

export default Signin;
