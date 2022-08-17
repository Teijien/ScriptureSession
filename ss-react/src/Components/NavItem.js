import React from 'react';
import './NavItem.css'

function NavBar() {
    return (
        <nav className='NavBar'>
            <ul className='MenuItems'>
                <h1>Item 1</h1>
                <h1>Item 2</h1>
                <h1>Item 3</h1>
                <h1>Item 4</h1>
            </ul>
        </nav>
    )
}

export default NavBar;