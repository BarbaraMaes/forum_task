import React, { useEffect, useState } from 'react'; 
import styled from 'styled-components'; 
import Authkit from '../functions/AuthKit';
import FormElement from '../components/FormElement'; 
import {Button} from '../styles/Button'; 
import Colors from '../constants/colors';


export default function RegisterPage() {
    const [countries, setCountries] = useState(null); 
    const [fields, setFields] = useState({
        email: null, 
        firstName: null, 
        lastName: null, 
        password: null, 
        country: null
    });
    const [errors, setErrors] = useState({
        email: null, 
        firstName: null, 
        lastName: null, 
        password: null, 
        country: null
    })
    const authKit = new Authkit();

    useEffect(async () => {
        const response = await authKit.getCountries(); 
        setCountries(response);
    }, []); 

    const validateFields = () => {
        //check if empty 
        //check min length for password 
        //check that email is an email
        return true; 
    }

    const handleRegister = async() => {
        if(validateFields()) console.log(fields);
    }

    return (
        <StyledDiv>
            <FormElement required error={errors.email} type="email" name="Email" var="email" onChange={(e) => {
                setFields({...fields, email: e.target.value})
                setErrors({...errors, email: null})}}/>
            <FormElement required error={errors.firstName} type="text" name="First Name" var="firstName" onChange={(e) => {
                setFields({...fields, firstName: e.target.value})
                setErrors({...errors, firstName: null})}}/>
            <FormElement required error={errors.lastName} type="text" name="Last Name" var="lastName" onChange={(e) => {
                setFields({...fields, lastName: e.target.value})
                setErrors({...errors, lastName: null})}}/>
            <FormElement reqruired error={errors.password} type="password" name="Password" var="password" onChange={(e) => {
                setFields({...fields, password: e.target.value}); 
                setErrors({...errors, password: null})}}/>
            <FormElement type="select" name="Country" var="country" values={countries} onChange={(e) => {
                setFields({...fields, country: e.target.value})}}/>
            <ButtonContainer><Button onClick={handleRegister}>Register</Button></ButtonContainer>
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
Register page should include a form with the following fields:
email
password
firstname
lastname
country (fetch list of countries from the back-end. See API below)
When the user has successfully registered, they should automatically navigate
to the login page.

*/
