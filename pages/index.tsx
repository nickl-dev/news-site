import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

import { useState } from 'react';
import styles from '../styles/Home.module.scss';

export async function getServerSideProps() {
  const response = await fetch(
    `${process.env.API_URL}top-headlines?country=us&apiKey=${process.env.API_KEY}`
  );

  const { articles } = await response.json();

  console.log(articles);

  return {
    props: {
      timestamp: Date.now(),
      articles,
    },
  };
}

export default function Home({ timestamp, articles }) {
  const [searchQuery, setSearchQuery] = useState('top-headlines');
  const [results, setResults] = useState([]);

  return (
    <div className={styles.container}>
      <Head>
        <title>{process.env.NEXT_PUBLIC_SITE_TITLE}</title>
        <meta
          name="description"
          content={process.env.NEXT_PUBLIC_SITE_DESCRIPTION}
        />
        <link rel="icon" href="/favicon.png" />
        <meta property="og:type" content="Website" />
        <meta
          property="og:title"
          content={process.env.NEXT_PUBLIC_SITE_TITLE}
        />
        <meta
          property="og:description"
          content={process.env.NEXT_PUBLIC_SITE_DESCRIPTION}
        />
        <meta property="og:image" content="/assets/images/favicon.png" />
        <meta property="og:url" content={process.env.NEXT_PUBLIC_SITE_URL} />
        <meta
          property="og:site_name"
          content={process.env.NEXT_PUBLIC_SITE_URL}
        />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>News Site</h1>

        <span className="font-semibold">{timestamp}</span>

        <div className={styles.grid}>
          {articles.map((article: any, index: number) => {
            return (
              <Link key={index} href="/article/1">
                <article key={index} className={styles.article}>
                  <span className="block">{article.title}</span>
                  <span className="block">{article.publishedAt}</span>
                </article>
              </Link>
            );
          })}
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image
              src="/assets/images/vercel.svg"
              alt="Vercel Logo"
              width={72}
              height={16}
            />
          </span>
        </a>
      </footer>
    </div>
  );
}
