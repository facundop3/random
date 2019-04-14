import React from 'react'
import styled from 'styled-components'
import astrounaut from '../../assets/astronaut.jpg'

const Container = styled.section`
  height: 100vh;
  width: 60vw;
  background: red;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Content = styled.div`
  background-image: url(${astrounaut});
  width: 600px;
  /* Set a specific height */
  min-height: 800px; 
  /* Create the parallax scrolling effect */
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-position-x: -15vw;

`;
const LeftBox = props => {
  return <Container>
          <Content/>
        </Container>
}



export default LeftBox