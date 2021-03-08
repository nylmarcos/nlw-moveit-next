import { ExperienceBar } from '../components/ExperienceBar';
import { Profile } from '../components/Profile';
import { CompleteChallenges } from '../components/CompleteChallenges';
import { Countdown } from '../components/Countdown';
import { ChallengeBox } from '../components/ChallengeBox';

import { GetServerSideProps } from 'next';

import { CountdownProvider } from '../contexts/CountdownContext';

import Head from 'next/head';
import styles from '../styles/pages/Home.module.css';
import { ChallengesProvider } from '../contexts/ChallengesContext';

interface HomeProps {
  level: number,
  currentExperience: number,
  challendesCompleted: number
}

export default function Home(props: HomeProps) {
  return (
    <ChallengesProvider 
      level={props.level}
      currentExperience={props.currentExperience}
      challendesCompleted={props.challendesCompleted}>
      <div className={styles.container}>
        <Head>
          <title>Início | move it</title>
        </Head>
        <ExperienceBar />

        <CountdownProvider>
          <section>
            <div>
              <Profile />
              <CompleteChallenges />
              <Countdown />
            </div>
            <div>
              <ChallengeBox />
            </div>
          </section>
          </CountdownProvider>
      </div>  
    </ChallengesProvider>
  )
}

export const getServerSideProps:GetServerSideProps = async (ctx) => {
  const { level, currentExperience, challendesCompleted } = ctx.req.cookies;
  
  return {
    props: {
      level: Number(level),
      currentExperience: Number(currentExperience),
      challendesCompleted: Number(challendesCompleted)
    }
  }
}