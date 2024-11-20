import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import "./DetailPage.css";
import { ModeContext } from "../context/mode-context";

const DetailPage = () => {
  const { todoId } = useParams();
  const [details, setDetails] = useState([]);
  const { mode } = useContext(ModeContext);

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todoData")) || [];

    const selectedTodo = todos.find((todo) => todo.id === todoId);

    if (selectedTodo) {
      setDetails(selectedTodo);
    }
  }, [todoId]);

  return (
    <div
      className={`${
        mode === "dark" ? "detail-container" : "detail-container-light"
      }`}
    >
      <h2>TODO Detail</h2>

      {details && (
        <>
          <p>
            <strong>Task : </strong>
            {details.title}
          </p>
          <p>
            <strong>Status : </strong>
            {details.done ? "Completed" : "Pending"}
          </p>
          <p>
            <strong>Date : </strong>
            {new Date().toDateString()}
          </p>
        </>
      )}
    </div>
  );
};

export default DetailPage;
