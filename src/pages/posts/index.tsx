import styles from './styles.module.scss';
import Head from 'next/head';
import { GetStaticProps  } from 'next';
import { getPrismicClient } from '../../services/prismic';
import Prismic from '@prismicio/client'
import Link from 'next/link';
import { RichText } from 'prismic-dom';

interface Post {
    slug: string;
    date: string | null;
    title: string;
    excerpt: string;
  }

interface PostsProps {
    posts: Post[]
}

export default function Posts({posts}: PostsProps) {
    return (
        <>
            <Head>
                <title>Articles | GymWorld</title>
            </Head>

            <main className={styles.container}>
                <div className={styles.posts}>
                    {posts.map(post => (
                        <Link href={`/posts/${post.slug}`}>
                            <a key={post.slug}>
                                <time>{post.date}</time>
                                <strong>{post.title}</strong>
                                <p>{post.excerpt}</p>
                            </a>
                        </Link>
                    ))}
                </div>
            </main>
        </>
    )
}

export const getStaticProps: GetStaticProps = async () => {
    const prismic = getPrismicClient();

    const response = await prismic.query([
        Prismic.predicates.at('document.type', 'pos')
    ])
    const posts = response.results.map(post => {
        return {
            slug: post.uid,
            title: RichText.asText(post.data.title),
            date: new Date(post.first_publication_date).toLocaleDateString('pt-BR', {
                day: '2-digit',
                month: 'long',
                year: 'numeric'
              
            }),
            excerpt: RichText.asText(post.data.subtitle)
        }
    })

    console.log(JSON.stringify(posts, null, 2))


    return {
        props: {
            posts,
        }
    }
}