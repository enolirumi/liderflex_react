import React, { useEffect } from 'react';
import styles from './style.module.scss';

import Header from '../../Components/Header/Header';

export default function Home() {
    useEffect(() => {
        document.body.classList.add(styles.bodyCustom);

        return () => {
            document.body.classList.remove(styles.bodyCustom);
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