import React, { useState } from 'react';
import styled from 'styled-components';
import Colors from '../constants/colors';

export default function Navbar() {
    const [user, setUser] = useState(null)
    return (
        <NavbarContainer>
            <div className="d-flex w-50">
                <h3>Home</h3>
                <h3>About</h3>
            </div>

            <div>
                {user ? <h3>{user.name}</h3> : <h3>Not Logged in</h3>}
            </div>
        </NavbarContainer>
    )
}

const NavbarContainer = styled.div`
    background: ${Colors.black};
    padding: 0.5rem; 
    position: fixed; 
    width: 100%; 
    top: 0; 
    left: 0;
    overflow-x: hidden; 
    grid-row: 1; 
    display: flex; 
    justify-content: space-around;
    color: ${Colors.white}; 
`