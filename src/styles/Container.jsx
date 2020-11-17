import React from 'react'; 
import styled from 'styled-components'; 
import Colors from '../constants/colors';

const StyledContainer = styled.div`
    background: ${Colors.white};
    width: 100vw; 
    height: 100vh;
    min-height: 100%;
    display: grid; 
    position: fixed;
    overflow: auto;
    grid-template-rows: 5% auto; 
    grip-template-columns: auto;
    `

export const Container = ({children}) => {
    return <StyledContainer>{children}</StyledContainer>
}

const StyledSmallContainer = styled(Container)`
    
`
    /* 
        width: 100vw; 
        height: 100vh;
        min-height: 100%;
    */
export const SmallContainer = ({children}) => {
    return <StyledSmallContainer>{children}</StyledSmallContainer>
}