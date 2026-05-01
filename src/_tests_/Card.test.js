import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Card from "../components/Card";

test("renders card without crashing", () => {
  render(<Card title="Hello Card" />);
});

test("displays correct title", () => {
  render(<Card title="Hello Card" />);
  const element = screen.getByText("Hello Card");
  expect(element).toBeInTheDocument();
});