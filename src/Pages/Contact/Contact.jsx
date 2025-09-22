import React, { useEffect, useRef } from 'react';
import styles from './style.module.scss'; // se estiver usando CSS Modules
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import LightsBg from '../../Components/LightsBg/LightsBg';
import CardSwap, { Card } from '../../Components/CardSwap/CardSwap';

export default function Contact() {
    const formRef = useRef(null)
    const cardsRef = useRef(null)

    const ableInput = (ev) => {
        ev.target.parentNode.classList.add(styles.able)
    }

    const disableInput = (ev) => {
        if (ev.target.value == "") {
            ev.target.parentNode.classList.remove(styles.able)
        }
    }

    useEffect(() => {
        const updateHeight = () => {
            if (formRef.current && cardsRef.current) {
                cardsRef.current.style.height = formRef.current.offsetHeight + "px"
            }
        }

        updateHeight()
        window.addEventListener("resize", updateHeight)
        return () => window.removeEventListener("resize", updateHeight)
    }, [])

    return (
        <>
            <Header />
            <main className={styles.main}>
                <LightsBg></LightsBg>
                <div className={styles.formContainer} ref={formRef}>
                    <form>
                        <h3>Como podemos ajudar?</h3>
                        <div className={styles.singleInputContainer}>
                            <label htmlFor="">Tipo de contato</label>
                            <select name="" id="" onFocus={(ev) => { ableInput(ev) }} onBlur={(ev) => { disableInput(ev) }}>
                                <option value=""></option>
                                <option value="1">Realizar orçamento</option>
                                <option value="3">Dúvida</option>
                                <option value="3">Problemas pós instalação</option>
                                <option value="2">Reclamação</option>
                                <option value="3">Elogio</option>
                            </select>
                        </div>
                        <div className={styles.doubleInputContainer}>
                            <div>
                                <label htmlFor="name_form">Nome <span className={styles.requiredAsterisco}>*</span></label>
                                <input type="text" id="name_form" name='name_form' onFocus={(ev) => { ableInput(ev) }} onBlur={(ev) => { disableInput(ev) }} />
                            </div>
                            <div>
                                <label htmlFor="">Sobrenome <span className={styles.requiredAsterisco}>*</span></label>
                                <input type="text" onFocus={(ev) => { ableInput(ev) }} onBlur={(ev) => { disableInput(ev) }} />
                            </div>
                        </div>
                        <div className={styles.singleInputContainer}>
                            <label htmlFor="">E-mail <span className={styles.requiredAsterisco}>*</span></label>
                            <input type="email" onFocus={(ev) => { ableInput(ev) }} onBlur={(ev) => { disableInput(ev) }} />
                        </div>
                        <div className={styles.singleInputContainer}>
                            <label htmlFor="">Telefone <span className={styles.requiredAsterisco}>*</span></label>
                            <input type="email" onFocus={(ev) => { ableInput(ev) }} onBlur={(ev) => { disableInput(ev) }} />
                        </div>
                        <div className={styles.singleInputContainer}>
                            <label htmlFor="">Assunto <span className={styles.requiredAsterisco}>*</span></label>
                            <input type="text" onFocus={(ev) => { ableInput(ev) }} onBlur={(ev) => { disableInput(ev) }} />
                        </div>
                        <div className={styles.singleInputContainer}>
                            <label htmlFor="">Mensagem <span className={styles.requiredAsterisco}>*</span></label>
                            <textarea name="" id="" onFocus={(ev) => { ableInput(ev) }} onBlur={(ev) => { disableInput(ev) }}></textarea>
                        </div>
                        <div className={styles.singleInputContainer}>
                            <button type='submit'>Enviar</button>
                        </div>
                    </form>
                </div>
                <div className={styles.cardsContainer} ref={cardsRef}>
                    <CardSwap
                        cardDistance={60}
                        verticalDistance={70}
                        delay={8000}
                        pauseOnHover={true}
                    >
                        <Card className={`${styles.card} ${styles.reviewCard}`}>
                            <div className={styles.header}>Feedback de Cliente</div>
                            <div className={styles.body}>
                                <img src="/images/people/model1.avif" alt="" />
                                <div className={styles.name}>Laura Dias Santos</div>
                                <div className={styles.review}>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda corrupti in ducimus consectetur velit quis eius. Esse nihil porro perferendis eveniet obcaecati optio consequatur accusantium illo. Veniam est exercitationem corporis.
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda corrupti in ducimus consectetur velit quis eius.

                                </div>
                            </div>
                        </Card>
                        <Card className={`${styles.card} ${styles.reviewCard}`}>
                            <div className={styles.header}>Feedback de Cliente</div>
                            <div className={styles.body}>
                                <img src="/images/people/model1.avif" alt="" />
                                <div className={styles.name}>Laura Dias Santos</div>
                                <div className={styles.review}>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda corrupti in ducimus consectetur velit quis eius. Esse nihil porro perferendis eveniet obcaecati optio consequatur accusantium illo. Veniam est exercitationem corporis.
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda corrupti in ducimus consectetur velit quis eius.

                                </div>
                            </div>
                        </Card>
                        <Card className={`${styles.card} ${styles.imageCard}`}>
                            <div className={styles.header}>Serviço realizado</div>
                            <div className={styles.body}>
                                <div className={styles.serviceName}>Versatik Division</div>
                                <img src="/images/Home/versatik_division.jpg" alt="" />
                            </div>
                        </Card>
                        <Card className={`${styles.card} ${styles.reviewCard}`}>
                            <div className={styles.header}>Feedback de Cliente</div>
                            <div className={styles.body}>
                                <img src="/images/people/model1.avif" alt="" />
                                <div className={styles.name}>Laura Dias Santos</div>
                                <div className={styles.review}>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda corrupti in ducimus consectetur velit quis eius. Esse nihil porro perferendis eveniet obcaecati optio consequatur accusantium illo. Veniam est exercitationem corporis.
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda corrupti in ducimus consectetur velit quis eius.

                                </div>
                            </div>
                        </Card>
                        <Card className={`${styles.card} ${styles.reviewCard}`}>
                            <div className={styles.header}>Feedback de Cliente</div>
                            <div className={styles.body}>
                                <img src="/images/people/model1.avif" alt="" />
                                <div className={styles.name}>Laura Dias Santos</div>
                                <div className={styles.review}>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda corrupti in ducimus consectetur velit quis eius. Esse nihil porro perferendis eveniet obcaecati optio consequatur accusantium illo. Veniam est exercitationem corporis.
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda corrupti in ducimus consectetur velit quis eius.

                                </div>
                            </div>
                        </Card>
                    </CardSwap>
                </div>
            </main>
            <Footer></Footer>
        </>
    );
}