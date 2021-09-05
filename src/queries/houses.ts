import { gql } from "@apollo/client";

export const HousesQuery = gql`
  query Houses($page: Int, $limit: Int) {
    houses(page: $page, limit: $limit) {
      id
      name
      region
      words
    }
  }
`;
