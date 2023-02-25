import React from 'react';
import '../Styles/MainComponent.css';
import ProjectPane from './ProjectPane';


const weatherProject = {
    imgSource: `https://raw.githubusercontent.com/bikeller104/06CustomizableWeatherLookup/main/Final%20Screenshot_2.png`,
    projectTitle: `Weather Dashboard`,
    projectLink: `https://github.com/bikeller104/06CustomizableWeatherLookup`
}

const LiveNoteTaker = {
    projectLink: `https://github.com/bikeller104/11LiveNoteTaker`,
    projectTitle: `Live Note Taker`,
    imgSource: `https://raw.githubusercontent.com/bikeller104/11LiveNoteTaker/main/ProjectVisual.png`
}

const TimedQuiz = {
    imgSource: `https://raw.githubusercontent.com/bikeller104/04TimedJavascriptQuiz/main/Final%20Screenshot.png`,
    projectTitle: `Timed Quiz`,
    projectLink: `https://github.com/bikeller104/04TimedJavascriptQuiz`
}

function Portfolio() {
    return (
        <main className='main_container'>
            <ProjectPane imgSource= {weatherProject.imgSource} projectTitle={weatherProject.projectTitle} projectLink={weatherProject.projectLink}>

            </ProjectPane>
            <ProjectPane {...LiveNoteTaker}/>
            <ProjectPane {...TimedQuiz}/>
        </main>
        )
    }
    
    export default Portfolio;