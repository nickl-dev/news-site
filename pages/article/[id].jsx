export const getStaticPaths = async () => {
  const response = await fetch(`${process.env.API_BASE_URL}top?api_token=${process.env.API_TOKEN}&locale=co`);
  const { data } = await response.json()
  
  const paths = data.map(article => {
    return {
      params: { id: article.uuid } 
    }
  })

  return {
    paths,
    fallback: false
  }
}

export const getStaticProps = async (context) => {
  const { id } = context.params
  const response = await fetch(`${process.env.API_BASE_URL}uuid/${id}?api_token=${process.env.API_TOKEN}`);
  const data = await response.json()

  return { props: { article: data } }

}


const Article = ({ article }) => {
  return (  
    <div>
      <h1>{article.title}</h1>
      <p>{article.description}</p>
      {
        article.categories.length < 2 ? 
          (<span>{article.categories[0]}</span>) 
          : article.categories.map(category => {
            return (<span> {category} |</span>)
          })
      }
    </div>
  )
}

export default Article;
