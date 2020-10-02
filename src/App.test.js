import React from "react";
// import { render } from '@testing-library/react';
import { shallow } from "enzyme/build";
import App from "./App";
import ChartLineSimple from "./views/charts/ChartLineSimple";
import Dashboard from "./views/dashboard/Dashboard.js";

it("mounts without crashing", () => {
  const wrapper = shallow(<App />);
  wrapper.unmount();
});

it("mounts dashboard without crashing", () => {
  const wrapper = shallow(<Dashboard />);
  wrapper.unmount();
});

it("mounts charts without crashing", () => {
  const wrapper = shallow(<ChartLineSimple />);
  wrapper.unmount();
});

/* test("renders learn react link", () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
 */
