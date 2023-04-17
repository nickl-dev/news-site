  import Head from 'next/head';

  const isDevelopmentEnvironment = process.env.NODE_ENV !== 'production'
  const server = isDevelopmentEnvironment ? 'http://localhost:3000/' : 'https://noticias-colombianas.vercel.app/'

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
      <div>
        {/* Meta Data */}
        <Head>
          <title>{article.title}</title>
          <meta name="description" content={article.description} />
          <link rel="icon" href="/favicon.png" />
          <meta property="og:type" content="Website" />
          <meta property="og:title" content={article.title} />
          <meta property="og:description" content={article.description} />
          <meta property="og:image" content={article.image} />
          <meta property="og:url" content={process.env.NEXT_PUBLIC_SITE_URL} />
          <meta property="og:site_name" content={process.env.NEXT_PUBLIC_SITE_TITLE} />
        </Head>

        {/* Article information */}
        <h1>{article.title}</h1>
        <p>{article.description}</p>
      </div>
    )
  }

  export default Article;
