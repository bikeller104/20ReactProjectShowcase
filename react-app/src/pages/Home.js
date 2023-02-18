import React, {useState} from 'react';
import Header from   '../components/Header.js'
import Footer from '../components/Footer.js'
import ContactMe from '../components/ContactMe.js';
import AboutMe from '../components/AboutMe.js';
import Portfolio from '../components/Portfolio.js';
import Resume from '../components/Resume.js';
import '../Styles/Home.css'

import {ABOUT_ME, PORTFOLIO, RESUME, CONTACT_ME} from '../utils/pages.js';


function decidePage(activePage)
{
    switch(activePage) {
        case ABOUT_ME:
        return <AboutMe/>;
        case CONTACT_ME:
            return <ContactMe/>;
        case PORTFOLIO:
            return <Portfolio/>;
        case RESUME:
            return <Resume/>;
        default:
            return <AboutMe/>;

    }
}


export function Home() {

    const [activePage, setActivePage] = useState(AboutMe);
    

    
    return (
        <div className='page_container'>
            <Header ActivePage={activePage} setActivePage={setActivePage}/>
            { decidePage(activePage) }
            <Footer/>
        </div>
    )
}