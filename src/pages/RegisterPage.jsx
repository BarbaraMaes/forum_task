import React, { useEffect, useState } from 'react'; 
import styled from 'styled-components'; 
import Authkit from '../functions/AuthKit';
import FormElement from '../components/FormElement'; 
import {Button} from '../styles/Button'; 
import Colors from '../constants/colors';


export default function RegisterPage() {
    const [countries, setCountries] = useState(null); 
    const authKit = new Authkit();

    useEffect(async () => {
        const response = await authKit.getCountries(); 
        setCountries(response);
        console.log(response);
    }, []); 

    return (
        <StyledDiv>
            <FormElement type="text" name="Email" var="email"/>
            <FormElement type="text" name="First Name" var="firstName"/>
            <FormElement type="text" name="Last Name" var="lastName"/>
            <FormElement type="password" name="Password" var="password"/>
            <FormElement type="select" name="Country" var="country" values={countries}/>
            <ButtonContainer><Button>Register</Button></ButtonContainer>
        </StyledDiv>
    )
}

const StyledDiv = styled.div`
    grid-row: 2; 
    width: 60%; 
    justify-self: center; 
    align-self: center;
    color: rgba(${Colors.white_rgb}, 0.8);
`
const ButtonContainer = styled.div`
    display: flex; 
    justify-content: center; 
`

/* 
Register page should include a form with the following fields:
email
password
firstname
lastname
country (fetch list of countries from the back-end. See API below)
When the user has successfully registered, they should automatically navigate
to the login page.

*/
