import React from "react";
import { mount } from "../setupTests";

import AllDebts from "./AllDebts";

describe("All Debts component", () => {
  let component;
  beforeEach(() => {
    component = mount(<AllDebts name={"Danny"} />);
  });

  it("prop name should render Danny", () => {
    expect(component.html()).to.equal("<h1>Danny</h1>");
  });
});
