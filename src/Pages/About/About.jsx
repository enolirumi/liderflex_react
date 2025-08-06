import React, { useEffect, useState } from 'react';
import styles from './style.module.scss'; // se estiver usando CSS Modules
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import WhatsAppButton from '../../Components/WhatsAppButton/WhatsAppButton';

export default function About() {
    const [seeMore, setSeeMore] = useState(false)

    const seeMoreOpen = () => {
        seeMore ? setSeeMore(false) : setSeeMore(true)
    }


    return (
        <>
            <Header />
            <WhatsAppButton />
            <div className={styles.backgroundLightsContainer}>
                <div className={styles.first}></div>
                <div className={styles.second}></div>
                <div className={styles.third}></div>
            </div>
            <main className={styles.main}>
                <div className={`${styles.container} ${seeMore ? styles.contentOpen : ""}`}>
                    <div className={`${styles.cardContent} ${styles.card}`}>
                        <h3>A LíderFlex Vidros</h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis odio maiores, minima architecto aspernatur nostrum facilis soluta fugiat accusantium distinctio nesciunt commodi tenetur dolor accusamus dolorem rerum quas, voluptatum excepturi.
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit libero laboriosam delectus labore, magnam distinctio, ipsa in reprehenderit minus tempora neque exercitationem cum eaque enim, iste corrupti? Aliquam, omnis earum!
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit libero laboriosam delectus labore, magnam distinctio, ipsa in reprehenderit minus tempora neque exercitationem cum eaque enim, iste corrupti? Aliquam, omnis earum!
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit libero laboriosam delectus labore, magnam distinctio, ipsa in reprehenderit minus tempora neque exercitationem cum eaque enim, iste corrupti? Aliquam, omnis earum!

                            <div className={styles.contentMask}></div>
                        </p>
                        <div className={styles.seeMore} onClick={seeMoreOpen}>{seeMore ? "Ver menos" : "Ver mais"}</div>
                    </div>
                    <div className={`${styles.cardServices} ${styles.infoCard} ${styles.card}`}>
                        <div className={styles.data}>
                            20+
                        </div>
                        <div className={styles.cardDescription}>
                            Anos de mercado
                        </div>
                    </div>
                    <div className={`${styles.cardImage} ${styles.card}`}>
                    </div>
                    <div className={`${styles.cardA} ${styles.infoCard} ${styles.card}`}>
                        <div className={styles.data}>
                            10+
                        </div>
                        <div className={styles.cardDescription}>
                            Colaboradores
                        </div>
                    </div>
                    <div className={`${styles.cardB} ${styles.infoCard} ${styles.card}`}>
                        <div className={styles.data}>
                            1.000+
                        </div>
                        <div className={styles.cardDescription}>
                            Clientes satisfeitos
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </>
    );
}