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
            <FaPhone />(31) 3332-6321
          </div>
          <div className={styles.content}>
            <FaPhone />(31) 98629-6556
          </div>
          <div className={styles.content}>
            <IoIosMail style={{ fontSize: "1.1rem" }} />liderflex@liderflexvidros.com.br
          </div>
        </div>
        <div>
          <div className={styles.subtitle}>
            Endereço
          </div>
          <div className={styles.content}>
            Rua Eduardo Prado, 87, Loja 08 – Gutierrez <br />
            CEP: 30.430-240 – Belo Horizonte – MG

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
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3750.707455158436!2d-43.96239932396772!3d-19.936729038519648!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa69773863bd13f%3A0xcd72c4310a9b233a!2sR.%20Eduardo%20Prado%2C%2087%20-%20Gutierrez%2C%20Belo%20Horizonte%20-%20MG%2C%2030441-130!5e0!3m2!1spt-BR!2sbr!4v1761059929677!5m2!1spt-BR!2sbr" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </footer>
  )
}