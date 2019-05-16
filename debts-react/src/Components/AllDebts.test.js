import React from "react";
import { shallow } from "enzyme";

import AllDebts from "./AllDebts";

describe("All Debts component", () => {
  it("should render as expected", () => {
    const component = shallow(<AllDebts name={"Danny"} />);

    expect(component.contains("Danny")).toBe(true);
  });
});
