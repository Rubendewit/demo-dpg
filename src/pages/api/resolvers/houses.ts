import fetch from "@src/utils/fetch";

type Args = {
  page?: number;
  limit?: number;
};

const housesUrl = "https://www.anapioficeandfire.com/api/houses";

const getUrl = (page = 1, limit = 10) =>
  `${housesUrl}?page=${page}&pageSize=${limit}`;

export const housesResolver = async (_parent: any, args: Args) => {
  const url = getUrl(args?.page);

  const houses = await fetch<any[]>(url);

  return houses;
};
