import React, { useEffect, useRef, useState } from 'react';
import { ToastContainer, toast, Bounce } from 'react-toastify';
import axios from 'axios';
import styles from './style.module.scss'; // se estiver usando CSS Modules
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import LightsBg from '../../Components/LightsBg/LightsBg';
import CardSwap, { Card } from '../../Components/CardSwap/CardSwap';

import { FaWhatsapp } from "react-icons/fa";

export default function Contact() {
    const formRef = useRef(null)
    const cardsRef = useRef(null)
    const [form, setForm] = useState({
        nome: "",
        sobrenome: "",
        email: "",
        telefone: "",
        tipoContato: "",
        mensagem: "",
    })

    const [status, setStatus] = useState("Enviar")

    const handleSubmit = async (e) => {
        e.preventDefault()

        setStatus("Enviando...")

        const formData = new FormData();
        for (const key in form) formData.append(key, form[key]);


        try {
            const response = await axios.post("/api/sendMail.php", formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                }
            });

            if (response.data.status == "success") {
                toast.success(response.data.message, {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    transition: Bounce,
                });
            } else {
                toast.error(response.data.message, {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    transition: Bounce,
                });
            }

        } catch (error) {
            toast.error('Erro interno! Por favor tente novamente mais tarde', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
            });
        }

        setStatus("Enviar");
    }

    const handleChangeInput = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const ableInput = (ev) => {
        ev.target.parentNode.classList.add(styles.able)
    }

    const disableInput = (ev) => {
        if (ev.target.value == "") {
            ev.target.parentNode.classList.remove(styles.able)
            
            if (ev.target.parentNode.querySelector("label>span").classList.contains(styles.requiredAsterisco)) {
                ev.target.parentNode.querySelector("label").classList.add(styles.colorRed)
            }
        } else {
            ev.target.parentNode.querySelector("label").classList.remove(styles.colorRed)
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
                <ToastContainer
                    position="top-right"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={true}
                    closeOnClick={false}
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover={true}
                    theme="dark"
                    transition={Bounce}
                />
                <LightsBg></LightsBg>
                <div className={styles.formContainer} ref={formRef}>
                    <form onSubmit={handleSubmit}>
                        <h3>Como podemos ajudar?</h3>
                        <div className={styles.singleInputContainer}>
                            <label htmlFor="">Tipo de contato <span className={styles.requiredAsterisco}>*</span></label>
                            <select name="tipoContato" id="" onChange={handleChangeInput} onFocus={(ev) => { ableInput(ev) }} onBlur={(ev) => { disableInput(ev) }}>
                                <option value=""></option>
                                <option value="Orçamento">Realizar orçamento</option>
                                <option value="Dúvida">Dúvida</option>
                                <option value="Pós-Instalação">Problemas pós instalação</option>
                                <option value="Reclamação">Reclamação</option>
                                <option value="Elogio">Elogio</option>
                            </select>
                        </div>
                        <div className={styles.doubleInputContainer}>
                            <div>
                                <label htmlFor="name_form">Nome <span className={styles.requiredAsterisco}>*</span></label>
                                <input type="text" name="nome" onChange={handleChangeInput} id="name" onFocus={(ev) => { ableInput(ev) }} onBlur={(ev) => { disableInput(ev) }} />
                            </div>
                            <div>
                                <label htmlFor="">Sobrenome <span className={styles.requiredAsterisco}>*</span></label>
                                <input type="text" name="sobrenome" onChange={handleChangeInput} onFocus={(ev) => { ableInput(ev) }} onBlur={(ev) => { disableInput(ev) }} />
                            </div>
                        </div>
                        <div className={styles.singleInputContainer}>
                            <label htmlFor="">E-mail <span className={styles.requiredAsterisco}>*</span></label>
                            <input type="email" name="email" onChange={handleChangeInput} onFocus={(ev) => { ableInput(ev) }} onBlur={(ev) => { disableInput(ev) }} />
                        </div>
                        <div className={styles.singleInputContainer}>
                            <label htmlFor="">Telefone <span className={styles.requiredAsterisco}>*</span></label>
                            <input type="tel" name="telefone" onChange={handleChangeInput} onFocus={(ev) => { ableInput(ev) }} onBlur={(ev) => { disableInput(ev) }} />
                        </div>
                        <div className={styles.singleInputContainer}>
                            <label htmlFor="">Mensagem <span className={styles.requiredAsterisco}>*</span></label>
                            <textarea name="mensagem" id="" onChange={handleChangeInput} onFocus={(ev) => { ableInput(ev) }} onBlur={(ev) => { disableInput(ev) }}></textarea>
                        </div>
                        <div className={styles.singleInputContainer}>
                            <button type='submit'>{status}</button>
                        </div>
                        <div className={styles.singleInputContainer}>
                            <a href="https://wa.me/message/XZZS34OFYHG5N1" target="_blank" className={styles.wppFormBtn}>Ou nos chame no <FaWhatsapp />WhatsApp</a>
                        </div>
                    </form>
                </div>
                <div className={styles.cardsContainer} ref={cardsRef}>
                    <CardSwap
                        cardDistance={60}
                        verticalDistance={70}
                        delay={5000}
                        pauseOnHover={true}
                    >
                        <Card className={`${styles.card} ${styles.reviewCard}`}>
                            <div className={styles.header}>Feedback de Cliente</div>
                            <div className={styles.body}>
                                <img src="/images/people/model3.png" alt="" />
                                <div className={styles.name}>Bruno Ferreira</div>
                                <div className={styles.review}>
                                    Contratei a LiderFlex para colocar guarda corpo de vidro na minha varanda e o resultado superou as expectativas. Ficou seguro, resistente e visualmente leve. A instalação foi rápida e muito bem feita!
                                </div>
                            </div>
                        </Card>
                        <Card className={`${styles.card} ${styles.reviewCard}`}>
                            <div className={styles.header}>Feedback de Cliente</div>
                            <div className={styles.body}>
                                <img src="/images/people/model1.avif" alt="" />
                                <div className={styles.name}>Mariana Lopes</div>
                                <div className={styles.review}>
                                    Instalei a Versatik Division no meu escritório e o resultado ficou incrível. A LiderFlex foi super atenciosa do início ao fim — acabamento perfeito, sem sujeira e entrega dentro do prazo. Deu um toque moderno ao ambiente!
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
                                <img src="/images/people/model2.jpeg" alt="" />
                                <div className={styles.name}>Thiago Moreira</div>
                                <div className={styles.review}>
                                    A Slide Door que pedi ficou perfeita. Tudo sob medida e com acabamento de alto padrão. A LiderFlex entregou antes do prazo e ainda deixou o local totalmente limpo depois da instalação.
                                </div>
                            </div>
                        </Card>
                        <Card className={`${styles.card} ${styles.reviewCard}`}>
                            <div className={styles.header}>Feedback de Cliente</div>
                            <div className={styles.body}>
                                <img src="/images/people/model4.png" alt="" />
                                <div className={styles.name}>Juliana Prado</div>
                                <div className={styles.review}>
                                    Escolhi a porta pivotante de vidro da LiderFlex e foi uma das melhores decisões. Ficou sofisticada, resistente e o encaixe é impecável. Dá pra ver que trabalham com materiais de qualidade.
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