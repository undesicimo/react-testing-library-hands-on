/* eslint-disable testing-library/no-debugging-utils */
import { render, screen } from "@testing-library/react";
import { DemoCounter } from "./DemoCounter";
describe("render DemoCounter", () => {
  it("should render all elements", () => {
    render(<DemoCounter />);

    screen.debug();
  });
});
