import React from 'react';
import styled from 'styled-components';
import Colors from '../constants/colors';

export const Title = (props) => {
    return(
        <StyledTitle>{props.children}</StyledTitle>
    )
}

const StyledTitle =styled.h3`
    text-align: center; 
    color: ${Colors.white}; 
    margin-top: 0; 
    margin-bottom: 3rem;
`