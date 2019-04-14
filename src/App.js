import React from 'react'
import styled from 'styled-components'
// Cpomponents
import Message from './components/Message/Message'
import SmoothScroll from './components/SmoothScroll/SmoothScroll'
import LeftBox from './components/LeftBox/LeftBox'
import Carousel from './components/Carousel/Carousel'


// Hooks
import useScroll from './components/Hooks/useScroll'
//Assets
import hackerman from './assets/hackerman.gif'

const Container =  styled.div`
    text-align: center;
    height: 300vh;
`;
const Header = styled.div`
    background-color: #282c34;
    font-size: calc(10px + 2vmin);
    color: white;
`;
const Main = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url(${hackerman});
    background-size: contain;
    height:100vh;
`;

const App  = () => {
  const currentZoom = useScroll()
  return  <Container>
            <Header>
              <SmoothScroll zoom={currentZoom}/>
            </Header>
            <Main>
              <Message 
                zoom={currentZoom}
                title="Adventure awaits 👾" 
                message="// Now is when you start scrolling :) "/>
            </Main>
            <LeftBox id="scene">
              Hey cute 😙
            </LeftBox>
            <Carousel>
              sfdsdfs 
            </Carousel>
          </Container>
}



export default App
