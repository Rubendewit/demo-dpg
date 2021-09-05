import type { NextPage } from "next";
import { useQuery } from "@apollo/client";
import { HousesQuery } from "@src/queries";

const LIMIT = 10;

const Home: NextPage = () => {
  const { data, error } = useQuery<{ houses: any[] }>(HousesQuery, {
    variables: {
      page: 1,
      limit: LIMIT,
    },
  });

  if (!data && !error) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error occurred: {JSON.stringify(error)}</p>;
  }

  return (
    <div>
      {data?.houses.map((house) => {
        return <div key={house.name}>{house.name}</div>;
      })}
    </div>
  );
};

export default Home;
