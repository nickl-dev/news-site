/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

const isDevelopmentEnvironment = process.env.NODE_ENV !== 'production'
const server = isDevelopmentEnvironment ? 'http://localhost:3000/' : process.env.NEXT_PUBLIC_SITE_URL

module.exports = {
  nextConfig,
  server
}
