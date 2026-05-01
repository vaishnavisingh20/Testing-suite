import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "./App";

test("renders Testing Suite heading", () => {
  render(<App />);
  const element = screen.getByText("Testing Suite");
  expect(element).toBeInTheDocument();
});