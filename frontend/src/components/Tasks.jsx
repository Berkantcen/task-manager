import {useState} from "react"
import SingleTask from "./SingleTask"

const Tasks = () => {
  const [tasks,setTasks] = useState([
    {
      id : "1",
      title : "Learn React",
      description : "Learn React today for 1 hour",
      status :"pending"
    },
    {
      id : "2",
      title : "Learn Node",
      description : "Learn Node today for 1 hour",
      status :"pending"
    },
    {
      id : "3",
      title : "Learn Express",
      description : "Learn Express today for 1 hour",
      status :"pending"
    }

  ])




  return (
     <div className="tasksContainer">
          {tasks.map((task,index)=>(
            <SingleTask key={index} task={task}/>
          ))}
     </div>
  )
}

export default Tasks