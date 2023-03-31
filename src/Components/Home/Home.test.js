import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Hero from "./components/Hero.jsx";
import NavBox from "./components/NavBox.jsx";
import Newsletter from "./components/Newsletter.jsx";
import Overview from "./components/Overview.jsx";

test("Hero loads all text", () => {
  // ARRANGE
  render(<Hero />);

  // ACT
  const title =
    // ASSERT
    expect(screen.getByRole("heading")).toHaveTextContent("hello there");
  expect(screen.getByRole("button")).toBeDisabled();
});

//   render(<NavBox />);
//   render(<Newsletter />);
//   render(<Hero />);
