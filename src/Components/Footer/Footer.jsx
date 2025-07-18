import { useScrollY } from '../../Contexts/ScrollContext'
import styles from './styles.module.scss'
import { NavLink } from 'react-router-dom'

export default function Footer(props) {
    const scrollY = useScrollY()

  return (
    <footer className={styles.footer} data-service={props.dataService ? props.dataService : ""}>
        
    </footer>
  )
}