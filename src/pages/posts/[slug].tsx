import { GetServerSideProps } from 'next'
import { getPrismicClient } from '../../services/prismic';
import styles from './post.module.scss';
import Head from 'next/head';
import { RichText } from 'prismic-dom';

interface Post {
  slug: string;
  title: string;
  content: string;
  updatedAt: string;
}

interface PostProps {
  post: Post;
}
export default function Post({ post }: PostProps) {
  return (
    <>
      <Head>
        <title>{post.title} | GymWorld</title>
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
export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { slug } = params;

  const prismic = getPrismicClient();

  const response = await prismic.getByUID('pos', String(slug), {})

  const post = {
    slug,
    title: RichText.asText(response.data.title),
    content: RichText.asHtml(response.data.content),
    updatedAt: new Date(response.last_publication_date).toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: 'long',
      year: 'numeric'
    }),

  }

  return {
    props: {
      post
    }
  }
}