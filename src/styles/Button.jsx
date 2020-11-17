import React from 'react';
import styled from 'styled-components';

export const Button = (props) => {
    return (
        <Button>{props.children}</Button>
    )
}

export const RedButton = () => {
    return( 
        <RedButton>{props.children}</RedButton>
    )
}

const Button = styled.button`
        background-color: ; 
        border: 1px solid ; 
        color: ; 
        padding: 0.5rem 1rem; 
        text-align: center; 
        text-decoration: none; 
        font-size: 1.2rem;
        width: fit-content;
        height: fit-content
    `

const RedButton = styled(Button)`
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