import fetch from "@src/utils/fetch";
import { ApiHouse } from "@src/types";
import { convertHouse } from "@src/utils/convertHouse";
import { DEFAULT_LIMIT, HOUSES_URL } from "../constants";

type Args = {
  page?: number;
  limit?: number;
};

const getUrl = (page = 1, limit = DEFAULT_LIMIT) =>
  `${HOUSES_URL}?page=${page}&pageSize=${limit}`;

export const housesResolver = async (_parent: any, args: Args) => {
  const url = getUrl(args?.page);

  const houses = await fetch<ApiHouse[]>(url);

  return houses.map(convertHouse);
};
