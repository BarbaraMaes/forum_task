import React, { useContext, useState } from 'react'; 
import { useHistory } from 'react-router-dom';
import styled from 'styled-components'; 
import Authkit from '../functions/AuthKit';
import FormElement from '../components/FormElement'; 
import {Button} from '../styles/Button'; 
import Colors from '../constants/colors';
import {Title} from '../styles/Title';
import {DataContext} from '../context/DataContext';


export default function RegisterPage() {
    const history = useHistory();
    const {data} = useContext(DataContext);
    const authKit = new Authkit();
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
        console.log(fields);
        setErrors({...errors, [e.target.name]: null});
    }

    return (
        <StyledDiv>
            <Title>Register</Title>
            <FormElement required error={errors.email} type="text" name="email" var="email" onChange={(e) => {handleSetFields(e)}}/>
            <FormElement required error={errors.firstName} type="text" name="firstName" var="firstName" onChange={(e) => {handleSetFields(e)}}/>
            <FormElement required error={errors.lastName} type="text" name="lastName" var="lastName" onChange={(e) => {handleSetFields(e)}}/>
            <FormElement required error={errors.password} type="password" name="password" var="password" onChange={(e) => {handleSetFields(e)}}/>
            {data.countries && <FormElement type="select" name="country" var="Country" values={data.countries.results} onChange={(e) => {handleSetFields(e)}}/>}
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
