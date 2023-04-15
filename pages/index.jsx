import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Articles.module.scss';

const isDevelopmentEnvironment = process.env.NODE_ENV !== 'production'
const server = isDevelopmentEnvironment ? 'http://localhost:3000/' : process.env.NEXT_PUBLIC_SITE_URL

export const getStaticProps = async () => {
  const response = await fetch(`${server}api/articles`);
  const articles = await response.json();

  return { props: { articles } }
}

const Articles = ({ articles }) => {
  return (
    <div className={styles.container}>
      {/* Meta data */}
      <Head>
        <title>{process.env.NEXT_PUBLIC_SITE_TITLE}</title>
        <meta name="description" content={process.env.NEXT_PUBLIC_SITE_DESCRIPTION} />
        <link rel="icon" href="/favicon.png" />
        <meta property="og:type" content="Website" />
        <meta property="og:title" content={process.env.NEXT_PUBLIC_SITE_TITLE} />
        <meta property="og:description" content={process.env.NEXT_PUBLIC_SITE_DESCRIPTION} />
        <meta property="og:image" content="/favicon.png" />
        <meta property="og:url" content={process.env.NEXT_PUBLIC_SITE_URL} />
        <meta property="og:site_name" content={process.env.NEXT_PUBLIC_SITE_URL} />
      </Head>

      {/* News articles */}
      <main className={styles.main}>
        <h1 className={styles.title}>{process.env.NEXT_PUBLIC_SITE_TITLE}</h1>

        <div className={styles.grid}>
          {articles.map((article) => {
            return (
              <Link key={article.uuid} href={`/article/${article.uuid}`}>
                <article key={article.uuid} className={styles.article}>
                  <h2 className="text-lg">{article.title}</h2>
                  <span className="block">{article.snippet || article.description}</span>
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
          Por
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

export default Articles;
