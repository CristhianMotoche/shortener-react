import React from "react";
import { render, fireEvent } from "@testing-library/react";

import ShortLink from "../src/components/ShortLink";

describe("ShortLink", () => {
  test("allows form input to change its value", () => {
    const { getByPlaceholderText } = render(<ShortLink />);

    const inputTest = getByPlaceholderText("Text");
    fireEvent.change(inputTest, { target: { value: "Foo" } })
  });
});
