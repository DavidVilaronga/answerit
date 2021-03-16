import { useContext } from 'react'
import { AsksContext } from '../contexts/AsksContext'
import styles from '../styles/components/ExperienceBar.module.css'

export function ExperienceBAr() {
	const {currentExperience, experienceToNextLevel} = useContext(AsksContext)

	const percentToNextLevel = Math.round(currentExperience * 100) / experienceToNextLevel

    return(
        <header className={styles.experienceBar}>
			<span style={{ font: '2rem' }}>0 xp</span>
			<div>
				<div style={{ width: `${percentToNextLevel}%` }} />
				<span className={styles.currentExperience} style={{ left: `${percentToNextLevel}%` }}>
					{currentExperience} xp
				</span>
			</div>
			<span>{experienceToNextLevel} xp</span>
		</header>
    )
}