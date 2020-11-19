import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import Colors from '../constants/colors';
import FormElement from '../components/FormElement';
import {Button} from '../styles/Button';
import Authkit from '../functions/AuthKit';
import {UserContext} from '../context/UserContext'; 
import {useHistory} from "react-router-dom";

export default function LoginPage() {
    const authKit = new Authkit();
    const history = useHistory();
    const {setUser} = useContext(UserContext); 
    const [fields, setFields] = useState({
        email: null, 
        password: null,
    })

    const handleLogin = async() => { 
        const token = await authKit.login(fields); 
        await authKit.setToken({token: token.token})
        const user = await authKit.getMe({token: token.token}); 
        setUser({user: user, token: token}); 
        history.push({
            pathname: "/"
        })
    } 

    return (
        <StyledDiv>
            <FormElement type="text" name="Email" var="email" onChange={(e) => {setFields({...fields, email: e.target.value})}}/>
            <FormElement type="text" name="Password" var="password" onChange={(e) => {setFields({...fields, password: e.target.value})}}/>
            <ButtonContainer><Button onClick={handleLogin}>Login</Button></ButtonContainer>
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