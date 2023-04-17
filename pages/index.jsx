import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Articles.module.scss';
import { useEffect, useState } from 'react';

const isDevelopmentEnvironment = process.env.NODE_ENV !== 'production'
const server = isDevelopmentEnvironment ? 'http://localhost:3000/' : 'https://nickl-dev-simple-news.vercel.app/'

export const getServerSideProps = async () => {
  const response = await fetch(`${server}api/articles`);
  const articles = await response.json();

  return { props: { articles } }
}

const Articles = ({ articles }) => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    setDate(new Date());
  }, [])

  return (
    <>
      {/* Meta data */}
      <Head>
        <title>{process.env.NEXT_PUBLIC_SITE_TITLE}</title>
        <meta name='description' content={process.env.NEXT_PUBLIC_SITE_DESCRIPTION} />
        <link rel='icon' href='/favicon.png' />
        <meta property='og:type' content='Website' />
        <meta property='og:title' content={process.env.NEXT_PUBLIC_SITE_TITLE} />
        <meta property='og:description' content={process.env.NEXT_PUBLIC_SITE_DESCRIPTION} />
        <meta property='og:image' content='/favicon.png' />
        <meta property='og:url' content={process.env.NEXT_PUBLIC_SITE_URL} />
        <meta property='og:site_name' content={process.env.NEXT_PUBLIC_SITE_URL} />
      </Head>


      <main>
        <section>
          <h1 className='font-georgia font-semibold text-md md:text-lg lg:text-xl'>
            Today is {date.toLocaleDateString('en-US', { weekday: 'long' })}, {date.toLocaleString('default', { month: 'long' })} {date.getUTCDate()}, {date.getUTCFullYear()}
          </h1>
        </section>

        {/* News articles */}
        <div className={styles.grid}>
          {articles.map((article) => {
            return (
              <Link key={article.uuid} href={`/article/${article.uuid}`}>
                <article key={article.uuid} className={styles.article}>
                  <h2 className={styles.title}>{article.title}</h2>
                  <p className='text-center text-sm	mt-1'>{article.description}</p>
                  <Image
                    className='mt-2 mx-auto rounded'
                    alt={article.title}
                    src={article.urlToImage || process.env.NEXT_PUBLIC_ARTICLE_PLACEHOLDER_IMAGE}
                    width={200}
                    height={200}
                  />
                </article>
              </Link>
            );
          })}
        </div>
      </main>
    </>
  );
}

export default Articles;
