import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const isDevelopmentEnvironment = process.env.NODE_ENV !== 'production'
const server = isDevelopmentEnvironment ? 'http://localhost:3000/' : process.env.NEXT_PUBLIC_SITE_URL

export const getServerSideProps = async () => {
  const response = await fetch(`${server}api/articles`);
  const articles = await response.json();

  console.log(articles)

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


      <div className='pt-24 px-4 sm:px-6 md:px-8'>

        <section>
          <h1 className='inline font-extrabold tracking-tight text-2xl md:text-3xl	 text-gray-300'>
            {date.toLocaleString('default', { month: 'long' })} {date.getUTCDate()}, {date.getUTCFullYear()}
          </h1>

          <h2 className='font-extrabold tracking-tight text-2xl md:text-3xl	 text-red -mt-3'>
            Top Stories
          </h2>

          <h3 className='font-semibold text-gray-300 mt-3'>
            Chosen by the {process.env.NEXT_PUBLIC_SITE_TITLE} editors
          </h3>
        </section>



        {/* News articles */}
        <main className='mt-3 sm:mt-4 md:mt-5 grid gap-5 sm:grid-cols-2 md:grid-cols-4 min-h-screen'>
          {articles.map((article) => {
            return (
              <Link
                key={article.uuid}
                href={`/article/${article.uuid}`}
                className='bg-neutral-800 rounded max-w-sm'
              >
                <article>
                  <Image
                    alt={article.title}
                    src={article.urlToImage || process.env.NEXT_PUBLIC_ARTICLE_PLACEHOLDER_IMAGE}
                    width={0}
                    height={0}
                    sizes='100%'
                    style={{ width: '100%', height: 'auto' }}
                  />
                  <h3 className='text-base text-center font-bold leading-4 p-4'>{article.title}</h3>
                </article>
              </Link>
            )
          })}
        </main>
      </div>
    </>
  );
}

export default Articles;
