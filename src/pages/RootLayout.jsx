// import React from 'react'
import Navbar from "../Components/Navbar";
import { Outlet } from "react-router-dom";
import { ModeContext } from "../context/mode-context";
import { useContext } from "react";
import "./RootLayout.css";

const RootLayout = () => {
  const { mode, toggleMode } = useContext(ModeContext);

  return (
    <div
      className={mode === "dark" ? "body" : "body-light"}
      style={{ minHeight: "100vh" }}
    >
      <Navbar />
      <Outlet />
    </div>
  );
};

export default RootLayout;
