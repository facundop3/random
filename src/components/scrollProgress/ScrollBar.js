import React, {useState, useEffect} from 'react'
import styled from 'styled-components'

const Container = styled.div`
  margin-top: 200px;
  transform: rotate(-90deg);
  display:  inline-grid;
  justify-content: inline-block;
  float: left;
`;

const OutterBar = styled.div`
    width: 200px;
    height: 10px;
    border-radius: 5px;
    background: grey;
`;

const Progress = styled.div`
    border-radius: 5px;
    height: 100%;
    background: rebeccapurple;
    width: ${props => props.percent}%;
`;
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
    <Container>
      Randomiter
      <OutterBar className='ScrollBarOuter'>
        <Progress percent={currentPercent}/>
      </OutterBar>
    </Container>
  )
}

export default ScrollBar