// The ApiHouse type describes the data that is returned from the API of Ice And Fire.
export type ApiHouse = {
  url: string;
  name: string;
  region: string;
  coatOfArms: string;
  words: string;
  titles: string[];
  seats: string[];
  currentLord: string;
  heir: string;
  overlord: string;
  founded: string;
  founder: string;
  diedOut: string;
  ancestralWeapons: string[];
  cadetBranches: string[];
  swornMembers: string[];
};

// The House types describes the data we use throughout our application. In an ideal situation, it is separated from
// the APIs we consume, and dictates our own domain data models.
export type House = {
  id: string;
} & ApiHouse;

export type AllHouses = Pick<House, "id" | "name" | "region" | "words">[];
