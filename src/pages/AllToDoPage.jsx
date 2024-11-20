// import React from 'react'
import { useContext, useEffect, useState } from "react";
import ListOfTodos from "../Components/ListOfTodos";
import "./AllToDoPage.css";
import { ModeContext } from "../context/mode-context";

const AllToDoPage = () => {
  const { mode } = useContext(ModeContext);
  const [apiData, setApiData] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchTodoData = async () => {
    ///true
    setLoading(true);
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    // console.log({ response });
    if (response.ok) {
      const data = await response.json();
      console.log({ data });
      setApiData(data);
    } else {
      alert("Somthing went wrong");
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchTodoData();
  }, []);

  return (
    <>
      <div className="about-container">
        <h1 className={`${mode === "dark" ? "AboutTodo" : "AboutTodo-light"}`}>
          List of Todos
        </h1>
        <div className="yellowline"></div>
      </div>

      <div className={`${mode === "dark" ? "loader" : "loader-light"}`}>
        <h2>{loading ? "Loading..." : ""}</h2>
      </div>

      <div className="sapretthem">
        {apiData.map((a) => (
          <ListOfTodos key={a.id} apiData={a} />
        ))}
      </div>
    </>
  );
};

export default AllToDoPage;
