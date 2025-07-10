import React, { useEffect } from 'react';
import styles from './style.module.scss';

import Header from '../../Components/Header/Header';

export default function Home() {
    useEffect(() => {
        const root = document.getElementById('root');
        const body = document.body
        if (root) root.classList.add(styles.rootCustom);
        if (body) body.classList.add(styles.bodyCustom);

        return () => {
            if (root) root.classList.remove(styles.rootCustom);
            if (body) body.classList.remove(styles.bodyCustom);
        };
    }, []);

    return (
        <>
            <Header />
            <main >

            </main>
            <section >

            </section>
            <section >

            </section>
        </>
    );
}