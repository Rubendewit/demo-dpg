import { useCallback, useRef } from "react";
import type { GetStaticProps, NextPage } from "next";
import { useQuery } from "@apollo/client";
import { HousesQuery } from "@src/queries";
import { House } from "@src/types";
import { initializeApollo } from "@src/utils/apolloClient";
import { LoadMore } from "@src/components/LoadMore";
import { Grid } from "@src/components/Grid";
import { Spinner } from "@src/components/Spinner";
import { Error } from "@src/components/Error";

const LIMIT = 10;

const HomePage: NextPage = () => {
  const page = useRef(1);
  const { data, loading, error, fetchMore } = useQuery<{
    houses: House[];
  }>(HousesQuery, {
    variables: {
      page: 1,
      limit: LIMIT,
    },
  });

  const loadMore = useCallback(() => {
    page.current = page.current + 1;
    fetchMore({ variables: { page: page.current } });
  }, [fetchMore]);

  if (loading) {
    return <Spinner absolute />;
  }

  if (error) {
    console.error("Error occurred in Home page", error);
    return <Error />;
  }

  return (
    <div>
      <Grid houses={data?.houses} />
      <LoadMore loading={loading} loadMore={loadMore} />
    </div>
  );
};

export default HomePage;

export const getStaticProps: GetStaticProps = async () => {
  try {
    const client = initializeApollo();
    await client.query({
      query: HousesQuery,
      variables: {
        page: 1,
        limit: LIMIT,
      },
    });

    return {
      props: {
        initialApolloState: client.cache.extract(),
      },
    };
  } catch (error) {
    console.error(`SSR Error occurred while fetching homepage`, error);
    return { notFound: true };
  }
};
