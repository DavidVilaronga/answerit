import { useContext } from 'react'
import { AsksContext } from '../contexts/AsksContext'
import styles from '../styles/components/LevelUpModal.module.css'

export function LevelUpModal() {
    const { level, levelUpModalClose } = useContext(AsksContext)

    return(
        <div className={styles.overlay}>
            <div className={styles.container}>
                <header>{level}</header>
                <strong>Parabéns!</strong>
                <p>Você alcançou um novo nível!</p>
                <button type="button" onClick={levelUpModalClose}>Yes!</button>
            </div>
        </div>
    )
}