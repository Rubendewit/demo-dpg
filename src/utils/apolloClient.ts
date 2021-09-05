import { useMemo } from "react";
import getConfig from "next/config";
import {
  ApolloClient,
  HttpLink,
  InMemoryCache,
  NormalizedCacheObject,
} from "@apollo/client";

export const createClient = (): ApolloClient<NormalizedCacheObject> => {
  const { publicRuntimeConfig } = getConfig();

  return new ApolloClient({
    link: new HttpLink({ uri: publicRuntimeConfig.graphqlEndpoint }),
    cache: new InMemoryCache(),
  });
};

let apolloClient: ApolloClient<NormalizedCacheObject>;

export const initializeApollo = (initialState?: NormalizedCacheObject) => {
  const _apolloClient = apolloClient ?? createClient();

  // If there are data fetching methods using Apollo, we hydrate the initial state.
  if (initialState) {
    // Get existing cache, loaded during client side data fetching
    const existingCache = _apolloClient.extract();

    // Restore the cache using the data passed from getStaticProps/getServerSideProps combined with the existing cache.
    _apolloClient.cache.restore({ ...existingCache, ...initialState });
  }

  // Don't define the ApolloClient for SSR
  if (typeof window === "undefined") return _apolloClient;

  // Define the ApolloClient once for the client.
  if (!apolloClient) apolloClient = _apolloClient;

  return _apolloClient;
};

export const useApollo = (
  initialState?: NormalizedCacheObject
): ApolloClient<NormalizedCacheObject> =>
  useMemo(() => initializeApollo(initialState), [initialState]);
