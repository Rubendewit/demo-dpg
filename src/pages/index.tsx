import { useCallback, useRef } from "react";
import type { NextPage } from "next";
import { useQuery } from "@apollo/client";
import { HousesQuery } from "../queries";

const LIMIT = 10;

const Home: NextPage = () => {
  const page = useRef(1);
  const { data, loading, error, fetchMore } = useQuery<{
    houses: any[];
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
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error occurred: {JSON.stringify(error)}</p>;
  }

  return (
    <div>
      {data?.houses.map((house: any) => {
        return <div key={house.name}>{house.name}</div>;
      })}

      <button onClick={loadMore}>Load more</button>
    </div>
  );
};

export default Home;
