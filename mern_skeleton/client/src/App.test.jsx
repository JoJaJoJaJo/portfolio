import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "./App";

test("App renders without crashing", () => {
  render(<App />);
  expect(1 + 1).toBe(2);
});
