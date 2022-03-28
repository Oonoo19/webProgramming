/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  images: {
    loader: 'akamai',
    path: '../public/Jiji.webp',
  },
  env: {
    PUBLIC_URL: "https://webProgramming",
    assetPrefix: './'
  }
};
