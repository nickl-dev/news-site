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
          <h1 className='font-extrabold text-md text-2xl text-gray-300'>
            {date.toLocaleString('default', { month: 'long' })} {date.getUTCDate()}, {date.getUTCFullYear()}
          </h1>
        </section>

        <section>
          <h2 className='font-extrabold text-md text-2xl text-red'>
            Top Stories
          </h2>
        </section>

        {/* News articles */}
        <div className={styles.grid}>
          {articles.map((article) => {
            return (
              <Link key={article.uuid} href={`/article/${article.uuid}`}>
                <article key={article.uuid} className={styles.article}>
                  <div className=''>
                    <Image
                      className='object-contain'
                      alt={article.title}
                      src={article.urlToImage || process.env.NEXT_PUBLIC_ARTICLE_PLACEHOLDER_IMAGE}
                      width={200}
                      height={200}
                    />
                  </div>

                  <h3 className={styles.title}>{article.title}</h3>
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
