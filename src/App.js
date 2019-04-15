import React from 'react'
// Cpomponents
import {
          Box,
          Header,
          Main,
          BaseSection
        } from './components/baseComponents'

import Message from './components/Message/Message'
import Greetings from './components/Greetings/Greetings'
import SmoothScroll from './components/SmoothScroll/SmoothScroll'
// Hooks
import useScroll from './components/Hooks/useScroll'
//Assets
import hackerman from './assets/hackerman.gif'
import dance from './assets/dance.gif'
import astrounaut from './assets/astronaut.jpg'

const App  = () => {
  const currentZoom = useScroll()
  return  <Box height="300vh">
            <Header>
              <SmoothScroll zoom={currentZoom}/>
            </Header>
            <Main gif={hackerman}>
              <Message 
                zoom={currentZoom}
                title="Adventure awaits 👾" 
                message="// Now is when you start scrolling :) "/>
            </Main>
            <BaseSection bg="#43BCCD">
              <Box width='60%' bgColor="#CF161C" centrate>
                <Box bgImage={astrounaut} height="80%" width="60%" bgXP="-15vw"/>
              </Box>
              <Box width='40%' centrate>
                <Greetings />
              </Box>
            </BaseSection>
            <BaseSection bg="#662E9B" jContent="flex-end">
                <Box width='60%'  color="white">
                  <h3>
                    Never gonna give you up
                    Never gonna let you down
                    Never gonna run around and desert you
                    Never gonna make you cry
                    Never gonna say goodbye
                    Never gonna tell a lie and hurt you
                  </h3>
                </Box>
                <Box bgImage={dance} width='40%' bgXP="35vw"/>

            </BaseSection>
            <BaseSection 
              height='60'
              bg="#F86624">
            </BaseSection>
          </Box>
}



export default App
