import { useScrollY } from '../../Contexts/ScrollContext'
import styles from './styles.module.scss'
import { NavLink } from 'react-router-dom'

// Icons

import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
    const scrollY = useScrollY()

    return (
        <div className={styles.container}>
            <a href="" className={styles.button}><FaWhatsapp /></a>
            <div className={`${styles.pulse}`}></div>
        </div>
    )
}