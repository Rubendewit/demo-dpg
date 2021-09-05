import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import NextLink from "next/link";
import { useQuery } from "@apollo/client";
import { HouseQuery } from "@src/queries";
import { House } from "@src/types";
import { initializeApollo } from "@src/utils/apolloClient";
import { Spinner } from "@src/components/Spinner";
import { BackLink } from "@src/components/BackLink";

type HousePageProps = {
  id: string;
};

const HousePage: NextPage<HousePageProps> = ({ id }) => {
  const { data, error, loading } = useQuery<{ house: House }>(HouseQuery, {
    variables: { id },
  });

  if (error) return <p>Error: {JSON.stringify(error)}</p>;
  if (loading) return <Spinner absolute />;

  return (
    <div>
      <BackLink>
        <NextLink href="/">
          <a>Back</a>
        </NextLink>
      </BackLink>
      <p>{data?.house?.name}</p>
    </div>
  );
};

export default HousePage;

export const getStaticPaths: GetStaticPaths<HousePageProps> = async () => {
  // TODO: Generate static paths from data
  return {
    paths: [],
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const id = context.params?.id;

  if (!id) {
    return { notFound: true };
  }

  try {
    const client = initializeApollo();
    const result = await client.query({ query: HouseQuery, variables: { id } });

    if (!result?.data?.house) {
      return { notFound: true };
    }

    return {
      props: {
        id,
        initialApolloState: client.cache.extract(),
      },
    };
  } catch (error) {
    console.error(`SSR Error occurred while fetching house "${id}"`, error);
    return { notFound: true };
  }
};
