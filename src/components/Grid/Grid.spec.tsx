import { render } from "@test/utils";
import apiHouse from "@test/mocks/apiHouse";
import { Grid } from "./Grid";
import { convertHouse } from "@src/utils/convertHouse";
import { AllHouses } from "@src/types";

// We use typecasting to insert empty houses, so we can assure empty data still works.
const housesData = [
  convertHouse(apiHouse),
  undefined,
  { invalid: "data" },
] as AllHouses;

describe("Grid", () => {
  it("should render Grid", () => {
    const { queryByText, queryAllByRole } = render(
      <Grid houses={housesData} />
    );

    const links = queryAllByRole("link");
    expect(links).toHaveLength(1);
    expect(links[0]).toHaveAttribute("href", "/house/378");

    expect(
      queryByText(/House Targaryen of King's Landing/)
    ).toBeInTheDocument();
    expect(queryByText(/The Crownland/)).toBeInTheDocument();
    expect(queryByText(/Fire and Blood/)).toBeInTheDocument();
  });

  it("should return null if houses are undefined", () => {
    const { container } = render(<Grid houses={[]} />);
    expect(container).toBeEmptyDOMElement();
  });
});
