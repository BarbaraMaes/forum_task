import React from 'react'; 
import styled from 'styled-components'; 
import Colors from '../constants/colors';

const StyledContainer = styled.div`
    width: 100vw; 
    height: 100vh;
    min-height: 100%;
    position: fixed;
    overflow: auto;
    background-color: ${Colors.dark};

    `
    /*
    background-image: url("https://images.unsplash.com/photo-1549932967-c60dce5958ce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"); 
    background-size: cover; 
    background-repeat: no-repeat;
    */

const Overlay = styled.div`
    position: fixed; 
    width: 100%; 
    height: 100%; 
    top: 0; 
    left: 0; 
    right: 0; 
    bottom: 0; 
    background-color: rgba(0,0,0,0.4);
    display: grid; 
    grid-template-rows: 5% auto; 
    grip-template-columns: auto;
    overflow-y: scroll;
`

export const Container = ({children}) => {
    return <StyledContainer><Overlay>{children}</Overlay></StyledContainer>
}
