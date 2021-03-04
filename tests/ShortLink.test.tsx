import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";

import ShortLink from "../src/components/ShortLink";
import { ShortService } from "../src/client/services/ShortService";

const mockService = jest.fn();
ShortService.postShortService = mockService;

describe("ShortLink", () => {
  test("allows form input to change its value", () => {
    const { getByPlaceholderText } = render(<ShortLink />);

    const inputTest = getByPlaceholderText("Text");
    fireEvent.change(inputTest, { target: { value: "Foo" } });
  });

  describe("when clicking on submit button", () => {
    describe("when the text is given", () => {
      test("show the result", async () => {
        const { getByPlaceholderText, getByText } = render(<ShortLink />);
        const inputTest = getByPlaceholderText("Text");
        const submitButton = getByText("Submit");

        fireEvent.change(inputTest, { target: { value: "Foo" } });
        fireEvent.click(submitButton);

        await waitFor(() => getByText(/Your short link is: .{6}/));
      });
    });
  });
});
