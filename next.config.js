/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  basePath: '/wallisconsultancy',
  assetPrefix: '/wallisconsultancy/',
  images: {
    loader: 'akamai',
    path: '../public/Jiji.webp'
  },
  env: {
    BACKEND_URL: '/wallisconsultancy',
    PUBLIC_URL: "https://webProgramming",
    assetPrefix: './'
  }
};
