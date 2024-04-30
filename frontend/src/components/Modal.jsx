import {useState,useContext} from "react";
import ClickAwayListener from "react-click-away-listener";

import AppLevelContext from "../context/AppLevelContext";

const Modal = () => {
  const { addTask,setShowModal} = useContext(AppLevelContext);
  const [taskBody, setTaskBody] =useState({
    title: "",
    description: "",
    status: "pending",
  });

  

 
  return (
    <div className="outterModal">
      <ClickAwayListener onClickAway={()=>{
        // Reset the taskBody
        setTaskBody({
          title: "",
          description: "",
          status: "pending",
        });
        setShowModal(false);
      }}>
        <div className="innerModal">
          <h1>Add Task</h1>
          <input
            type="text"
            placeholder="Title"
            value={taskBody.title}
            onChange={(e) =>
              setTaskBody({ ...taskBody, title: e.target.value })
            }
          />
          <input
            type="text"
            placeholder="Description"
            value={taskBody.description}
            onChange={(e) =>
              setTaskBody({ ...taskBody, description: e.target.value })
            }
          />

          {/* Select Box */}
          <select
            value={taskBody.status}
            onChange={(e) =>
              setTaskBody({ ...taskBody, status: e.target.value })
            }
          >
            <option value={"pending"}>Pending</option>
            <option value={"completed"}>Completed</option>
          </select>

          <button className="btn" onClick={
            ()=>{
              addTask(taskBody);
            }
          }>
            Add Task
          </button>
        </div>
      </ClickAwayListener>
    </div>
  );
};

export default Modal;
