import { render } from "@test/utils";
import apiHouse from "@test/mocks/apiHouse";
import { Card } from "./Card";
import { convertHouse } from "@src/utils/convertHouse";

const houseData = convertHouse(apiHouse);

describe("Card", () => {
  it("should render Card", () => {
    const { queryByText, queryByRole } = render(<Card house={houseData} />);

    expect(queryByRole("link")).toHaveAttribute("href", "/house/378");

    expect(
      queryByText(/House Targaryen of King's Landing/)
    ).toBeInTheDocument();
    expect(queryByText(/The Crownland/)).toBeInTheDocument();
    expect(queryByText(/Fire and Blood/)).toBeInTheDocument();
  });

  it("should return null if house data is undefined", () => {
    const { container } = render(<Card house={undefined} />);
    expect(container).toBeEmptyDOMElement();
  });
});
