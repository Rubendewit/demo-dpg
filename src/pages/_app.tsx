import type { AppProps } from "next/app";
import { ApolloProvider } from "@apollo/client";
import { css, Global, ThemeProvider } from "@emotion/react";
import { useApollo } from "@src/utils/apolloClient";
import { theme } from "@src/theme";

const globalStyles = css`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    font-smoothing: antialiased;
    margin: 0;
    padding: 0;
  }

  html {
    background: ${theme.colors.main800};
    color: ${theme.colors.main100};
    font-family: "Georgia", "Times New Roman", serif;
  }
`;

function MyApp({ Component, pageProps }: AppProps) {
  const { initialApolloState } = pageProps;

  const apolloClient = useApollo(initialApolloState);

  return (
    <ApolloProvider client={apolloClient}>
      <ThemeProvider theme={theme}>
        <Global styles={globalStyles} />
        <Component {...pageProps} />
      </ThemeProvider>
    </ApolloProvider>
  );
}
export default MyApp;
