import fetch from "@src/utils/fetch";
import { ApiHouse } from "@src/types";
import { convertHouse } from "@src/utils/convertHouse";
import { HOUSES_URL } from '../constants';

type Args = {
  id: string;
};

const getUrl = (id: string) => `${HOUSES_URL}/${id}`;

export const houseResolver = async (_parent: any, args: Args) => {
  const url = getUrl(args?.id);

  const house = await fetch<ApiHouse>(url);

  return convertHouse(house);
};
