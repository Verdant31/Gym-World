import styles from './home.module.scss';
import { Section } from "../components/Section";
import { DayWorkout } from '../components/DayWorkout';
import { Cards } from '../components/Cards';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | GymWorld</title>
      </Head>
      
      <Section />
      <DayWorkout />
      <Cards />
      <footer className={styles.baseboard}>
      </footer>
    </>
  )
}
