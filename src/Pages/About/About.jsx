import React from 'react';
import styles from './style.module.scss'; // se estiver usando CSS Modules
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';

export default function About() {
    return (
        <>
            <Header />

            <main className={styles.main}>
                <div className={styles.container}>
                    <div className={`${styles.cardContent} ${styles.card}`}>
                        <h3>Sobre nós</h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis odio maiores, minima architecto aspernatur nostrum facilis soluta fugiat accusantium distinctio nesciunt commodi tenetur dolor accusamus dolorem rerum quas, voluptatum excepturi.
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit libero laboriosam delectus labore, magnam distinctio, ipsa in reprehenderit minus tempora neque exercitationem cum eaque enim, iste corrupti? Aliquam, omnis earum!
                            
                        </p>
                    </div>
                    <div className={`${styles.cardServices} ${styles.card}`}>

                    </div>
                    <div className={`${styles.cardImage} ${styles.card}`}>

                    </div>
                    <div className={`${styles.cardA} ${styles.card}`}>

                    </div>
                    <div className={`${styles.cardB} ${styles.card}`}>

                    </div>
                </div>
            </main>

            <Footer />
        </>
    );
}