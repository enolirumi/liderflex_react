

import React from 'react';
import styles from './styles.module.scss'; // se estiver usando CSS Modules
import Header from '../../Components/Header/Header';

export default function Logo(props) {
    return (
        <h1 className={`${styles.logo} logo`} style={{ fontSize: props.fontSize }}>
            <div className={styles.firstLine}>LÍDER<span className='flex'>FLEX</span></div>
            <div className={styles.secondLine}>VIDROS</div>
        </h1>
    );
}