import { render, screen } from "@testing-library/react";
import { PageTitle } from ".";

describe("<PageTitle />", () => {
  test("[role=heading]である", () => {
    render(<PageTitle text="" />);

    const pageTitleList = screen.getByRole("heading");
    expect(pageTitleList).toBeInTheDocument();
  });
});
