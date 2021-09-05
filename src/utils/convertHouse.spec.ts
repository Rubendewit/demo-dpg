import apiHouse from "@test/mocks/apiHouse";
import { convertHouse } from "./convertHouse";

describe("convertHouse util", () => {
  it("should convert API response to own domain", () => {
    const { id, ancestralWeapons, ...rest } = convertHouse(apiHouse);

    expect(id).toBe("378");
    expect(ancestralWeapons).toEqual(["Blackfyre", "Dark Sister"]);

    // The rest should be equal to the original API response.
    expect(apiHouse).toEqual(expect.objectContaining(rest));
  });
});
