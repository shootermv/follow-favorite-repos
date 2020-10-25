import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import Pulls from "./Pulls";

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

it("renders user data", async () => {
  const fakeRows = [{
    title: "Joni Baez",
    number: "32",
  }];
  jest.spyOn(global, "fetch").mockImplementation(() =>
    Promise.resolve({
      ok: true, 
      json: () => Promise.resolve( fakeRows)
    })
  );

  // Use the asynchronous version of act to apply resolved promises
  await act(async () => {
    render(<Pulls selectedRepo={{url: 'some'}}/>, container); 
  });
  expect(container.querySelector("[data-test-id=table-head-row] th:nth-child(1)").textContent).toBe('title');
  expect(container.querySelector("[data-test-id=table-row] td:nth-child(1)").textContent).toBe(fakeRows[0].title);


  // remove the mock to ensure tests are completely isolated 
  global.fetch.mockRestore();
});