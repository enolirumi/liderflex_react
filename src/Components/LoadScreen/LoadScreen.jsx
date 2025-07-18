import { useScrollY } from '../../Contexts/ScrollContext'
import styles from './styles.module.scss'
import { NavLink } from 'react-router-dom'

export default function LoadScreen() {
    const scrollY = useScrollY()

    return (
        <div className={styles.container}>
            
        </div>
    )
}