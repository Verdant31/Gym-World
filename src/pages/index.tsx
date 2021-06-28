import Head from 'next/head';

import { Section } from "../components/Section";
import { DayWorkout } from '../components/DayWorkout';
import { DayVideo } from '../components/DayVideo';

import { GetStaticProps } from 'next';
import { getPrismicClient } from '../services/prismic';



export default function Home({ post }) {

  return (
    <>
      <Head>
        <title>Home | GymWorld</title>
      </Head>
      <Section />
      <DayWorkout post={post} />
      <DayVideo />
    </>

  )
}

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient();


  const response = await prismic.getByUID('trainingday', 'treino-do-dia-peitoral', {})

  const post = {
    excerpt: response.data.content.find(content => content.type === 'paragraph')?.text ?? '',
  }
  return {
    props: {
      post,
    }
  }
}

