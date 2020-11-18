import React from 'react'; 
import styled from 'styled-components';
import Colors from '../constants/colors';
import {Button} from '../styles/Button';

export default function HomePage() {
    return (
        <StyledDiv>
            <StyledTitle>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...</StyledTitle>
            <StyledText>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin magna nibh, suscipit vitae nisi ut, congue sollicitudin tortor. Quisque lobortis, est sed consectetur semper, nulla diam rhoncus magna, a semper diam nunc sit amet ligula. In ante quam, tempor at lacus ac, vulputate rutrum nisi. Mauris mattis ornare nisi vitae lacinia. Pellentesque interdum blandit pharetra. Pellentesque pellentesque felis enim, consequat suscipit felis efficitur sit amet. Mauris maximus, nisl ut pellentesque euismod, dolor odio rhoncus arcu, at elementum enim tortor vitae enim.</StyledText>
            <StyledLine />
            <ButtonContainer>
                <Button>Go To Posts</Button>
            </ButtonContainer>
        </StyledDiv>
    )
}

const StyledDiv = styled.div`
    grid-row: 2; 
    width: 50%; 
    justify-self: center; 
    align-self: center;
    color: rgba(${Colors.white_rgb}, 0.8); 
`

const StyledTitle = styled.h3`
    text-align: center; 
    margin-bottom: 1.5rem; 
`

const StyledText = styled.p`

`

const StyledLine = styled.hr`
    border-bottom: ${Colors.grey} 1px solid; 
`

const ButtonContainer = styled.div`
    display: flex; 
    justify-content: center; 
`

/* 
Should some generic text about the forum
Forum Task 3
Add link so the user can navigate to Post List Page
Should which user is logged in
*/