import * as React from "react";
import Enzyme from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import ExpenseForm from "./ExpenseForm";
Enzyme.configure({ adapter: new Adapter() });
describe("<ExpenseForm />", () => {
  let wrapper;
  const setState = jest.fn();
  const useStateSpy = jest.spyOn(React, "useState");
  beforeEach(() => {
    jest.clearAllMocks();
  });
  afterEach(() => {
    jest.clearAllMocks();
  });
  useStateSpy.mockImplementation((init) => [init, setState]);
  describe("Title input", () => {
    it("Should capture title correctly onChange", () => {
      wrapper = Enzyme.mount(Enzyme.shallow(<ExpenseForm />).get(0));
      const title = wrapper.find("input").at(0);
      title.simulate("change", {
        target: { value: "Test" }
      });
      expect(setState).toHaveBeenCalledTimes(1);
      expect(setState).toHaveBeenCalledWith("Test");
    });
  });
  describe("Content input", () => {
    it("Should capture content correctly onChange", () => {
      wrapper = Enzyme.mount(Enzyme.shallow(<ExpenseForm />).get(0));
      const content = wrapper.find("input").at(1);
      content.instance().value = "Testing";
      content.simulate("change", { target: { value: "Testing" } });
      expect(setState).toHaveBeenCalledWith("Testing");
    });
  });
});
