import React from 'react';
import styles from './style.module.scss'; // se estiver usando CSS Modules

import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import LightsBg from '../../Components/LightsBg/LightsBg';

export default function Doubts() {

    const doubts = [
        {
            question: "",
            answer: ""
        }
    ]

    return (
        <>
            <Header />
            <LightsBg />
            
            <main>
                
            </main>

            <Footer />
        </>
    );
}