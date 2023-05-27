import { render, screen } from "@testing-library/react";
import { Input } from ".";

describe("<Input />", () => {
  test("[role=textbox]である", () => {
    render(
      <Input
        placeholder=""
        onKeyDown={() => {}}
        onChange={() => {}}
      />
    );
    const inputElement = screen.getByRole("textbox");
    expect(inputElement).toBeInTheDocument();
  });
});
