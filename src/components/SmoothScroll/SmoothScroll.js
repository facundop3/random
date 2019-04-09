import React, { useEffect, useState} from 'react'
import './smoothScroll.css'
import chicken from '../../assets/chicken.png'
import batman from '../../assets/batman.png'
import unicorn from '../../assets/unicorn.png'
import ProgressBar from '../scrollProgress/ScrollBar'

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
  const backgroundSize = {
    'backgroundSize': `${currentZoom}% ${currentZoom}%`,
    'opacity': currentZoom < 500 ? '1' : '0',
  }
  const chickenStyles = {
    'position': 'absolute',
    'animationName': 'chickenLego',
    'animationDuration': '20s',
    'animationTimingFunction' : 'linear',
    'animationIterationCount': 'infinite'
  }
  const handleClick = ev =>{
    setIsPaused(!isPaused)
    if(isPaused) {
      ev.target.style.animationPlayState = 'running'
    } else {
      ev.target.style.animationPlayState = 'paused'
    }
  }
  const selectCharacterAndBg = ((zoom)=> {
        console.log(zoom)
        if(zoom < 130) {
          return {bg:'', character:chicken}
        } else if (zoom >= 130 && zoom < 160){
          return {bg:'rainbowBg', character: unicorn}
        } else if (zoom <= 200) {
          return {bg:'cityBg', character: batman}
        } else {
          return {bg:'hackermanBg', character: batman}
        }
  })(currentZoom);

 return (
     <div className={`fixIt ${selectCharacterAndBg.bg}`} style={backgroundSize}>
      <img style={chickenStyles} src={selectCharacterAndBg.character} alt="Lego cheicken"  onClick={handleClick}/>
      <ProgressBar/>
     </div>
   )
}

export default SmoothScroll