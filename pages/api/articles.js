// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

/**
 * Handler
 * @desc Makes an API request for a list of news articles
 * @param {req} - request object
 * @param {res} - response object
 */
export default async function handler(req, res) {
  const response = await fetch(`${process.env.THIRD_PARTY_API_BASE_URL}&apiKey=${process.env.THIRD_PARTY_API_KEY}`);
  const { articles } = await response.json();
  articles.forEach((article, index) => article.uuid = index + 1);

  res.status(200).send(articles);
}
