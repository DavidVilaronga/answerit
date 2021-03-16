import { useContext } from 'react'
import { AsksContext } from '../contexts/AsksContext'
import styles from '../styles/components/Profile.module.css'

export function Profile() {
    const {level, wrongCount, jumpCount} = useContext(AsksContext)

    return (
        <div className={styles.profileContainer}>
            <img src="icons/level.svg" alt="David Vilaronga"/>
            <p>Level {level}</p>
            <strong>Erros: {wrongCount}</strong>
            <strong>Pulos: {jumpCount}</strong>
        </div>
    )
}