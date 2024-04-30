import { createContext, useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";

export const AppLevelContext = createContext();

export const  AppLevelContextProvider = ({ children }) => {
  const [showModal, setShowModal] = useState(false);
  const [tasks, setTasks] = useState(null);

  const getTasks = async () => {
    const headers = {
      "Content-Type": "application/json",
    };

    try {
      const { data } = await axios.get("http://localhost:3001/tasks", {
        headers,
      });
      setTasks(data);
    } catch (error) {
        toast.error("Error fetching tasks,Check console for more info");
      console.log(error);
    }
  };

  const addTask = async (taskBody) => {
    
    if(taskBody.title === "" || taskBody.description === ""){
        return toast.error("Please fill in all fields");
    }
    
    
    const headers = {
      "Content-Type": "application/json",
    };
    try {
      await axios.post("http://localhost:3001/tasks", taskBody, { headers });
      getTasks();
      toast.success("Task added successfully");
      setShowModal(false);
    } catch (error) {
      toast.error("Error adding task,Check console for more info");
      console.log(error);
    }
  };

const deleteTask = async (id) => {
    const headers = {
      "Content-Type": "application/json",
    };
    try {
      await axios.delete(`http://localhost:3001/tasks/${id}`, { headers });
      toast.success("Task deleted successfully");
      getTasks();
    } catch (error) {
       toast.error("Error deleting task,Check console for more info");
      console.log(error);
    }
  }



  useEffect(() => {
    getTasks();
  }, []);

  return (
    <AppLevelContext.Provider value={{ tasks,setShowModal,showModal,getTasks,addTask,deleteTask}}>
      {children}
    </AppLevelContext.Provider>
  );
};

export default AppLevelContext;
