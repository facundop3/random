import React from 'react'
import './message.css'
const Message = props => {
  return (
    <div className='MessageContainer'>
      <h1 className="MessageTitle">{props.title}</h1>
      <p className="MessageContent">{props.message}</p>
    </div>
  )
}

export default Message