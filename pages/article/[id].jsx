  import Head from 'next/head';
  import Link from 'next/link';
  import Image from 'next/image';

  const isDevelopmentEnvironment = process.env.NODE_ENV !== 'production'
  const server = isDevelopmentEnvironment ? 'http://localhost:3000/' : process.env.NEXT_PUBLIC_SITE_URL

  export const getServerSidePaths = async () => {
    const response = await fetch(`${server}api/articles`);
    const data = await response.json()

    const paths = data.map(article => {
      return {
        params: { id: String(article.uuid) }
      }
    })

    return {
      paths,
      fallback: false
    }
  }

  export const getServerSideProps = async (context) => {
    const { id } = context.params
    const response = await fetch(`${server}api/articles/${id}`);
    const article = await response.json()

    return { props: { article } }
  }


  const Article = ({ article }) => {
    return (
      <>
        {/* Meta Data */}
        <Head>
          <title>{article.title}</title>
          <meta name='description' content={article.description} />
          <link rel='icon' href='/favicon.png' />
          <meta property='og:type' content='Website' />
          <meta property='og:title' content={article.title} />
          <meta property='og:description' content={article.description} />
          <meta property='og:image' content={article.image} />
          <meta property='og:url' content={process.env.NEXT_PUBLIC_SITE_URL} />
          <meta property='og:site_name' content={process.env.NEXT_PUBLIC_SITE_TITLE} />
        </Head>

        {/* Article information */}
        <main className='pt-24 px-4 sm:px-6 md:px-8 min-h-screen'>
          <Link className='text-red font-extrabold'href={'/'}>&#8249; Go Back</Link>

          <article className='mt-10'>
            <h1 className='font-semibold leading-4'>{article.title}</h1>
            <Image
              src={article.urlToImage || process.env.NEXT_PUBLIC_ARTICLE_PLACEHOLDER_IMAGE}
              width={100}
              height={100}
              alt={article.description}
              className='mt-3'
            />
            <p className='mt-2'>{article.content || article.description}</p>
          </article>
        </main>
      </>
    )
  }

  export default Article;
