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

        </div>
    )
}