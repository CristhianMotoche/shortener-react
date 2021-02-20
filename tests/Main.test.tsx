import React from "react";
import { MemoryRouter } from "react-router-dom";

import Main from "../src/pages/Main";

import {render, screen, fireEvent} from "@testing-library/react";


const withRouter = () => (
  <MemoryRouter>
    <Main />
  </MemoryRouter>
);


describe("Main", () => {
  test("shows home page", () => {
    render(withRouter());

    screen.getByText("Welcome to the Shortener Client!");
  });

  describe("when clicking on the create form", () => {
    test("shows creation short link form", () => {
      render(withRouter());

      const input = screen.getByText("Short something!");
      fireEvent.click(input);

      screen.getByText("Create a short link");
    });
  });
});
