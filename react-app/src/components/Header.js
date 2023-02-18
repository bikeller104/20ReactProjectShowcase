import React from 'react';
import '../Styles/Header.css'


import {ABOUT_ME, PORTFOLIO, RESUME, CONTACT_ME} from '../utils/pages.js';



/**
 * 
 * @returns the header html section
 */
function Header({ActivePage, setActivePage}) {

    const activateAboutMe = () =>  setActivePage(ABOUT_ME);
    const activatePortfolio = () => setActivePage(PORTFOLIO);
    const activateContactMe =() => setActivePage(CONTACT_ME);
    const activateResume = () => setActivePage(RESUME);

    return (
        <header className='header'>
            <h1>Brent Keller</h1>
            <nav>
                <a>
                    <h2 onClick={activateAboutMe}>About Me</h2> </a>
                <a> 
                    <h2 onClick={activatePortfolio}>Portfolio</h2> 
                    </a>
                <a> 
                    <h2 onClick={activateContactMe}>Contact Me</h2>
                    </a>
                <a>
                    <h2 onClick={activateResume}> Resume</h2>
                    </a>
            </nav>
        </header>
    )
}

export default Header;