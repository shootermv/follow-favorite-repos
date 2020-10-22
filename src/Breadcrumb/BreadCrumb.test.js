import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";
import BreadCrumb from "./Breadcrumb";

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("renders with a name", () => {
  const nm = "Vasia";
  act(() => {
    render(
      <BrowserRouter>
        <BreadCrumb name={nm} />
      </BrowserRouter>,
      container
    );
  });
  expect(container.textContent.trim()).toBe("Guys / Vasia");
});
