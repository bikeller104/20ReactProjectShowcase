import React from 'react';
import '../Styles/MainComponent.css';


function Resume() {
    return (
        <main className='main_container'>
            <section>

            <h2>Skills</h2>
            <ul>
                <li>React</li>
                <li>Webpack</li>
                <li>css</li>
                <li>JavaScript</li>
                <li>Java</li>
            </ul>
            </section>
            <section>

<h2>Front-End Projects</h2>
<ul>
    <li>Web Based Notes App</li>
    <li>Profile Website</li>
    <li>Weather Forecast Dashboard App</li>
</ul>

<h2>Back-End Projects</h2>
<ul>
    <li>E-Commerse Backend</li>
    <li>Employee Database</li>

</ul>
</section>
        </main>
        )
    }
    
    export default Resume;