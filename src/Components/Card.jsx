/* eslint-disable react/prop-types */
import React, { useEffect } from "react";
import "./Card.css";
import { FaTrash } from "react-icons/fa";
import { MdCheckBox } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa6";
import { PiNotePencilBold } from "react-icons/pi";
import { useNavigate } from "react-router-dom";

const Card = (props) => {
  const navigate = useNavigate();

  return (
    <div
      className="card"
      style={{ width: "300px", backgroundColor: "#FFF2AA" }}
    >
      <div className="task_name">
        <p className={props.done ? "done" : ""}>{props.title}</p>
        <p className="card-date">{new Date().toLocaleDateString()}</p>
      </div>

      <div className="btn">
        <button
          className="correct"
          onClick={() => props.correctHandler(props.id)}
        >
          <MdCheckBox size={25} />
        </button>
        <button className="note" onClick={() => props.editHandler(props.id)}>
          <PiNotePencilBold size={20} />
        </button>
        <button
          className="delete"
          onClick={() => props.deleteHandler(props.id)}
        >
          <FaTrash color="white" />
        </button>
        <button className="arrow" onClick={() => navigate(`/todo/${props.id}`)}>
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default Card;
