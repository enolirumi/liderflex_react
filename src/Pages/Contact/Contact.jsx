import React from 'react';
import styles from './style.module.scss'; // se estiver usando CSS Modules
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import LightsBg from '../../Components/LightsBg/LightsBg';
import CardSwap, { Card } from '../../Components/CardSwap/CardSwap';

export default function Contact() {
    return (
        <>
            <Header />
            <LightsBg></LightsBg>
            <main className={styles.main}>
                <div className={styles.formContainer}>
                    <form>

                    </form>
                </div>
                <div className={styles.cardsContainer}>
                    <CardSwap
                        cardDistance={60}
                        verticalDistance={70}
                        delay={5000}
                        pauseOnHover={false}
                    >
                        <Card className={styles.card}>
                            <div className={styles.header}>Feedback</div>
                            <div className={styles.body}>
                                a
                            </div>
                        </Card>
                        <Card className={styles.card}>
                            <div className={styles.header}>Feedback</div>
                        </Card>
                        <Card className={styles.card}>
                            <div className={styles.header}>Feedback</div>
                        </Card>
                    </CardSwap>
                </div>
            </main>
            <Footer></Footer>
        </>
    );
}