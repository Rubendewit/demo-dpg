import { render } from "@test/utils";
import { Error } from "./Error";

describe("Error", () => {
  it("should render Error", () => {
    const { queryByText, queryByRole } = render(<Error />);

    expect(queryByRole("link", { name: "back to home" })).toHaveAttribute(
      "href",
      "/"
    );

    expect(
      queryByText(/That's what I do, I drink and break things./)
    ).toBeInTheDocument();
    expect(queryByText(/Something has gone wrong!/)).toBeInTheDocument();
  });
});
