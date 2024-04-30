import React from "react";
import {useContext} from "react";
import AppLevelContext from "../context/AppLevelContext";

const SingleTask = ({ task }) => {
  const {deleteTask} = useContext(AppLevelContext);
  return (
    <div className="taskContainer">
      {/* Left */}
      <div className="leftContainer">
        <div className="titleContainer">
          <h3>{task.title}</h3>
          <span
            className={`badge ${task.status === "completed" ? "completed" : "pending"}`}
          >
            {task.status}
          </span>
        </div>
        <span>{task.description}</span>
      </div>

      {/* Right */}
      <div className="rightContainer">
         {/* Delete */}
        <button className="btn deleteTaskBtn"
          onClick={() => deleteTask(task.id)}
        >
          <i className="fas fa-trash"></i>
        </button>
      </div>
    </div>
  );
};

export default SingleTask;
