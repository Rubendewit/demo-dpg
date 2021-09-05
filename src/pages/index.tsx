import { useCallback, useRef } from "react";
import type { GetStaticProps, NextPage } from "next";
import { useQuery } from "@apollo/client";
import { HousesQuery } from "@src/queries";
import { House } from "@src/types";
import { initializeApollo } from "@src/utils/apolloClient";
import { Grid } from "@src/components/Grid";
import { Spinner } from "@src/components/Spinner";

const LIMIT = 10;

const Home: NextPage = () => {
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
    return <p>Error occurred: {JSON.stringify(error)}</p>;
  }

  return (
    <div>
      {data?.houses.map((house) => {
        return <div key={house.name}>{house.name}</div>;
      })}

      <button onClick={loadMore}>Load more</button>
    </div>
  );
};

export default Home;

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
