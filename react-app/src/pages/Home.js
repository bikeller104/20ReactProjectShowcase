import React from 'react';
import Header from   '../components/Header.js'
import Footer from '../components/Footer.js'
import ContactMe from '../components/ContactMe';
import '../Styles/Home.css'

export function Home() {
    return (
        <div>
            <Header/>
                {/*<ContactMe/>*/}
            <Footer/>
        </div>
    )
}