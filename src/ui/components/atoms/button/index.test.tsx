import {render, screen } from "@testing-library/react";
import { Button } from ".";

describe("<Button />", () => {
  test("[role=button]である", () => {
    render(
      <Button type={undefined} ariaLabel="" onClick={() => {}} children="" />
    );

    const buttonElement = screen.getByRole("button");
    expect(buttonElement).toBeInTheDocument();
  });
});
