import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Input from "../components/Input";

test("user can type in input field", async () => {
  render(<Input placeholder="Enter name" />);

  const input = screen.getByPlaceholderText("Enter name");

  await userEvent.type(input, "Vaishnavi");

  expect(input).toHaveValue("Vaishnavi");
});