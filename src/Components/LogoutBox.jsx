import React from "react";
import { NavLink } from "react-router-dom";
import "./LogoutBox.css";

const LogoutBox = ({ setShowLogoutBox }) => {
  const handleCancelClick = () => {
    setShowLogoutBox(false);
  };

  return (
    <>
      <div className="backdrop"></div>
      <div className="box">
        <div className="para">
          <h6>Are you sure you want to logout?</h6>
        </div>

        <div className="btn">
          <button className="cancle" onClick={handleCancelClick}>
            Cancle
          </button>
          <NavLink to="/login" className="out-box">
            Logout
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default LogoutBox;
