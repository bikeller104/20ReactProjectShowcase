import React from 'react';
import '../Styles/MainComponent.css';

const profilePicture = "./../../public/ProfilePicture.jpeg"

function AboutMe() {
    return (
        <main className='main_container'>
            <img src={profilePicture} alt="Brent Keller smiling at the camera in front of a green background" width="5em" height="6em"/>
            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vel est ac urna sagittis molestie vel quis mi. Nunc consequat dui nec semper bibendum. Praesent leo elit, interdum nec scelerisque ut, ullamcorper sed mi. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam rutrum sem et blandit bibendum. Donec vitae nunc a velit lobortis cursus. Morbi a eros id purus varius fringilla.

Nulla diam libero, egestas ut dolor nec, rhoncus placerat libero. Ut quis bibendum urna. Nulla pellentesque risus scelerisque, pellentesque mauris sit amet, malesuada tellus. Proin feugiat aliquet varius. Nam pellentesque non diam nec scelerisque. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nam egestas tincidunt porta. Sed vel nisl ac mi sodales pharetra. Aliquam laoreet augue eu lorem egestas, vel malesuada ligula porta. Donec egestas consectetur massa, quis lacinia metus volutpat eu. Praesent quis mauris non nisi cursus eleifend. Suspendisse potenti. Cras ut vulputate orci, a lacinia ligula. Maecenas vestibulum nunc vitae gravida faucibus. Nulla blandit commodo neque sit amet hendrerit.

Etiam feugiat dui in libero eleifend, eu ullamcorper leo tincidunt. Sed dui risus, euismod et orci sit amet, suscipit tincidunt libero. Vivamus porta lacinia faucibus. Suspendisse nec placerat augue, a auctor eros. Quisque porta, diam in ultrices convallis, augue magna suscipit dui, vitae dignissim tellus quam condimentum lacus. Donec blandit lacinia tortor at fermentum. Ut non eros ut enim interdum cursus. Quisque iaculis sem quam, sed fringilla nunc dictum at. Pellentesque quis laoreet elit, vel ultricies mauris. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aenean mollis sem in lectus volutpat, vitae efficitur dolor posuere. </p>
        </main>
        )
    }
    
    export default AboutMe;