/** @type {import('next').NextConfig} */

module.exports = {
  reactStrictMode: true,
  publicRuntimeConfig: {
    graphqlEndpoint: process.env.GRAPHQL_ENDPOINT,
  },
};
