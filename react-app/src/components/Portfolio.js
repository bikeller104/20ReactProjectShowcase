import React from 'react';
import '../Styles/MainComponent.css';
import ProjectPane from './ProjectPane';


const weatherProject = {
    imgSource: `https://raw.githubusercontent.com/bikeller104/06CustomizableWeatherLookup/main/Final%20Screenshot_2.png`,
    projectTitle: `Weather Dashboard`,
    projectLink: `https://github.com/bikeller104/06CustomizableWeatherLookup`
}

function Portfolio() {
    return (
        <main className='main_container'>
            <ProjectPane imgSource= {weatherProject.imgSource} projectTitle={weatherProject.projectTitle} projectLink={weatherProject.projectLink}>

            </ProjectPane>
        </main>
        )
    }
    
    export default Portfolio;