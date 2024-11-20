/* eslint-disable react/prop-types */
import React, { useState, useEffect, useContext } from "react";
import { MdCheckBox } from "react-icons/md";
import "./Form.css";
import { v4 as uuidv4 } from "uuid";
import { ModeContext } from "../context/mode-context";

const Form = (props) => {
  const { mode, toogleMode } = useContext(ModeContext);

  const [formData, setFormData] = useState({
    title: "",
    id: uuidv4(),
  });

  useEffect(() => {
    if (props.isEdit) {
      setFormData({ title: props.editData.title });
    }
  }, [props.isEdit]);

  // console.log(props.editData, props.allData);

  const updateHandler = (e) => {
    e.preventDefault();
    let index = props.allData.findIndex((item) => {
      return item.id === props.editData.id;
    });
    props.allData[index] = { title: formData.title, id: props.editData.id };
    // console.log(props.allData)
    // console.log(props)

    //set is edit value to false
    props.setIsEdit(false);
    setFormData({ title: "" });
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if (formData.title === "") {
      return alert("Please enter your task.");
    }

    props.getFormData(formData);
    setFormData({
      title: "",
      id: uuidv4(),
    });
    // console.log(props.allData)
  };

  const inputchangeHandler = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <form onSubmit={props.isEdit ? updateHandler : submitHandler}>
      <div className="heading">
        <h1 className={`${mode === "dark" ? "heading1" : "heading1-light"}`}>
          My Todos
        </h1>
        <MdCheckBox size={40} color="#FFD700" />
      </div>

      <div className="enter_text">
        <input
          type="text"
          placeholder="Enter your task..."
          className="input"
          name="title"
          value={formData.title}
          onChange={inputchangeHandler}
        />

        <button className="add">{props.isEdit ? "Edit" : "Add"}</button>
      </div>
    </form>
  );
};

export default Form;
