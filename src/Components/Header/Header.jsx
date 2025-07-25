import { useEffect, useRef, useState } from 'react'
import { useScrollY } from '../../Contexts/ScrollContext'
import styles from './styles.module.scss'
import { NavLink } from 'react-router-dom'

import Logo from '../Logo/Logo';

import debounce from 'lodash.debounce';
import throttle from 'lodash.throttle';

export default function Header(props) {

    const [mobileMenu, setMobileMenu] = useState(false)
    const href = window.location.href.split("/")

    const scrollY = useScrollY()

    return (
        <>
            <div className={`${styles.logoMobile}`}>{<Logo />}</div>
            <div className={`${styles.mobileButton} ${mobileMenu ? styles.openBtn : ''}`} onClick={() => mobileMenu ? setMobileMenu(false) : setMobileMenu(true)}></div>
            <header className={`${styles.header} ${scrollY > 0 ? styles.scrolled : ''} ${mobileMenu ? styles.open : ''}`}>
                <NavLink to="/">
                    {<Logo />}
                </NavLink>
                <nav>
                    <NavLink to="/" className={({ isActive }) => `${styles.navElement} ${isActive ? styles.activeLink : styles.link}`}>
                        Início
                    </NavLink>
                    <NavLink to="/sobre" className={({ isActive }) => `${styles.navElement} ${isActive ? styles.activeLink : styles.link}`}>
                        LíderFlex
                    </NavLink>
                    <NavLink to="/duvidas" className={({ isActive }) => `${styles.navElement} ${isActive ? styles.activeLink : styles.link}`}>
                        Dúvidas
                    </NavLink>
                    <NavLink to="/contato" className={({ isActive }) => `${styles.navElement} ${isActive ? styles.activeLink : styles.link}`}>
                        Contato
                    </NavLink>
                </nav>
                <NavLink to={`/contato`} className={`${styles.ctaBtn} ctaBtn`}>Faça um orçamento</NavLink>
                {/* ${(href[href.length - 1] == "" && props.scrollHome == 0) ? styles.none : ""} pra colocar no className acima caso necessário */}
            </header>
        </>
    )
}