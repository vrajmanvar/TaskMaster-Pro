// import React from 'react'
import { useState } from "react";
import "./RegisterPage.css";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { ModeContext } from "../context/mode-context";

const LoginPage = () => {
  const { mode, toggleMode } = useContext(ModeContext);

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
  });

  const [errorData, setErrorData] = useState({
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
  });

  const [isTouch, setIsTouch] = useState({
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
  });

  const inputChangeHandler = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });

    const errorMsg = validateField(event.target.name, event.target.value);

    setErrorData({ ...errorData, [event.target.name]: errorMsg });
  };

  const inputBlurHandler = (event) => {
    setErrorData({ ...errorData, [event.target.name]: event.target.value });

    const errorMsg = validateField(event.target.name, event.target.value);

    setErrorData({ ...errorData, [event.target.name]: errorMsg });
  };

  const validateField = (name, value) => {
    let error = "";
    const regexPassword = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    switch (name) {
      case "username":
        {
          if (!value) {
            error = "username is required.";
          }
        }
        break;
      case "email":
        {
          if (!value) {
            error = "email is required.";
          } else if (!regexEmail.test(value)) {
            error = "Invalid email format.";
          }
        }
        break;
      case "password":
        {
          if (!value) {
            error = "password is required.";
          } else if (!regexPassword.test(value)) {
            error =
              "Password must be at least 8 characters long and include at least one letter and one number.";
          }
        }
        break;
      case "confirmPassword":
        {
          if (!value) {
            error = "confirmPassword is required.";
          } else if (value !== formData.password) {
            error = "Password do not match.";
          }
        }
        break;
      default:
        break;
    }

    return error;
  };

  const formSubmit = (event) => {
    event.preventDefault();

    const errorMsg = {
      username: validateField("username", formData.username),
      email: validateField("email", formData.email),
      password: validateField("password", formData.password),
      confirmPassword: validateField(
        "confirmPassword",
        formData.confirmPassword
      ),
    };

    const userData = {
      email: formData.email,
      password: formData.password,
    };

    Object.values(errorMsg).forEach((item) => {
      if (item === "") {
        const registerData = {
          username: formData.username,
          email: formData.email,
          password: formData.password,
          confirmPassword: formData.confirmPassword,
        };

        localStorage.setItem("registerData", JSON.stringify(registerData));
        localStorage.setItem("LoginData", JSON.stringify(userData));

        navigate("/login");
      } else {
        return;
      }
    });
  };

  return (
    <form
      className={`${mode === "dark" ? "main" : "main-light"}`}
      onSubmit={formSubmit}
      style={{ minHeight: "100vh" }}
    >
      <div className={`${mode === "dark" ? "inner" : "inner-light"}`}>
        <div className="heading">
          <h2>Register</h2>
        </div>

        <div className="note_createAccount">
          <h5>create new account</h5>
        </div>

        <div className="username">
          <p>Username :</p>
          <input
            type="username"
            value={formData.username}
            onChange={inputChangeHandler}
            onBlur={inputBlurHandler}
            placeholder="john1234"
            name="username"
            className={`${
              mode === "dark" ? "input_username" : "input_username-light"
            } ${errorData.username ? "error" : ""}`}
          />
          {errorData.username && (
            <p className="error_msg">{errorData.username}</p>
          )}
        </div>

        <div className="email">
          <p>Email Address :</p>
          <input
            type="email"
            value={formData.email}
            name="email"
            onChange={inputChangeHandler}
            onBlur={inputBlurHandler}
            placeholder="john@doe.com"
            className={`${
              mode === "dark" ? "input_email" : "input_email-light"
            } ${errorData.email ? "error" : ""}`}
          />
          {errorData.email && <p className="error_msg">{errorData.email}</p>}
        </div>

        <div className="password">
          <p>Password :</p>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={inputChangeHandler}
            placeholder="Your Password"
            className={`${mode === "dark" ? "input_psw" : "input_psw-light"} ${
              errorData.password ? "error" : ""
            }`}
            onBlur={inputBlurHandler}
          />
          {errorData.password && (
            <p className="error_msg">{errorData.password}</p>
          )}
        </div>

        <div className="confirm_password">
          <p>Confirm Password :</p>
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            placeholder="Confirm Your Password"
            onChange={inputChangeHandler}
            className={`${
              mode === "dark"
                ? "input_confirmPassword"
                : "input_confirmPassword-light"
            } ${errorData.confirmPassword ? "error" : ""}`}
            onBlur={inputBlurHandler}
          />
          {errorData.confirmPassword && (
            <p className="error_msg">{errorData.confirmPassword}</p>
          )}
        </div>

        <button className="register">Register</button>
      </div>
    </form>
  );
};

export default LoginPage;
