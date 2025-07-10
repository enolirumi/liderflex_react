import React from 'react';
import styles from './style.module.scss'; // se estiver usando CSS Modules

import Header from '../../Components/Header/Header';

export default function Doubts() {
    return (
        <>
            <Header />
            <div className={styles.container}>
                <h1>Bem-vindo à Dúvidas</h1>
                <p>Esta é a página inicial do seu site.</p>
            </div>
        </>
    );
}