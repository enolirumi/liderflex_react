import { useEffect, useState } from 'react'
import { useScrollY } from '../../Contexts/ScrollContext'
import styles from './styles.module.scss'
import { NavLink } from 'react-router-dom'

export default function HomeSection(props) {
    const scrollY = useScrollY()

    useEffect(() => {
    }, [])

    return (
        <div className={styles.container}>
            <div className={styles.contentContainer}>
                <h3>{props.title}</h3>
                <p>{props.description}</p>
                <NavLink to={`/contato`} className={`${styles.ctaMainButton}`}>Solicite um orçamento</NavLink>
                <div className={styles.imagesContainer}>
                    {props.images.map(image => {
                        return(
                            <img src={image.imagePath} key={image.id} alt="" />
                        )
                    })}
                </div>
            </div>
        </div>
    )
}