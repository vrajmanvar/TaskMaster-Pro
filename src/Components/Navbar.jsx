// import React from "react";
import { MdCheckBox } from "react-icons/md";
import { BsMoonStars } from "react-icons/bs";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { ModeContext } from "../context/mode-context";
import { useState } from "react";
import LogoutBox from "./LogoutBox";
import { createPortal } from "react-dom";

const Navbar = () => {
  const { mode, toggleMode } = useContext(ModeContext);

  const [showLogoutBox, setShowLogoutBox] = useState(false);

  const handleLogoutClick = () => {
    setShowLogoutBox(true);
  };

  return (
    <nav className={`${mode === "dark" ? "navbar" : "navbar-light"}`}>
      <div className="logo">
        <h2>TODO</h2>
        <MdCheckBox size={30} color="#FDD700" />
      </div>

      <div className={`${mode === "dark" ? "menu" : "menu-light"}`}>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "yes" : "home")}
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? "yes" : "home")}
        >
          About
        </NavLink>
        <NavLink
          to="/allTodos"
          className={({ isActive }) => (isActive ? "yes" : "home")}
        >
          All Todos
        </NavLink>
      </div>

      <div className="logout">
        <button
          className={`${mode === "dark" ? "dark" : "dark-light"}`}
          onClick={toggleMode}
        >
          <BsMoonStars size={25} />
        </button>

        <button className="out" onClick={handleLogoutClick}>
          Logout
        </button>
        {showLogoutBox &&
          createPortal(
            <LogoutBox setShowLogoutBox={setShowLogoutBox} />,
            document.getElementById("model")
          )}
      </div>
    </nav>
  );
};

export default Navbar;
