import React from 'react'
import './message.css'
import styled from 'styled-components'
const Message = props => {
  const MessageContainer = styled.div`
      max-width: 500px;
      padding: .5em;
      position: relative;
      animation-name: animateMessage;
      bottom: -1000px;
      animation-delay: .5s;
      animation-duration: 2s;
      animation-fill-mode: forwards;
  `;
  const MessageTitle = styled.h1`
      font-family: VT323;
      text-align: left;
      color: white;
  `;
  const MessageContent = styled.p`
      padding-left: 3em;
      text-align: left;
      color: white;
      opacity: 0;
      animation-delay: 4s;
      animation-duration: .5s;
      animation-name: animateContent;
      animation-fill-mode: forwards;
  `;
  return (
    <MessageContainer>
      <MessageTitle>{props.title}</MessageTitle>
      <MessageContent>{props.message}</MessageContent>
    </MessageContainer>
  )
}

export default Message