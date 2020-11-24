import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import Colors from '../constants/colors';
import FormElement from '../components/FormElement';
import {Button} from '../styles/Button';
import Authkit from '../functions/AuthKit';
import {UserContext} from '../context/UserContext'; 
import {useHistory, useLocation} from "react-router-dom";
import {Title} from '../styles/Title';

export default function LoginPage() {
    const authKit = new Authkit();
    const history = useHistory();
    const location = useLocation();
    const {setUser} = useContext(UserContext); 
    const [fields, setFields] = useState({
        email: null, 
        password: null,
    })
    const [error, setError] = useState(null)

    useEffect(() => {
        if(location.user) {
           setFields(location.user);
        }
    }, [])

    const handleLogin = async() => { 
        const response = await authKit.login(fields); 
        if(response.nonFieldErrors) {
            setError(response.nonFieldErrors);
        }
        else {
            await authKit.setToken({token: response.token})
            const user = await authKit.getMe({token: response.token}); 
            setUser({user: user, token: response.token}); 
            history.push({
                pathname: "/"
            })
        }
    } 

    const handleSetFields = (e) => {
        setFields({...fields, [e.target.name.toLowerCase()]: e.target.value}); 
        setError(null);
    }

    return (
        <StyledDiv>
            <Title>Login</Title>
            <FormElement error={error} value={fields.email} type="text" name="email" var="Email" onChange={(e) => {
               handleSetFields(e) }}/>
            <FormElement error={error} value={fields.password} type="password" name="password" var="Password" onChange={(e) => {
                handleSetFields(e) }}/>
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