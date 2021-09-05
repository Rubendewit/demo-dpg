import type { AppProps } from "next/app";
import { ApolloProvider } from "@apollo/client";
import { useApollo } from "@src/utils/apolloClient";

function MyApp({ Component, pageProps }: AppProps) {
  const { initialApolloState } = pageProps;

  const apolloClient = useApollo(initialApolloState);

  return (
    <ApolloProvider client={apolloClient}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}
export default MyApp;
