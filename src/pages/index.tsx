import Head from 'next/head'
import { AskBox } from '../components/AskBox'
import { ExperienceBAr } from '../components/ExperienceBar'
import { Profile } from '../components/Profile'
import { AsksProvider } from '../contexts/AsksContext'
import styles from '../styles/pages/Home.module.css'

export default function Home() {
  return (
    <AsksProvider>
      <div className={styles.container}>
        <Head>
          <title>Início | aswerit</title>
        </Head>

        <ExperienceBAr />
        <Profile />
        <AskBox />
      </div>
    </AsksProvider>
  )
}
