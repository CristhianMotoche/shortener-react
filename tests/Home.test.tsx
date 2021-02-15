import React from "react";

import Home from "../src/pages/Home";

import { render, screen} from "@testing-library/react";


describe("Home", () => {
  test("shows home page", () => {
    render(<Home />);

    screen.getByText("Welcome to the Shortener Client!");
  });
});
