import { render, screen } from "@testing-library/react";
import Home from "./Home";

test("renders the home page", () => {
  render(<Home />);
  expect(true).toBe(true);
});
