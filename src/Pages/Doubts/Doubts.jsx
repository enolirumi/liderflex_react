import React from 'react';
import styles from './style.module.scss'; // se estiver usando CSS Modules

import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import LightsBg from '../../Components/LightsBg/LightsBg';
import WhatsAppButton from '../../Components/WhatsAppButton/WhatsAppButton';

import { IoIosArrowDown } from "react-icons/io";

export default function Doubts() {

    const doubts = [
        {
            id: 1,
            question: "Suporte e Garantia",
            answer: "Oferecemos suporte completo por 1 ano após a instalação, garantindo que seu sistema continue funcionando perfeitamente. A cobertura inclui eventuais problemas relacionados às ferragens ou ao kit instalado, mas não abrange quebras de vidro ocasionadas por impactos ou uso inadequado."
        },
        {
            id: 2,
            question: "Qual a diferença entre Versatik Truck e Slide Door?",
            answer: 
            <p>
                <b style={{fontSize: "1.2rem"}}>Versatik Truck</b> <br /><br />
                Robusto e seguro, suporta mais peso,
                Até 140 kg por folha em seu leito.
                Para grandes vãos e obras de impacto,
                Com trilho superior forte, nunca deprezo. <br /><br />

                <b style={{fontSize: "1.2rem"}}>Slide Door</b> <br /><br />
                Minimalista, leve, fácil de instalar,
                Suporta 80 kg e se adapta ao lar.
                Design moderno, trilho discreto a brilhar,
                Para ambientes internos, pronto pra encantar. <br /><br />

                <b style={{fontSize: "1.2rem"}}>Comparativo final</b> <br /><br />
                Truck é força, porte e elegância,
                Slide é leveza, design e praticidade.
                Ambos transformam espaços com segurança,
                Cada um no seu estilo, com versatilidade.
            </p>
        },
    ]

    const openAccordion = (ev) => {
        ev.target.parentNode.classList.toggle(styles.open)

    }

    return (
        <>
            <Header />
            <LightsBg />
            <WhatsAppButton />

            <main className={styles.main}>
                <h2>Dúvidas frequentes</h2>
                <div className={styles.doubtsContainer}>
                    {
                        doubts.map((ele) => {
                            return (
                                <div className={styles.accordionContainer}>
                                    <button className={styles.accordionHead} onClick={(ev) => openAccordion(ev)}>
                                        <div className={styles.question}>
                                            {ele.question}
                                        </div>
                                        <div className={styles.arrowContainer}><IoIosArrowDown /></div>
                                    </button>
                                    <div className={styles.accordionBody}>
                                        {ele.answer}
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </main>


            <Footer />
        </>
    );
}