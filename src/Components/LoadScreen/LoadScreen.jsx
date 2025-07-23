import { useEffect } from 'react'
import { useScrollY } from '../../Contexts/ScrollContext'
import styles from './styles.module.scss'
import { NavLink } from 'react-router-dom'
import Logo from '../Logo/Logo'

export default function LoadScreen(props) {
    const scrollY = useScrollY()

    useEffect(() => {
        if(!props.loading) {
            setTimeout(() => {
                document.querySelector(`.${styles.container}`).remove()
            }, 2000)
        }
    }, [props.loading])

    return (
        <div className={`${styles.container} ${!props.loading ? styles.opening : ""}`}>
            <div className={`${styles.door1} ${styles.door} ${!props.loading ? styles.open : ""}`}></div>
            <div className={`${styles.door2} ${styles.door} ${!props.loading ? styles.open : ""}`}>
                <Logo/>
                <img src="/images/loading/progress-icon.jpg" alt="" />
            </div>
            <div className={`${styles.door3} ${styles.door} ${!props.loading ? styles.open : ""}`}></div>
        </div>
    )
}