// import React from 'react'
import { useContext } from "react";
import "./ListOfTodos.css";
import { ModeContext } from "../context/mode-context";

const ListOfTodos = ({ apiData }) => {
  const { mode } = useContext(ModeContext);

  return (
    <div className={`${mode === "dark" ? "apiList" : "apiList-light"}`}>
      <div className="todotitle">{apiData.title}</div>
      <button
        className={`btn ${apiData.completed ? "btn-success" : "btn-danger"}`}
      >
        {apiData.completed ? "Completed" : "Pending"}
      </button>
    </div>
  );
};

export default ListOfTodos;
