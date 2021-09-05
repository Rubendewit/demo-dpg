import { render } from "@test/utils";
import apiHouse from "@test/mocks/apiHouse";
import { HouseInfo } from "./HouseInfo";
import { convertHouse } from "@src/utils/convertHouse";

const houseData = convertHouse(apiHouse);

describe("HouseInfo", () => {
  it("should render HouseInfo", () => {
    const { queryByText, queryByRole } = render(
      <HouseInfo house={houseData} />
    );

    expect(
      queryByRole("heading", { name: "House Targaryen of King's Landing" })
    ).toBeInTheDocument();
    expect(queryByText(/The Crownland/)).toBeInTheDocument();
    expect(queryByText(/Fire and Blood/)).toBeInTheDocument();

    expect(queryByText(/Coat of arms/)).toBeInTheDocument();
    expect(
      queryByText(/Sable, a dragon thrice-headed gules/)
    ).toBeInTheDocument();

    expect(queryByText(/holds the titles:/)).toBeInTheDocument();
    expect(
      queryByText(/King of the Andals, the Rhoynar and the First Men/)
    ).toBeInTheDocument();
  });

  it("should return null if house data is undefined", () => {
    const { container } = render(<HouseInfo house={undefined} />);
    expect(container).toBeEmptyDOMElement();
  });
});
