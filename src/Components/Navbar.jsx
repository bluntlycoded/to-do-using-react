import React from 'react';
import './Navbar.css';

function Navbar() {
    return (
        <nav className='navbar'>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About us</a></li>
                <li><a href="#">More Projects</a></li>
            </ul>
        </nav>
    );
}

export default Navbar;
