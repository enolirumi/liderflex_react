import React, { useEffect, useState, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './style.module.scss';

import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import HomeSection from '../../Components/HomeSection/HomeSection';
import WhatsAppButton from '../../Components/WhatsAppButton/WhatsAppButton';
import debounce from 'lodash.debounce';
import throttle from 'lodash.throttle';

export default function Home() {

    const [service, setService] = useState(1)
    const sectionsRef = useRef({});

    useEffect(() => {
        const root = document.getElementById(styles.homeContainer);
        const body = document.body
        if (root) root.classList.add(styles.rootCustom);
        if (body) body.classList.add(styles.bodyCustom);

        const handleScroll = debounce(() => {
            const sectionAtual = document.querySelector(`section[data-service="${service}"], main[data-service="${service}"]`)

            if (sectionAtual) {
                setService((sectionAtual.getBoundingClientRect().top / sectionAtual.clientHeight).toFixed(0) * -1 + 1)
            }
        }, 100)

        root.addEventListener("scroll", handleScroll)

        document.querySelectorAll('section[data-service], main[data-service], footer[data-service]').forEach(el => {
            const id = el.dataset.service;
            sectionsRef.current[id] = el;
        });

        return () => {
            if (root) root.classList.remove(styles.rootCustom);
            if (body) body.classList.remove(styles.bodyCustom);
            root.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        const sectionAtual = document.querySelector(`section[data-service="${service}"], main[data-service="${service}"]`)
        const aside = document.querySelector("aside")
        
        if (aside.style.display != "none") { // Parou aqui
            
        }
    }, [service])

    const changeSection = (ev) => {
        const value = ev.currentTarget.dataset.service;
        setService(Number(value));

        const target = sectionsRef.current[value];
        const root = document.getElementById(styles.homeContainer);

        if (target && root) {
            root.scrollTo({
                top: target.offsetTop,
                behavior: 'smooth'
            });
        }
    };

    const services = [
        {
            infos: {
                id: 2,
                title: `Porta Pivotante`,
            },
            backgroundStyle: {
                background: `
                    linear-gradient(180deg, rgba(0, 0, 0, 1), rgba(0, 0, 0, .7), rgba(0, 0, 0, .7)),
                    linear-gradient(90deg, rgba(0, 0, 0, .8), rgba(0, 0, 0, 0), rgba(0, 0, 0, .4)),
                    url('/images/Home/porta_pivotante.jpg')
                `,
                backgroundAttachment: `fixed`,
                backgroundSize: `cover`,
                backgroundRepeat: `no-repeat`,
                backgroundPosition: `center center`,
            }
        },
        {
            infos: {
                id: 3,
                title: `Versatik Division`,
            },
            backgroundStyle: {
                background: `
                    linear-gradient(180deg, rgba(0, 0, 0, 1), rgba(0, 0, 0, .7), rgba(0, 0, 0, .7)),
                    linear-gradient(90deg, rgba(0, 0, 0, .8), rgba(0, 0, 0, 0), rgba(0, 0, 0, .4)),
                    url('/images/Home/versatik _division.jpg')
                `,
                backgroundAttachment: `fixed`,
                backgroundSize: `cover`,
                backgroundRepeat: `no-repeat`,
                backgroundPosition: `center center`,
            }
        },
        {
            infos: {
                id: 4,
                title: `Slide door`,
            },
            backgroundStyle: {
                background: `
                    linear-gradient(180deg, rgba(0, 0, 0, 1), rgba(0, 0, 0, .7), rgba(0, 0, 0, .7)),
                    linear-gradient(90deg, rgba(0, 0, 0, .8), rgba(0, 0, 0, 0), rgba(0, 0, 0, .4)),
                    url('/images/Home/slide_door.jpg')
                `,
                backgroundAttachment: `fixed`,
                backgroundSize: `cover`,
                backgroundRepeat: `no-repeat`,
                backgroundPosition: `center center`,
            }
        },
        {
            infos: {
                id: 5,
                title: `Guarda Corpo`,
            },
            backgroundStyle: {
                background: `
                    linear-gradient(180deg, rgba(0, 0, 0, 1), rgba(0, 0, 0, .7), rgba(0, 0, 0, .7)),
                    linear-gradient(90deg, rgba(0, 0, 0, .8), rgba(0, 0, 0, 0), rgba(0, 0, 0, .4)),
                    url('/images/Home/guarda_corpo.jpg')
                `,
                backgroundAttachment: `fixed`,
                backgroundSize: `cover`,
                backgroundRepeat: `no-repeat`,
                backgroundPosition: `center center`,
            }
        },
    ]

    return (
        <>
            <div className={styles.homeContainer} id={styles.homeContainer}>
                <Header />
                <WhatsAppButton />
                <aside>
                    <ul>
                        {/* <li key={1} data-service={`1`} className={`${styles.serviceItemMenu} ${service == 1 ? styles.active : ""}`} onClick={ev => changeSection(ev)}><h1 className={`${styles.logo} logo`}>LÍDER<span>FLEX</span></h1></li> */}
                        <h3>Nossos serviços</h3>
                        {
                            services.map(serviceElement => {
                                return (
                                    <li key={serviceElement.infos.id} data-service={`${serviceElement.infos.id}`} className={`${styles.serviceItemMenu} ${styles.advanced} ${service == serviceElement.infos.id ? styles.active : ""}`} onClick={ev => changeSection(ev)}>{serviceElement.infos.title}</li>
                                )
                            })
                        }
                        <li key={services.length + 2} data-service={services.length + 2} className={`${styles.serviceItemMenu} ${service == services.length + 2 ? styles.active : ""}`} onClick={ev => changeSection(ev)}>Informações</li>
                    </ul>
                </aside>
                <main data-service="1">
                    <div className={styles.contentMain}>
                        <h1 className={`${styles.logo} logo`}>LÍDER<span>FLEX</span></h1>
                        <div className={styles.descriptionMain}>
                            Transparência <br />
                            é mais do que apenas estilo <br />
                            <div>Soluções em vidros para qualquer circunstância</div>
                        </div>
                        <NavLink to={`/contato`} className={`${styles.ctaMainButton}`}>Faça um orçamento</NavLink>
                    </div>
                </main>
                {
                    services.map(serviceElement => {
                        return (
                            <section key={serviceElement.infos.id} data-service={`${serviceElement.infos.id}`} style={serviceElement.backgroundStyle}>
                                <HomeSection></HomeSection>
                            </section>
                        )
                    })
                }
                <Footer dataService={services.length + 2}></Footer>
            </div>
        </>
    );
}