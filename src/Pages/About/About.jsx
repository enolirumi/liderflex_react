import React, { useEffect, useState } from 'react';
import styles from './style.module.scss'; // se estiver usando CSS Modules
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import WhatsAppButton from '../../Components/WhatsAppButton/WhatsAppButton';
import LightsBg from '../../Components/LightsBg/LightsBg';

export default function About() {
    const [seeMore, setSeeMore] = useState(false)
    const [tempoDeMercado, setTempoDeMercado] = useState(0)

    const seeMoreOpen = () => {
        seeMore ? setSeeMore(false) : setSeeMore(true)
    }

    const calculaTempoDeMercado = () => {
        let dataAtual = new Date()
        let anoSurgimento = 2014

        return dataAtual.getFullYear() - anoSurgimento
    }

    useEffect(() => {
        setTempoDeMercado(calculaTempoDeMercado())
    }, [])

    return (
        <>
            <Header />
            <WhatsAppButton />
            <LightsBg />
            <main className={styles.main}>
                <div className={`${styles.container} ${seeMore ? styles.contentOpen : ""}`}>
                    <div className={`${styles.cardContent} ${styles.card}`}>
                        <h3>A LíderFlex Vidros</h3>
                        <p>
                            A LíderFlex Vidros e Coberturas Fundada em 2014 por José Renato Souza Rodrigues, a LíderFlex nasceu de um sonho moldado pela experiência e pela paixão em transformar ambientes. Com mais de 30 anos de trajetória no ramo de coberturas e construção civil, José Renato sempre esteve nas ruas, nas obras e no contato direto com o cliente — aprendendo, aprimorando e entendendo o que realmente valoriza um espaço. Trabalhou durante anos no setor de toldos e coberturas, adquirindo conhecimento técnico e sensibilidade para enxergar beleza onde poucos veem. Mas ele queria ir além — criar algo próprio, que unisse sua vivência com a elegância que é o forte do Fizão e a versatilidade do vidro. Foi desse propósito que surgiu a LíderFlex Vidros e Coberturas, uma empresa que se destaca pela dedicação, inovação e compromisso com a qualidade em cada detalhe. Ao longo dos anos, a marca se consolidou como referência em pergolados, portas de vidro, guarda-corpos e coberturas sob medida, sempre prezando pela harmonia entre resistência, estética e funcionalidade. A LíderFlex é mais do que uma empresa — é um sonho realizado que segue realizando sonhos todos os dias, com transparência e dedicação, dando "vidro" ao sonhos dos nossos clientes.
                            <div className={styles.contentMask}></div>
                        </p>
                        <button className={styles.seeMore} onClick={seeMoreOpen}>{seeMore ? "Ver menos" : "Ver mais"}</button>
                    </div>
                    <div className={`${styles.cardImage} ${styles.card}`}>
                    </div>
                    <div className={`${styles.cardServices} ${styles.infoCard} ${styles.card}`}>
                        <div className={styles.data}>
                            {tempoDeMercado}+
                        </div>
                        <div className={styles.cardDescription}>
                            Anos de mercado
                        </div>
                    </div>
                    <div className={`${styles.cardA} ${styles.infoCard} ${styles.card}`}>
                        <div className={styles.data}>
                            20+
                        </div>
                        <div className={styles.cardDescription}>
                            Colaboradores
                        </div>
                    </div>
                    <div className={`${styles.cardB} ${styles.infoCard} ${styles.card}`}>
                        <div className={styles.data}>
                            5.000+
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