import { render, screen } from "@testing-library/react";
import add from "../components/add";

test("add", () => {
  expect(add(1,2)).toBe(3)
  // it("renders without crashing", () => {
  //   render(<App />);
  //   expect(
  //     screen.getByRole("heading", { name: "Welcome to Next.js!" })
  //   ).toBeInTheDocument();
  // });
});