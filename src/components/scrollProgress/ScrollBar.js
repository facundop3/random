import React, {useState, useEffect} from 'react'
import './scrollBar.css'
const ScrollBar = props => {
  const totalScroll = 1796
  const [currentPercent, setCurrentPercent] = useState(0)

  const handleScroll = ev => {
    const percent = Math.round((document.documentElement.scrollTop/totalScroll) * 100)
    setCurrentPercent(percent)
  }
  useEffect(()=>{
    window.addEventListener("scroll", handleScroll)
    return ()=> window.removeEventListener("scroll", handleScroll);
  })

  return (
    <div className='ScrollBarContainer'>
      Randomiter
      <div className='ScrollBarOuter'>
        <div className='ScrollBarProgress' style={{width: currentPercent + '%'}}/>
      </div>
    </div>
  )
}

export default ScrollBar