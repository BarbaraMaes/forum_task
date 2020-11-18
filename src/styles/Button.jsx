import React from 'react';
import styled from 'styled-components';
import Colors from '../constants/colors';

export const Button = (props) => {
    return (
        <StyledButton>{props.children}</StyledButton>
    )
}

export const RedButton = (props) => {
    return( 
        <StyledRedButton>{props.children}</StyledRedButton>
    )
}

const StyledButton = styled.button`
        background-color: ${Colors.ruby}; 
        border: 1px solid ${Colors.ruby}; 
        color: ${Colors.white}; 
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

const StyledRedButton = styled(Button)`
    background-color: ; 
    border: 1px solid ; 
    color: #feeee1; 
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