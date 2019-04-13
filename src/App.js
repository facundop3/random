import React from 'react'
import styled from 'styled-components'

import Message from './components/Message/Message'
import SmoothScroll from './components/SmoothScroll/SmoothScroll'

const Container =  styled.div`
    text-align: center;
    height: 300vh;
`;
const Header = styled.header`
    background-color: #282c34;
    font-size: calc(10px + 2vmin);
    color: white;
`;
const Body = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
`;
const App  = () => {
  return  <Container>
            <Header>
              <SmoothScroll/>
              Hello 😘
            </Header>
            <Body>
              <Message title="Adventure awaits 👾" message="// Now is when you start scrolling :) "/>
            </Body>
          </Container>
}



export default App
