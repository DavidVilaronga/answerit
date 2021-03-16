import { useContext } from 'react'
import { AsksContext } from '../contexts/AsksContext'
import styles from '../styles/components/CorrectAnswerModal.module.css'

export function CorrectAnswerModal() {
    const {correctAnswerClose} = useContext(AsksContext);

    return(
        <div className={styles.overlay}>
            <div className={styles.container}>
                <h1>Certa Resposta!</h1>
                <div className={styles.yesButton}>
                    <button style={{width: '100%'}}
                        onClick={correctAnswerClose}
                    >Yes!</button>
                </div>
            </div>
        </div>
    )
    
}