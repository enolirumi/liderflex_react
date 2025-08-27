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
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique dolorem excepturi deserunt, enim, natus architecto eveniet itaque, voluptate deleniti corporis quis vel magnam rerum? Libero eligendi rerum labore vel nisi.</p>
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