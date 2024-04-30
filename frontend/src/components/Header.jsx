import { useContext } from "react";
import AppLevelContext from "../context/AppLevelContext";

const Header = () => {
  const { setShowModal } = useContext(AppLevelContext);
  return (
    <div className="headerContainer">
      <h1 className="title">Task Manager</h1>
      <button onClick={() => setShowModal(true)} className="btn addTaskbtn">
        Add Task
      </button>
    </div>
  );
};

export default Header;
