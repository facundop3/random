import styled from "styled-components"

const Box =  styled.div`
  text-align: center;
  height: ${props => props.height? props.height : '100vh'};
  width: ${props => props.width? props.width : '100%'};
  background-color: ${props => props.bgColor? props.bgColor : ''};
  ${ props => props.bgImage && 
    `background-image: url(${props.bgImage});
    /* Create the parallax scrolling effect */
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;`
  }

  ${
    props => (props.bgImage && props.bgXP) && `background-position-x: ${props.bgXP};`
  }
  

  ${
    props => props.centrate && 
    `display: flex;
    justify-content: center;
    align-items: center;`
  }
  ${
    props => props.right &&
    `float: right;`
  }
  ${
    props => props.color && 
    `color: ${props.color};`
  }
`;

const Header = styled.div`
  background-color: #282c34;
  font-size: calc(10px + 2vmin);
  color: white;
`;

const Main = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${props => props.gif});
  background-size: contain;
  height:100vh;
`;

const BaseSection = styled.section`
  height: ${props => props.height? props.height : 100 }vh;
  width: calc(100% -2px);
  border: 1px solid black;
  background-color: ${props => props.bg};
  display: flex;
  ${
    props => props.jContent && 
    `justify-content: ${props.jContent}; `
  }
`

export {
  Box,
  Header,
  Main,
  BaseSection
}