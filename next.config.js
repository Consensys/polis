// next.config.js

module.exports = {
  reactStrictMode: true,
  env: {
    INFURA_API_KEY: process.env.INFURA_API_KEY,
    WALLETCONNECT_PROJECT_ID: process.env.WALLETCONNECT_PROJECT_ID,
  },
  experimental: {
    serverActions: true,
    appDir: true,
  },
  images: {
    domains: ["i.imgur.com"],
  },
};
