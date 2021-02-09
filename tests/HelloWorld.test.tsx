import React from "react";

import HelloWorld from "../src/HelloWorld";

import { render, screen} from "@testing-library/react";


test("Shows hello world", () => {
  render(<HelloWorld />);

  screen.getByText("Hello World!!");
});
