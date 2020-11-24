import React, { useEffect, useContext } from 'react'; 
import styled from 'styled-components';
import Colors from '../constants/colors';
import {Button} from '../styles/Button';
import {UserContext} from '../context/UserContext'; 
import { useHistory } from 'react-router-dom'

export default function HomePage() {
    const history = useHistory();
    const {user} = useContext(UserContext);

    return (
        <StyledDiv>
            <StyledTitle>Welcome to this forum</StyledTitle>
            <StyledText>Please respect the Following rules: </StyledText>
            <StyledText>Do not post “offensive” posts, links or images
            Any material which constitutes defamation, harassment, or abuse is strictly prohibited. Material that is sexually or otherwise obscene, racist, or otherwise overly discriminatory is not permitted on these forums. This includes user pictures. Use common sense while posting.
            This is a web site for accountancy professionals.</StyledText>
            <StyledText>Remain respectful of other members at all times
            All posts should be professional and courteous. You have every right to disagree with your fellow community members and explain your perspective.
            However, you are not free to attack, degrade, insult, or otherwise belittle them or the quality of this community. It does not matter what title or power you hold in these forums, you are expected to obey this rule.</StyledText>
            <StyledLine />
            {user.token && <ButtonContainer>
                <Button onClick={() => history.push("/forum")}>Go To Posts</Button>
            </ButtonContainer>}
        </StyledDiv>
    )
}

const StyledDiv = styled.div`
    grid-row: 2; 
    width: 50%; 
    justify-self: center; 
    align-self: center;
    color: ${Colors.white}; 
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