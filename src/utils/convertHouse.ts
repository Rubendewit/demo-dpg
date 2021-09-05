import { ApiHouse, House } from "../types";

// We add an ID to our house data, which we can use to handle data better in our frontend.
const getIdFromUrl = (url: string) => url.split("/").pop() || "";

// Some arrays contains empty strings, instead of being completely empty. We remove any nullish values.
const filterEmptyValues = (array: string[]) => array.filter((i) => i);

export const convertHouse = (house: ApiHouse): House => ({
  ...house,
  id: getIdFromUrl(house.url),
  titles: filterEmptyValues(house.titles),
  seats: filterEmptyValues(house.seats),
  ancestralWeapons: filterEmptyValues(house.ancestralWeapons),
});
