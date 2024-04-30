import { useContext } from "react";
// Components
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import Modal from "./components/Modal";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import AppLevelContext from "./context/AppLevelContext";

function App() {
  const { showModal } = useContext(AppLevelContext);

  return (
    <div className="mainContainer">
      <ToastContainer />
      {showModal && <Modal/>}

      <Header/>

      <Tasks />
    </div>      
  );
}

export default App;
