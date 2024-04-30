import { useContext } from "react";
import SingleTask from "./SingleTask";
import AppLevelContext from "../context/AppLevelContext";
const Tasks = () => {
  const { tasks } = useContext(AppLevelContext);



  return (
    <div className="tasksContainer">
      {tasks?.map((task, index) => (
        <SingleTask key={index} task={task} />
      ))}
    </div>
  );
};

export default Tasks;
