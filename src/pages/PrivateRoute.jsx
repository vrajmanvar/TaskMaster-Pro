import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const loginData = JSON.parse(localStorage.getItem("LoginData")) || false;
  const registerData =
    JSON.parse(localStorage.getItem("registerData")) || false;

  if (!registerData && !loginData) {
    return <Navigate to="/register" />;
  } else if (registerData && !loginData) {
    return <Navigate to="/login" />;
  } else {
    return children;
  }
};

export default PrivateRoute;
