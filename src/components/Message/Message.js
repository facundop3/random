import React from 'react'
import styled, { keyframes } from 'styled-components'

const animateMessage = keyframes`
  from{
    bottom: -1000px;
  }
  to{
    bottom:0;
  }
`;

const animateContent = keyframes`
  from{
    opacity: 0;
  }
  to{
    opacity: 1;
  }
`;

const MessageContainer = styled.div`
      top: ${props => props.zoom >= 190 ? '1em' : 'unset'};
      position: ${props => props.zoom >= 190 ? 'fixed' : 'relative'} !important;
      max-width: 500px;
      padding: .5em;
      position: relative;
      animation-name: ${animateMessage};
      bottom: -1000px;
      animation-delay: .5s;
      animation-duration: 2s;
      animation-fill-mode: forwards;
      transition: .5s;
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
      animation-name: ${animateContent};
      animation-fill-mode: forwards;
  `;

const Message = props => {
  return (
    <MessageContainer zoom={props.zoom}>
      <MessageTitle>{props.title}</MessageTitle>
      <MessageContent>{props.message}</MessageContent>
    </MessageContainer>
  )
}

export default Message