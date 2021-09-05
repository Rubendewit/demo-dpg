/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  // TODO: Move to .env variable
  publicRuntimeConfig: {
    graphqlEndpoint: "http://localhost:3000/api/graphql",
  },
};
