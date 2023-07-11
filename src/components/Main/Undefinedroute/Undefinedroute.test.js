import React from "react";
import { shallow } from "enzyme";
import Undefinedroute from "./Undefinedroute";

describe("Undefinedroute", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Undefinedroute />);
    expect(wrapper).toMatchSnapshot();
  });
});
