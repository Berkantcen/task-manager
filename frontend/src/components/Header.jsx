import React from 'react'

const Header = ({setShowModal}) => {
  return (
    <div className='headerContainer'>
        <h1 className='title'>Task Manager</h1>
        <button 
        onClick={()=>setShowModal(true)}
        className='btn addTaskbtn'>Add Task</button>
    </div>
  )
}

export default Header