import { useContext, useEffect, useState } from "react";
import Card from "../Components/Card";
// import "./App.css";
import Form from "../Components/Form";
import "./HomePage.css";
import { ModeContext } from "../context/mode-context";

const HomePage = () => {
  const { mode, toggleMode } = useContext(ModeContext);

  const [allData, setAllData] = useState(
    JSON.parse(localStorage.getItem("todoData")) || []
  );
  const [editData, setEditData] = useState([]);
  const [isEdit, setIsEdit] = useState(false);

  const getFormData = (data) => {
    setAllData([...allData, data]);
  };

  useEffect(() => {
    localStorage.setItem("todoData", JSON.stringify(allData));
  }, [allData]);

  const deleteHandler = (id) => {
    const afterDeleteUpdatedArray = allData.filter((obj) => obj.id !== id);
    setAllData(afterDeleteUpdatedArray);
  };

  const correctHandler = (id) => {
    const afterCorrectUpdateArray = allData.map((obj) =>
      obj.id === id ? { ...obj, done: !obj.done } : obj
    );
    setAllData(afterCorrectUpdateArray);
  };

  const editHandler = (id) => {
    setIsEdit(true);
    const afterEditUpdatedArray = allData.filter((obj) => obj.id === id);
    setEditData(afterEditUpdatedArray[0]);
    // console.log(afterEditUpdatedArray);
  };

  console.log(allData);

  return (
    <>
      <div className={`${mode === "dark" ? "container" : "container-light"}`}>
        <div className="mainForm max-w">
          <Form
            getFormData={getFormData}
            allData={allData}
            isEdit={isEdit}
            editData={editData}
            setIsEdit={setIsEdit}
          />
        </div>

        {allData.length < 1 ? (
          <h1 className="forCard">No task created yet.</h1>
        ) : (
          <div className="cards max-w">
            {allData.map((args) => {
              return (
                <Card
                  id={args.id}
                  key={args.id}
                  title={args.title}
                  deleteHandler={deleteHandler}
                  correctHandler={correctHandler}
                  editHandler={editHandler}
                  done={args.done || false}
                />
              );
            })}
          </div>
        )}
      </div>
    </>
  );
};

export default HomePage;
