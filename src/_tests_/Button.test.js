import { render, screen, fireEvent } from "@testing-library/react";
import Button from "../components/Button";

test("button click works", () => {
  const handleClick = jest.fn();

  render(<Button text="Click Me" onClick={handleClick} />);
  
  fireEvent.click(screen.getByText("Click Me"));

  expect(handleClick).toHaveBeenCalledTimes(1);
});