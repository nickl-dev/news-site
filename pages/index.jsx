import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Home.module.scss';

export const getStaticProps = async () => {
  const response = await fetch(`${process.env.API_BASE_URL}top?api_token=${process.env.API_TOKEN}&locale=co`);
  const { data } = await response.json();

  return { props: { articles: data } }
}

const Articles = ({ articles }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>{process.env.NEXT_PUBLIC_SITE_TITLE}</title>
        <meta
          name="description"
          content={process.env.NEXT_PUBLIC_SITE_DESCRIPTION}
        />
        {/* <link rel="icon" href="/favicon.png" /> */}
        <link rel="icon" href="https://www.countryflags.com/wp-content/uploads/colombia-flag-png-xl.png" />
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
        <h1 className={styles.title}>Noticias Colombianas</h1>

        <div className={styles.grid}>
          {articles.map((article) => {
            return (
              <Link key={article.uuid} href={`/article/${article.uuid}`}>
                <article key={article.uuid} className={styles.article}>
                  <h2 className="block">{article.title}</h2>
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

export default Articles;
