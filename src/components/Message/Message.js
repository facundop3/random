import React from 'react'
import './message.css'
const Message = props => {
  return (
    <div className='MessageContainer'>
      <h1>{props.title}</h1>
      <hr/>
      <p>{props.message}</p>
    </div>
  )
}

export default Message