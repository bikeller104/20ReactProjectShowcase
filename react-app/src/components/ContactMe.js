import React from 'react';
import '../Styles/MainComponent.css';


function lostFocus() {
    //document.getElementById("email_input").text")
}

function ContactMe() {
    return (
        <main className='main_container'>
            <section className='content_bounds'>
                <h3>Contact Me</h3>
                <p>Name:</p>
                <input type="text" ></input>
                <p>Email Address:</p>
                <input type="email" id="email_input"></input>
                <p>Message</p>
                <textarea rows="10" cols="40"></textarea>
            </section>
        </main>
        )
    }
    
    export default ContactMe;