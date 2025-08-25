import { useScrollY } from '../../Contexts/ScrollContext'
import Logo from '../Logo/Logo'
import styles from './styles.module.scss'
import { NavLink } from 'react-router-dom'

import { FaPhone, FaInstagram, FaFacebookF } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";

export default function Footer(props) {
  const scrollY = useScrollY()

  return (
    <footer className={styles.footer} data-service={props.dataService ? props.dataService : ""}>
      <div className={styles.logoContainer}>
        <Logo />
        <div className={styles.socialMediaContainer}>
          <a href='https://www.instagram.com/liderflexvidros?igsh=MWtzOWttYW5naHhwcA==' target="_blank" className={styles.socialMediaButton}>
            <FaInstagram />
          </a>
          {/* <a href='' className={styles.socialMediaButton}>
            <FaFacebookF />
          </a> */}
        </div>
      </div>
      <div className={styles.infos}>
        <div>
          <div className={styles.subtitle}>
            Contato:
          </div>
          <div className={styles.content}>
            <FaPhone />(31)33326321
          </div>
          <div className={styles.content}>
            <FaPhone />(31)83530217
          </div>
          <div className={styles.content}>
            <IoIosMail style={{fontSize: "1.1rem"}} />liderflexvidros@liderflexvidros.com.br
          </div>
        </div>
        <div>
          <div className={styles.subtitle}>
            Endereço
          </div>
          <div className={styles.content}>
            Rua Doutor Álvaro Camargos, 2413, Loja 03 - Santa Mônica <br />
            CEP: 31.565-312 - Belo Horizonte - MG
          </div>
        </div>
        <div>
          <div className={styles.subtitle}>
            CNPJ
          </div>
          <div className={styles.content}>
            20.856.717/0001-47
          </div>
        </div>
      </div>
      <div className={styles.map}>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3753.270264579302!2d-43.97236898848771!3d-19.828514281460272!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa69026f8faaaab%3A0x8ff80b44df865db6!2sRua%20Dr.%20%C3%81lvaro%20Camargos%2C%202413%20-%2003%20-%20Santa%20Branca%2C%20Belo%20Horizonte%20-%20MG%2C%2031565-312!5e0!3m2!1spt-BR!2sbr!4v1753235159191!5m2!1spt-BR!2sbr" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </footer>
  )
}