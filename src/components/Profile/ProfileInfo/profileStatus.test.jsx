import React from "react";
import { create } from "react-test-renderer";
import ProfileStatus from "./profileStatus";

describe("ProfileStatus component", () => {
  test("status from props should be in the state", () => {
    const component = create(<ProfileStatus status= "kamaProject" />);
    const instance = component.getInstance();
    expect(instance.state.status).toBe("kamaProject");

  });
  test("after creation <span> should be displayed with correct status", () => {
    const component = create(<ProfileStatus status="kamaProject" />);
    const root_instance = component.root;
    let span = root_instance.findByType("span");
    expect(span).not.toBeNull();
  });

  test("after creation <input> shouldn't be displayed", () => {
    const component = create(<ProfileStatus status="kamaProject" />);
    const root_instance = component.root;
    expect( () => {
      let input = root.findByType("input");
    }).toThrow();
  });

  test("after creation <span> should be contains correct status", () => {
    const component = create(<ProfileStatus status="kamaProject" />);
    const root_instance = component.root;
    let span = root_instance.findByType("span");
    expect(span.children[0]).toBe("kamaProject");
  });

  test("after creation <span> should be contains correct status", () => {
    const component = create(<ProfileStatus status="kamaProject" />);
    const root_instance = component.root;
    let span = root_instance.findByType("span");
    span.props.onDoubleClick();
    let input = root_instance.findByType("input");
    expect(input.props.value).toBe("kamaProject");
  });

  test("after creation <span> should be contains correct status", () => {
    const mockCallBack = jest.fn();
    const component = create(<ProfileStatus status="kamaProject" updateStatus={mockCallBack} />);
    const instance = component.getInstance();
    instance.deactivateEditMode();
    expect(mockCallBack.mock.calls.length).toBe(1);
  });

});