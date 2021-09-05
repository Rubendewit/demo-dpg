import { houseResolver } from "./house";
import { housesResolver } from "./houses";

export const resolvers = {
  Query: {
    house: houseResolver,
    houses: housesResolver,
  },
};
