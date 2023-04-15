// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const isDevelopmentEnvironment = process.env.NODE_ENV !== 'production'
const server = isDevelopmentEnvironment ? 'http://localhost:3000/' : process.env.NEXT_PUBLIC_SITE_URL

/**
 * Handler
 * @desc Makes an internal API request for the news articles that are returned at the route '/api/articles'
 * and sends back a news article with a uuid that matches the request query id
 * @param {object} req - API request object
 * @param {object} res - API response object
 */
export default async function handler(req, res) {
  const { id } = req.query
  const response = await fetch(`${server}api/articles`);
  const data = await response.json();

  const article = data.find(article => String(article.uuid) === id) 

  if (article) res.status(200).send(article)
  else res.status(404).send(`Could not find an article with the specified uuid: ${id}`)
}
