import { useScrollY } from '../../Contexts/ScrollContext'
import styles from './styles.module.scss'
import { NavLink } from 'react-router-dom'

export default function Header() {
    const scrollY = useScrollY()

  return (
    <header className={`${styles.header} ${scrollY > 0 ? styles.scrolled : ''}`}>
        <NavLink to="/">
            <h1 className={`${styles.logo} logo`}>LÍDER<span>FLEX</span></h1>
        </NavLink>
        <nav>
            <NavLink to="/" className={({ isActive }) => `${styles.navElement} ${isActive ? styles.activeLink : styles.link}`}>
                Início
            </NavLink>
            <NavLink to="/sobre" className={({ isActive }) => `${styles.navElement} ${isActive ? styles.activeLink : styles.link}`}>
                A LíderFlex
            </NavLink>
            <NavLink to="/duvidas" className={({ isActive }) => `${styles.navElement} ${isActive ? styles.activeLink : styles.link}`}>
                Dúvidas
            </NavLink>
        </nav>
        <a href='' className={styles.ctaBtn}>Faça um orçamento</a>
    </header>
  )
}