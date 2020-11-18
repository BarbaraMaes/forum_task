import React from 'react';
import styled from 'styled-components';
import Colors from '../constants/colors';
import FormElement from '../components/FormElement';
import {Button} from '../styles/Button';

export default function LoginPage() {
    return (
        <StyledDiv>
            <FormElement type="text" name="Email" var="email"/>
            <FormElement type="text" name="Password" var="password"/>
            <ButtonContainer><Button>Login</Button></ButtonContainer>
        </StyledDiv>
    )
}


const StyledDiv = styled.div`
    grid-row: 2; 
    width: 60%; 
    justify-self: center; 
    align-self: center;
    color: ${Colors.white}
`
const ButtonContainer = styled.div`
    display: flex; 
    justify-content: center; 
`


/* 
Login Page
Login page must include:
Email
Password
The form should be able to handle wrong credentials.
"Unable to log in with provided credentials."
When the user has successfully registered, they should automatically navigate
to the Home Page
*/