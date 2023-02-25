import React from 'react';
import '../Styles/ProjectPane.css';
import githubIcon from '../images/githubIcon.svg'

const profilePicture = "./../../public/ProfilePicture.jpeg"

function ProjectPane({imgSource, projectTitle, projectLink}) {
    return (
        <div className='pane'>
            {/*
            
        <p>{imgSource }</p>
        <p>{projectTitle}</p>
        <p>{projectLink}</p>
        */}

            
            <img src = {imgSource} className="pane" />
            

            

            <div>
                <h3>{projectTitle}</h3>
                <a className='project-link' href={projectLink}>
                    <img src={githubIcon}></img>
                </a>
            </div>
           
                

        {/*
                */}
        </div>
    )
}

export default ProjectPane;