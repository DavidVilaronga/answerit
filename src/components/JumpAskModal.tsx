import { useContext } from 'react'
import { AsksContext } from '../contexts/AsksContext'
import styles from '../styles/components/JumpAskModal.module.css'

export function JumpAskModal() {
    const { backAsk, confirmJumpAsk, jumpCount } = useContext(AsksContext)

    return(
        <div>
        { jumpCount===0 ? (
            <div className={styles.overlay}>
                <div className={styles.container}>
                    <h1>Você não pode mais pular!</h1>
                    <div className={styles.buttonJumpZero}>
                        <button style={{width: '100%'}}
                            onClick={backAsk}
                        >ok</button>
                    </div>
                </div>
            </div>
        ) : (
            <div className={styles.overlay}>
                <div className={styles.container}>
                    { jumpCount===1 ? (
                        <h1>Você tem {jumpCount} pulo...</h1>) : (
                        <h1>Você tem {jumpCount} pulos...</h1>)}
                    <h2>Tem certeza que quer pular a pergunta?</h2>
                    <div className={styles.buttonJump}>
                        <button 
                            onClick={confirmJumpAsk}
                        >Sim</button>
                        <button
                            onClick={backAsk}
                        >Não</button>
                    </div>
                </div>
            </div>
        )}

        </div>
        
    )
}