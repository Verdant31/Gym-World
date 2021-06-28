import { GetStaticProps } from 'next';
import { getPrismicClient } from '../../services/prismic';
import { RichText } from 'prismic-dom';
import Head from 'next/head';
import styles from './styles.module.scss';


interface PostProps {
  post: {
    title: string;
    updatedAt: string;
    content: string;
  }
}



export default function DayTraining({ post }: PostProps) {
  console.log(post);
  return (
    <>
      <Head>
        <title>Treino do dia | GymWorld</title>
      </Head>

      <main className={styles.container}>
        <article className={styles.post}>
          <h1>{post.title}</h1>
          <time>{post.updatedAt}</time>
          <div
            className={styles.postContent}
            dangerouslySetInnerHTML={{ __html: post.content }}
          >
          </div>
        </article>
      </main>
    </>
  )
}


export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient();


  const response = await prismic.getByUID('trainingday', 'treino-do-dia-peitoral', {})

  const post = {
    title: RichText.asText(response.data.title),
    content: RichText.asHtml(response.data.content),
    updatedAt: new Date(response.last_publication_date).toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: 'long',
      year: 'numeric',
    })
  }

  return {
    props: {
      post,
    }
  }
}