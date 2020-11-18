import React, { useContext, useEffect } from 'react';
import styled from 'styled-components';
import Colors from '../constants/colors';
import AuthKit from '../functions/AuthKit'; 
import {UserContext} from '../context/UserContext';

export default function Navbar() {
    const authKit = new AuthKit();
    const {user, setUser} = useContext(UserContext);
    
    useEffect(() => {
        const token = authKit.getToken();
        if(token)
        {   
            const fetched_user = authKit.getMe({token: token}); 
            setUser(fetched_user);
        }
        //check if token in localstorage
        //if token, get user
    }, [])
    
    return (
        <NavbarContainer>
            <NavItemContainer>
                <NavItem href="/">Home</NavItem>
                <NavItem href="/login">Login</NavItem>
                <NavItem href="/register">Register</NavItem>
                {user.token ? <NavItem href="/forum">Forum</NavItem> : null }
            </NavItemContainer>
            <div>
                {user.token ? <h4>{user.name}</h4> : <h4>Not Logged in</h4>}
            </div>
        </NavbarContainer>
    )
}
const NavbarContainer = styled.div`
    padding: 0.7rem; 
    position: fixed; 
    width: 100%; 
    top: 0; 
    left: 0;
    overflow-x: hidden; 
    grid-row: 1; 
    display: flex; 
    justify-content: space-around;
    color: ${Colors.white}; 
    border-bottom: ${Colors.grey} 1px solid;
`
const NavItem = styled.a`
    margin-right: 1.5rem;
    text-decoration: none; 
    font-size: 1.5rem; 
    color: ${Colors.white};
    font-weight: bold;
    
    &:hover {
        text-decoration: none; 
        color: ${Colors.ruby}
    }
`
const NavItemContainer = styled.div`
    display: flex; 
    justify-content: start
`