import React, { useEffect, useState } from 'react'; 
import { useHistory } from 'react-router-dom';
import styled from 'styled-components'; 
import Authkit from '../functions/AuthKit';
import FormElement from '../components/FormElement'; 
import {Button} from '../styles/Button'; 
import Colors from '../constants/colors';
import {Title} from '../styles/Title';


export default function RegisterPage() {
    const history = useHistory();
    const [countries, setCountries] = useState(null); 
    const [fields, setFields] = useState({
        email: null, 
        firstName: null, 
        lastName: null, 
        password: null, 
        country: 1
    });
    const [errors, setErrors] = useState({
        email: null, 
        firstName: null, 
        lastName: null, 
        password: null, 
        country: null
    })
    const authKit = new Authkit();

    useEffect(() => {
        async function fetchCountries() {
            const fetched_countries = await authKit.getCountries();
            setCountries(fetched_countries);
        }
        fetchCountries();
    }, []); 

    /*const validateFields = () => {
        if(fields.password.length < 6) {
            setErrors({...errors, password: "password too short"}); 
            return false; 
        }
        else if(new RegExp(/^\d+$/).test(fields.password)) {
            setErrors({...errors, password: "Password should not be entirely numeric"}); 
            return false; 
        }
        //check if empty 
        //check min length for password 
        //check that email is an email
        return true; 
    }*/

    const handleRegister = async() => {
        const response = await authKit.register({fields});
        if(response.status === 400) {
            Object.entries(response.error).map(error => setErrors({...errors, [error[0]]: error[1]}));
        } 
        else {
        console.log(response);
        history.push({
            pathname: "/login", 
            user: {
                email: fields.email, 
                password: fields.password
            }
        })}
    }

    const handleSetFields = (e) => {
        setFields({...fields, [e.target.name]: e.target.value}); 
        setErrors({...errors, [e.target.name]: null});
    }

    return (
        <StyledDiv>
            <Title>Register</Title>
            <FormElement required error={errors.email} type="text" name="Email" var="email" onChange={(e) => {handleSetFields(e)}}/>
            <FormElement required error={errors.firstName} type="text" name="firstName" var="First Name" onChange={(e) => {handleSetFields(e)}}/>
            <FormElement required error={errors.lastName} type="text" name="lastName" var="Last Name" onChange={(e) => {handleSetFields(e)}}/>
            <FormElement reqruired error={errors.password} type="password" name="password" var="Password" onChange={(e) => {handleSetFields(e)}}/>
            {countries && <FormElement type="select" name="country" var="Country" values={countries.results} onChange={(e) => {handleSetFields(e)}}/>}
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
