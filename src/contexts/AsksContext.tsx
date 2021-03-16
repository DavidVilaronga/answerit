import { Children, createContext, ReactNode, useEffect, useState } from 'react'
import asks from '../../asks.json'
import { CorrectAnswerModal } from '../components/CorrectAnswerModal'
import { JumpAskModal } from '../components/JumpAskModal'
import { WrongAnswerModal } from '../components/WrongAnswerModal'
import { LevelUpModal } from '../components/LevelUpModal'

interface Ask {
    ask: string;
    amount: number;
    answer1: string;
    answer2: string;
    answer3: string;
    answer4: string;
    correctAnswer: string;
}

interface AskContextData {
    level: number;
    currentExperience: number
    experienceToNextLevel: number;
    activeAsk: Ask;
    wrongCount: number;
    jumpCount: number;
    levelUp: () => void;
    levelUpModalClose: () => void;
    startNewAsk: () => void;
    correctAnswer: () => void;
    correctAnswerClose: () => void;
    JumpAsk: () => void;
    backAsk: () => void;
    confirmJumpAsk: () => void;
    checkAnswer: () => void;
    wrongAnswer: () => void;
    closeWrongAnswerModal: () => void;
    restartGame: () => void;
}

interface AsksProviderProps {
    children: ReactNode;
}

export const AsksContext = createContext({} as AskContextData)

export function AsksProvider({children}: AsksProviderProps) {
    const [level, setLevel] = useState(1)
    const [currentExperience, setCurrentExperience] = useState(0)

    const experienceToNextLevel = Math.pow((level + 1) * 4, 2)

    const [activeAsk, setActiveAsk] = useState(null)
    const [isJumpAskModalOpen, setIsJumpAskModalOpen] = useState(false)
    const [correctAnswerModalOpen, setCorrectAnswerModalOpen] = useState(false)
    const [jumpCount, setJumpCount] = useState(3)
    const [isWrongAnserModalOpen, setIsWrongAnswerModalOpen] = useState(false)
    const [wrongCount, setWrongCount] = useState(3)
    const [levelUpModalOpen, setLevelUpModalOpen] = useState(false)

    function levelUp() {
        setLevel(level + 1)
        setLevelUpModalOpen(true)
        setCorrectAnswerModalOpen(false)
    }

    function levelUpModalClose() {
        setLevelUpModalOpen(false)
    }

    function JumpAsk() {
        setIsJumpAskModalOpen(true);
    }

    function correctAnswer() {
        setCorrectAnswerModalOpen(true)
    }

    function correctAnswerClose() {
        setCorrectAnswerModalOpen(false)
    }

    function startNewAsk() {
        const randomAskIndex = Math.floor(Math.random() * asks.length)
        const ask = asks[randomAskIndex]

        setActiveAsk(ask)
    }

    function checkAnswer() {
        if (!activeAsk) {
            return;
        }
        const {amount} = activeAsk

        let finalExperience = currentExperience + amount;

        if (finalExperience >= experienceToNextLevel) {
            finalExperience = finalExperience - experienceToNextLevel;
            levelUp();
        }

        setCurrentExperience(finalExperience)
        setActiveAsk(null)
    }

    function wrongAnswer() {
        setWrongCount(wrongCount - 1)
        setIsWrongAnswerModalOpen(true)
    }

    function closeWrongAnswerModal() {
        setIsWrongAnswerModalOpen(false)
    }

    function restartGame() {
        setActiveAsk(null)
        closeWrongAnswerModal()
        setWrongCount(3)
        setLevel(1)
        setCurrentExperience(0)
        setJumpCount(3)
    }

    function backAsk(){
        setIsJumpAskModalOpen(false)
    }

    function confirmJumpAsk() {
        setJumpCount(jumpCount - 1)
        startNewAsk();
        setIsJumpAskModalOpen(false);
    }

    return(
        <AsksContext.Provider
            value={{
                level,
                currentExperience,
                experienceToNextLevel,
                jumpCount,
                wrongCount,
                levelUp,
                levelUpModalClose,
                startNewAsk,
                correctAnswer,
                correctAnswerClose,
                activeAsk,
                checkAnswer,
                wrongAnswer,
                closeWrongAnswerModal,
                restartGame,
                JumpAsk,
                backAsk,
                confirmJumpAsk,
            }}
        >
            {children}
            { isJumpAskModalOpen && <JumpAskModal/> }
            { isWrongAnserModalOpen && <WrongAnswerModal/>}
            { correctAnswerModalOpen && <CorrectAnswerModal/>}
            { levelUpModalOpen && <LevelUpModal/>}
        </AsksContext.Provider>
    )
}