import React, { useEffect, useState} from 'react'
import styled, {keyframes} from 'styled-components'
// Images
import chicken from '../../assets/chicken.png'
import batman from '../../assets/batman.png'
import unicorn from '../../assets/unicorn.png'
import starsBg from '../../assets/stars.jpg'
import cityBg from '../../assets/city.jpg'
import hackermanBg from '../../assets/hackerman.gif'

import ProgressBar from '../scrollProgress/ScrollBar'

const floatingAnimation = keyframes`
  0%{
    transform: rotate(35deg) scale(0.5);
    left: -200px;
  }
  10%{
    left: calc(10% - 200px);
    transform: rotate(-10deg) scale(0.5);
  }
  20%{
    left: calc(20% - 200px);
    transform: rotate(20deg) scale(0.5);
  }
  30%{
    left: calc(30% - 200px);
    transform: rotate(35deg) scale(0.6);
  }
  40%{
    left: calc(40% - 200px);
    transform: rotate(27deg)  scale(0.6);
  }
  50%{
    left: calc(50% - 200px);
    transform: rotate(37deg) scale(0.7);
  }
  60%{
    left: calc(60% - 200px);
    transform: rotate(45deg) scale(0.7);
  }
  70%{
    left: calc(70% - 200px);
    transform: rotate(36deg)  scale(0.6);
  }
  80%{
    left: calc(80% - 200px);
    transform: rotate(27deg)  scale(0.6);
  }
  90%{
    left: calc(90% - 200px);
    transform: rotate(-10deg) scale(0.5);
  }
  100%{
    left: calc(100% - 200px);
    transform: rotate(-35deg) scale(0.5);
  }
`;

const Character = styled.img`
    position: absolute;
    animation-name: ${floatingAnimation};
    animation-duration: 20s;
    animation-timing-function : linear;
    animation-iteration-count: infinite;
`;

const Container = styled.div`
  position: fixed;
  transition: 1s;
  background-image: url(${props => getBgNCharacter(props.zoom).bg});
  width: 100%;
  height: 100vh;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  animation-fill-mode: forwards;
  background-size: ${props => props.zoom}%  ${props => props.zoom}%;
`;


const getBgNCharacter = (zoom)=> {
  console.log(zoom)
  if(zoom < 130) {
    return {bg: starsBg, character:chicken}
  } else if (zoom <= 200) {
    return {bg: cityBg, character: batman}
  } else {
    return {bg:hackermanBg, character: unicorn}
  }
};

const SmoothScroll = props =>{

  useEffect(()=>{
    window.addEventListener("scroll", handleScroll)
    return ()=> window.removeEventListener("scroll", handleScroll);
  })

  const [currentScroll, setCurrentScroll] = useState(document.documentElement.scrollTop)
  const [scrollIsDown, setScrollIsDown] = useState(true)
  const [ currentZoom, setCurrentZoom ] = useState(100)

  const [isPaused, setIsPaused] = useState(false)
  const getScale = () => scrollIsDown ? setCurrentZoom(currentZoom + 1 ) : setCurrentZoom(document.documentElement.scrollTop? currentZoom - 1 : 100)

  const handleScroll = ev => {
    setScrollIsDown(currentScroll < document.documentElement.scrollTop)
    setCurrentScroll(document.documentElement.scrollTop)
    getScale()
  }
  const handleClick = ev =>{
    setIsPaused(!isPaused)
    if(isPaused) {
      ev.target.style.animationPlayState = 'running'
    } else {
      ev.target.style.animationPlayState = 'paused'
    }
  }

  return (
     <Container zoom={currentZoom}>
      <Character src={getBgNCharacter(currentZoom).character} alt="Lego character"  onClick={handleClick}/>
      <ProgressBar/>
     </Container>
   )
}

export default SmoothScroll