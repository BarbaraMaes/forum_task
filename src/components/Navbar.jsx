import React, { useContext, useEffect } from 'react';
import styled from 'styled-components';
import Colors from '../constants/colors';
import AuthKit from '../functions/AuthKit';
import {UserContext} from '../context/UserContext';
import {useHistory} from "react-router-dom";

export default function Navbar() {
    const {user, setUser} = useContext(UserContext);
    const authkit = new AuthKit();
    const history = useHistory();
    
    useEffect(() => {
        console.log(user);
    }, [user])

    const handleLogout = () => {
        authkit.clearToken();
        setUser({
            user: null, 
            token: null
        })
        history.push("/login");
    }

    
    return (
        <NavbarContainer>
            <NavItemContainer>
                <NavItem href="/">Home</NavItem>
                {user.token ? 
                <>
                <NavItem href="/forum">Forum</NavItem>
                <NavItem onClick={handleLogout}>Logout</NavItem>
                </> :
                <>                 
                <NavItem href="/login">Login</NavItem>
                <NavItem href="/register">Register</NavItem> 
                </>}
            </NavItemContainer>
            <div>
            {user.token ? <h4>{user.user.firstName} {user.user.lastName}</h4> : <h4>Not Logged in</h4>}
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
    background-color: rgba(0,0,0,0.6);
`
const NavItem = styled.a`
    margin-right: 1.5rem;
    text-decoration: none; 
    font-size: 1.5rem; 
    color: ${Colors.white};
    font-weight: bold;

    &:hover {
        text-decoration: none; 
        color: ${Colors.red}; 
        cursor: pointer; 
    }
`
const NavItemContainer = styled.div`
    display: flex; 
    justify-content: start
`