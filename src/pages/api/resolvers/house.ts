import fetch from "@src/utils/fetch";

type Args = {
  id: string;
};

const housesUrl = "https://www.anapioficeandfire.com/api/houses";

const getUrl = (id: string) => `${housesUrl}/${id}`;

export const houseResolver = async (_parent: any, args: Args) => {
  const url = getUrl(args?.id);

  const house = await fetch<any>(url);

  return house;
};
