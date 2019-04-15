import React, {useState, useEffect} from 'react'
import {Box} from '../baseComponents'
import styled from 'styled-components'
const useCircular = (list)=> {
  const [currentIndex, setCurrentIndex] = useState(0)
  useEffect(()=>{
    const interval = setInterval(()=>{
        setCurrentIndex((currentIndex + 1) % list.length)
      }, 1000)
    return ()=> clearInterval(interval)
  })
  return list[currentIndex]
}
const Title = styled.h1`
  font-size: 3em;
`;
const Content = styled.p`
  font-size: 1.5em;
`
const Greetings = props => {
  const synonyms = ["world","dude", "doode", "dewd", "mate", "fellow", "friend", "colleague","buddy", "pal", "cousin", "bro"]
  return  (
    <Box height="50%" width="60%"  centrate>
    <div>
      <Title>
        Hello {useCircular(synonyms)} 👾
      </Title>
      <Content>
        Well this is kinda a playground where I'm trying some React Hooks, styled components, animations and web Audio API.
      </Content>
        <small>Scroll a little more for some music 🎶</small>
    </div>
    </Box>

  )
}

export default Greetings