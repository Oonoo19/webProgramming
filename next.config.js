/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  assetPrefix: '/wallisconsultancy/',
  images: {
    loader: 'akamai',
    path: '../public/Jiji.webp'
  },
  env: {
    PUBLIC_URL: "https://webProgramming",
    assetPrefix: './'
  }
};
