import { useContext } from 'react';
import { AsksContext } from '../contexts/AsksContext';
import styles from '../styles/components/AskBox.module.css';

export function AskBox() {
    const { activeAsk, correctAnswer, startNewAsk, checkAnswer, wrongAnswer, JumpAsk } = useContext(AsksContext);

    function checkAnswerClic() {
        correctAnswer();
        checkAnswer();
        startNewAsk();
    }

    return (
        <div>
            { activeAsk ? (
                <div className={styles.askBoxAskContainer}>
                    <p>{activeAsk.ask}</p>
                    <div>
                        <span>
                            <button 
                                onClick={
                                    () => activeAsk.answer1===activeAsk.correctAnswer ? (checkAnswerClic()
                                    ) : (wrongAnswer()) }
                            >{activeAsk.answer1}</button>
                            <button 
                                onClick={
                                    () => activeAsk.answer2===activeAsk.correctAnswer ? (checkAnswerClic()
                                    ) : (wrongAnswer()) }
                            >{activeAsk.answer2}</button>
                            <button 
                                onClick={
                                    () => activeAsk.answer3===activeAsk.correctAnswer ? (checkAnswerClic()
                                    ) : (wrongAnswer()) }
                            > {activeAsk.answer3}</button>
                            <button 
                                onClick={
                                    () => activeAsk.answer4===activeAsk.correctAnswer ? (checkAnswerClic()
                                    ) : (wrongAnswer()) }
                            >{activeAsk.answer4}</button>
                        </span>
                        <button 
                        className={styles.askBoxButtonJump}
                        onClick={JumpAsk}
                        >
                            Pular pergunta
                        </button>
                    </div>
                </div>
            ) : (
                <div className={styles.askBoxContainer}>
                    <h1>Game de perguntas e respostas</h1>
                    <h2>Faça o máximo de pontos que puder</h2>
                    <button onClick={startNewAsk}>Iniciar</button>
                </div>
            )}
        </div>
    )
}