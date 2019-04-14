import React from 'react'
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
  const currentScroll = props.zoom - 100

  const getPercent = () => {
    const totalScroll = 222
    return Math.round((currentScroll/totalScroll) * 100)

  }

  return (
    <Container>
      <OutterBar>
        <Progress percent={getPercent()}/>
      </OutterBar>
    </Container>
  )
}

export default ScrollBar