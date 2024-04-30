import {useState} from "react"
// Components
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import Modal from "./components/Modal";



function App() {
   const [showModal,setShowModal] = useState(false)
  return (
    <>

     {showModal && <Modal/>}
      
     <Header setShowModal={setShowModal}/>

     <Tasks/>
    </>
  );
}

export default App;
