import {useState, useEffect} from 'react'

const useScroll = ()=> {
  useEffect(()=>{
    window.addEventListener("scroll", handleScroll)
    return ()=> window.removeEventListener("scroll", handleScroll);
  })

  const [currentScroll, setCurrentScroll] = useState(document.documentElement.scrollTop)
  const [scrollIsDown, setScrollIsDown] = useState(true)
  const [ currentZoom, setCurrentZoom ] = useState(100)

  const getScale = () => scrollIsDown ? setCurrentZoom(currentZoom + 1 ) : setCurrentZoom(document.documentElement.scrollTop? currentZoom - 1 : 100)
  
  const handleScroll = ev => {
    setScrollIsDown(currentScroll < document.documentElement.scrollTop)
    setCurrentScroll(document.documentElement.scrollTop)
    getScale()
  }
  return currentZoom
}

export default useScroll