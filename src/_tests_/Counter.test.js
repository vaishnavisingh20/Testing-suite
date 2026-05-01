import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Counter from "../components/Counter";

test("counter increments when button is clicked", async () => {
  render(<Counter />);

  const button = screen.getByText("Increment");
  const countText = screen.getByTestId("count");

  expect(countText).toHaveTextContent("0");

  await userEvent.click(button);

  expect(countText).toHaveTextContent("1");
});