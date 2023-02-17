import React from 'react';
import '../Styles/Header.css'
/**
 * 
 * @returns the header html section
 */
function Header() {
    return (
        <header className='header'>
            <h1>Brent Keller</h1>
            <nav>
                <a><h2>About Me</h2> </a>
                <a> <h2>Portfolio</h2> </a>
                <a> <h2>Contact Me</h2></a>
                <a><h2> Resume</h2></a>
            </nav>
        </header>
    )
}

export default Header;