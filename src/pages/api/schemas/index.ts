import { gql } from "apollo-server-micro";

export const typeDefs = gql`
  type House {
    id: String
    url: String
    name: String
    region: String
    coatOfArms: String
    words: String
    titles: [String]
    seats: [String]
    currentLord: String
    heir: String
    overlord: String
    founded: String
    founder: String
    diedOut: String
    ancestralWeapons: [String]
    cadetBranches: [String]
    swornMembers: [String]
  }

  type Query {
    houses(page: Int, limit: Int): [House]
    house(id: String!): House
  }
`;
