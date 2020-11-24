import React from 'react';
import styled from 'styled-components';
import Colors from '../constants/colors';

export const Button = (props) => {
    return (
        <StyledButton {...props}>{props.children}</StyledButton>
    )
}

export const SmallButton = (props) => {
    return( 
        <StyledSmallButton {...props}>{props.children}</StyledSmallButton>
    )
}

export const BlockButton = (props) => {
  return(
    <StyledBlockButton {...props}>{props.children}</StyledBlockButton>
  )
}

const StyledButton = styled.button`
        background-color: ${Colors.yellow}; 
        border: 1px solid ${Colors.yellow}; 
        color: ${Colors.dark};
        font-weight: bold; 
        padding: 0.5rem 1rem; 
        text-align: center; 
        text-decoration: none; 
        font-size: 1.2rem;
        width: fit-content;
        height: fit-content; 
        border-radius: 10px; 

        &:hover {
          border: 1px solid ${Colors.white}
        }
    `

const StyledSmallButton = styled(Button)`
    padding: 0.2rem 0.5rem; 
    font-size: 1rem; 

`

const StyledBlockButton = styled(Button)`
    width: 100%; 
`

/* 
const Button = styled.button`
  color: white;
  background-color: black;
`
const Fancy = styled(Button)`
  background-color: red;
`

render() {
  return (
    <div>
      <Button>Button</Button>
      <Fancy>Fancy</Fancy>
    </div>
  )
}
*/