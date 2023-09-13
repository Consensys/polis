// next.config.js

module.exports = {
  reactStrictMode: true,
  env: {
    INFURA_API_KEY: process.env.INFURA_API_KEY,
    WALLETCONNECT_PROJECT_ID: process.env.WALLETCONNECT_PROJECT_ID,
    ALLOW_LIST: process.env.ALLOW_LIST,
  },
  experimental: {
    serverActions: true,
  },
  images: {
    domains: ["i.imgur.com", "polis.infura-ipfs.io"],
  },
};
