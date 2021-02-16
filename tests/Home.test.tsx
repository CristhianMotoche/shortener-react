import React from "react";
import { MemoryRouter } from "react-router-dom";

import Home from "../src/pages/Home";

import {render, screen, fireEvent} from "@testing-library/react";


const withRouter = (child: JSX.Element) => (
  <MemoryRouter>
    {child}
  </MemoryRouter>
);


describe("Home", () => {
  test("shows home page", () => {
    render(withRouter(<Home />));

    screen.getByText("Welcome to the Shortener Client!");
  });

  describe("when clicking on the create form", () => {
    test("shows creation short link form", () => {
      render(withRouter(<Home />));

      const input = screen.getByText("Short something!");
      fireEvent.click(input);

      screen.getByText("Create a short link");
    });
  });
});
