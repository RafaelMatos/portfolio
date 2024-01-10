/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    BASE_URL: process.env.BASE_URL,
  },
  images: {
    domains: ['img.icons8.com','images.unsplash.com','github.com'],
  },
}

module.exports = nextConfig
