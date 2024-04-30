import React from 'react'

const SingleTask = ({key,task}) => {
  return (
    <div key={key} className='taskContainer'>
        {/* Left */}
        <div className='leftContainer'>
            <div>
                <h3>{task.title}</h3>
                <span>{task.status}</span>
            </div>
            <span>{task.description}</span>
        </div>

        {/* Right */}
        <div className='rightContainer'>

        </div>
    </div>
  )
}

export default SingleTask