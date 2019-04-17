import React, {useState, useEffect} from 'react'
import styled from 'styled-components'


const Btn = styled.button`
  border-radius: 5px;
  padding: 15px 25px;
  font-size: 22px;
  text-decoration: none;
  margin: 20px;
  color: #fff;
  position: relative;
  display: inline-block;
  ${
    props => props.bgColor &&
    `background-color: ${props.bgColor};`
  }
  &:active{
    transform: translate(0px, 5px);
    -webkit-transform: translate(0px, 5px);
    box-shadow: 0px 1px 0px 0px;
  }
`;
const MusicMakerStarterKit = props => {
  // Music: https://www.bensound.com
  const [beep, setBeep] = useState(0)
  const [frequency, setFrequency] = useState(110)
  const [wabeTypeIndex, setWabeTypeIndex] = useState(0)

  const context = new AudioContext();
  const osillator = context.createOscillator();
  const types = ["sine", "square", "sawtooth", "triangle"]
  useEffect(()=>{
    const volume = context.createGain()
    volume.gain.value = beep
    volume.connect(context.destination)
    osillator.type = types[wabeTypeIndex]
    osillator.connect(volume)
    osillator.frequency.value = frequency
    osillator.start(0)
    
    return () => {
      osillator.stop(0)
      osillator.disconnect(0)
    }
  })
  
  const startBeep = ev => setBeep(beep? 0 : 1)
  const handleChange = ev => setFrequency(ev.target.value)
  const changeType = ev => setWabeTypeIndex((wabeTypeIndex + 1) % types.length)
  const playRamp = ev =>{ 
    const now = context.currentTime;
    osillator.frequency.linearRampToValueAtTime(0 , now)
    osillator.frequency.linearRampToValueAtTime(100 , now +1)
    osillator.frequency.linearRampToValueAtTime(0 , now+ 2)
  }

  return <div>
          <Btn bgColor="#55acee" onClick={playRamp}> playRamp </Btn>
          <Btn bgColor="#55acee" onClick={startBeep}> Beeeep 🤖</Btn>
          <Btn bgColor="#55acee" onClick={changeType}>{types[wabeTypeIndex]}</Btn>
          <input type="range" min="80" max="220" step="1" onChange={handleChange}></input>
        </div>
}

export default MusicMakerStarterKit