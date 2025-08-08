import React from 'react';
import styles from './style.module.scss'; // se estiver usando CSS Modules

import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import LightsBg from '../../Components/LightsBg/LightsBg';

import { IoIosArrowDown } from "react-icons/io";

export default function Doubts() {

    const doubts = [
        {
            id: 1,
            question: "",
            answer: ""
        }
    ]

    const openAccordion = (ev) => {
        ev.target.parentNode.classList.toggle(styles.open)
        
    }

    return (
        <>
            <Header />
            <LightsBg />

            <main className={styles.main}>
                <h2>Dúvidas frequentes</h2>
                <div className={styles.doubtsContainer}>
                    <div className={styles.accordionContainer}>
                        <button className={styles.accordionHead} onClick={(ev) => openAccordion(ev)}>
                            Qual a diferença entre Versatik truck e Slide door
                            <IoIosArrowDown />
                        </button>
                        <div className={styles.accordionBody}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio saepe placeat natus distinctio. Qui fuga facere rerum libero dolor cum provident ab? Ipsa, officia minus deleniti itaque quos placeat dolore.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio saepe placeat natus distinctio. Qui fuga facere rerum libero dolor cum provident ab? Ipsa, officia minus deleniti itaque quos placeat dolore.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio saepe placeat natus distinctio. Qui fuga facere rerum libero dolor cum provident ab? Ipsa, officia minus deleniti itaque quos placeat dolore.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio saepe placeat natus distinctio. Qui fuga facere rerum libero dolor cum provident ab? Ipsa, officia minus deleniti itaque quos placeat dolore.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio saepe placeat natus distinctio. Qui fuga facere rerum libero dolor cum provident ab? Ipsa, officia minus deleniti itaque quos placeat dolore.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio saepe placeat natus distinctio. Qui fuga facere rerum libero dolor cum provident ab? Ipsa, officia minus deleniti itaque quos placeat dolore.
                        </div>
                    </div>
                    <div className={styles.accordionContainer}>
                        <div className={styles.accordionHead} onClick={(ev) => openAccordion(ev)}>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus ut voluptatum autem praesentium et ad molestias sunt. Magnam incidunt omnis voluptas autem, delectus facere porro ex debitis hic expedita assumenda?
                            <IoIosArrowDown />
                        </div>
                        <div className={styles.accordionBody}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio saepe placeat natus distinctio. Qui fuga facere rerum libero dolor cum provident ab? Ipsa, officia minus deleniti itaque quos placeat dolore.
                        </div>
                    </div>
                    <div className={styles.accordionContainer}>
                        <div className={styles.accordionHead} onClick={(ev) => openAccordion(ev)}>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus ut voluptatum autem praesentium et ad molestias sunt. Magnam incidunt omnis voluptas autem, delectus facere porro ex debitis hic expedita assumenda?
                            <IoIosArrowDown />
                        </div>
                        <div className={styles.accordionBody}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio saepe placeat natus distinctio. Qui fuga facere rerum libero dolor cum provident ab? Ipsa, officia minus deleniti itaque quos placeat dolore.
                        </div>
                    </div>
                    <div className={styles.accordionContainer}>
                        <div className={styles.accordionHead} onClick={(ev) => openAccordion(ev)}>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus ut voluptatum autem praesentium et ad molestias sunt. Magnam incidunt omnis voluptas autem, delectus facere porro ex debitis hic expedita assumenda?
                            <IoIosArrowDown />
                        </div>
                        <div className={styles.accordionBody}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio saepe placeat natus distinctio. Qui fuga facere rerum libero dolor cum provident ab? Ipsa, officia minus deleniti itaque quos placeat dolore.
                        </div>
                    </div>
                    <div className={styles.accordionContainer}>
                        <div className={styles.accordionHead} onClick={(ev) => openAccordion(ev)}>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus ut voluptatum autem praesentium et ad molestias sunt. Magnam incidunt omnis voluptas autem, delectus facere porro ex debitis hic expedita assumenda?
                            <IoIosArrowDown />
                        </div>
                        <div className={styles.accordionBody}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio saepe placeat natus distinctio. Qui fuga facere rerum libero dolor cum provident ab? Ipsa, officia minus deleniti itaque quos placeat dolore.
                        </div>
                    </div>
                </div>
            </main>


            <Footer />
        </>
    );
}