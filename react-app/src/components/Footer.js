import React from 'react';
import '../Styles/Footer.css'

import githubIcon from '../images/githubIcon.svg'

//got icons from https://iconmonstr.com/stackoverflow-1-svg/
const github = "https://github.com/";
const linkedin = "https://www.linkedin.com/";
const stackoverflow = "https://stackoverflow.com/";



function Footer() {
    return (
        <footer>
            <nav>
                <a href={github}>
                    <p>Github</p>
                    {/*
                    <img src={githubIcon} ></img>
                */}
                </a>
                <a href={linkedin}>
                    <p>LinkedIn</p>
                </a>
                <a href={stackoverflow}>
                    <p>StackOverflow</p>
                </a>
                    
            </nav>
        </footer>
        )
    }
    
    export default Footer;