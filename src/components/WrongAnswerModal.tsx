import { useContext } from 'react'
import { AsksContext } from '../contexts/AsksContext'
import styles from '../styles/components/WrongAnswerModal.module.css'

export function WrongAnswerModal() {
    const {wrongCount, startNewAsk, closeWrongAnswerModal, restartGame } = useContext(AsksContext)

    function clickOkWrongModal() {
        closeWrongAnswerModal();
        startNewAsk();
    }

    function clickOkWrongModalRestart() {
        restartGame()
    }

    return(
        <div>
            { wrongCount===1 ? (
                <div className={styles.overlay}>
                    <div className={styles.container}>
                        <h1>Você errou! :(</h1>
                        <h2>Cuidado! Você só tem mais uma chance!</h2>
                        <button onClick={clickOkWrongModal}>Ok</button>
                    </div>
                </div>
            ) : ( wrongCount===0 ? (
                <div className={styles.overlay}>
                    <div className={styles.container}>
                        <h1>Você errou! :(</h1>
                        <h2>Tente novamente!</h2>
                        <button onClick={clickOkWrongModalRestart}>Ok</button>
                    </div>
                </div>
            ) : (
                <div className={styles.overlay}>
                    <div className={styles.container}>
                        <h1>Você errou! :(</h1>
                        <h2>Te restam apenas {wrongCount} erros</h2>
                        <button onClick={clickOkWrongModal}>Ok</button>
                    </div>
                </div>
            ))}
        </div>
    )
}