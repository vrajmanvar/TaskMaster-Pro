// import React from 'react'
import { useState } from "react";
import "./LoginPage.css";
import { NavLink, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { ModeContext } from "../context/mode-context";

const LoginPage = () => {
  const { mode, toggleMode } = useContext(ModeContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const [isTouchEmail, setIsTouchEmail] = useState(false);
  const [isTouchPassword, setIsTouchPassword] = useState(false);

  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    const email = e.target.value;
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email.trim() === "") {
      setEmailError("Email must not be empty.");
    } else if (!regex.test(email)) {
      setEmailError("Invalid email format.");
    } else {
      setEmailError("");
    }

    setEmail(email);
  };

  const emailBlurHandler = () => {
    setIsTouchEmail(true);
    if (email.trim() === "") {
      setEmailError("Email must not be empty.");
    }
  };

  const handlePasswordChange = (e) => {
    const password = e.target.value;
    const regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

    if (password.trim() === "") {
      setPasswordError("Password must not be empty.");
    } else if (!regex.test(password)) {
      setPasswordError(
        "Password must be at least 8 characters long and include at least one letter and one number."
      );
    } else {
      setPasswordError("");
    }

    setPassword(password);
  };

  const passwordBlurHandler = () => {
    setIsTouchPassword(true);
    if (password.trim() === "") {
      setPasswordError("Password must not be empty.");
    }
  };

  const loginSubmit = (e) => {
    e.preventDefault();
    if (email.trim() === "" || password.trim() === "") {
      setEmailError("Email is required.");
      setPasswordError("Password is required.");
      return;
    }

    const r = JSON.parse(localStorage.getItem("registerData"));

    if (r.email === email && r.password === password) {
      navigate("/");
    } else {
      alert("Please login with correct username and password !");
      return;
    }

    // const loginData = { email: email, password: password };
    // localStorage.setItem("loginData", JSON.stringify(loginData));
    // navigate("/");
  };

  return (
    <form
      className={`${mode === "dark" ? "main" : "main-light"}`}
      onSubmit={loginSubmit}
      style={{ minHeight: "100vh" }}
    >
      <div className={`${mode === "dark" ? "inner" : "inner-light"}`}>
        <div className="heading">
          <h2>LOGIN</h2>
        </div>
        <div className="welcome">
          <p>Welcome back !!</p>
        </div>
        <div className="email">
          <p>Email Address :</p>
          <input
            type="email"
            value={email}
            onChange={handleEmailChange}
            onBlur={emailBlurHandler}
            placeholder="john@doe.com"
            className={`${
              mode === "dark" ? "input_email" : "input_email-light"
            } ${emailError ? "error" : ""}`}
          />
          {emailError && <p className="error_msg">{emailError}</p>}
        </div>

        <div className="password">
          <p>Password :</p>
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
            placeholder="Your Password"
            className={`${mode === "dark" ? "input_psw" : "input_psw-light"} ${
              passwordError ? "error" : ""
            }`}
            onBlur={passwordBlurHandler}
          />
          {passwordError && <p className="error_msg">{passwordError}</p>}
        </div>

        <button className="in">Login</button>

        <div className="movingForAccount">
          <p>Don't have an account ?</p>
          <NavLink to="/register">Register here</NavLink>
        </div>
      </div>
    </form>
  );
};

export default LoginPage;
