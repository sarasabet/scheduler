import React from "react";

import { render, cleanup , fireEvent} from "@testing-library/react";

import Form from "components/Appointment/Form";

afterEach(cleanup);

describe("Form", () => {
  const interviewers = [
    {
      id: 1,
      name: "Sylvia Palmer",
      avatar: "https://i.imgur.com/LpaY82x.png"
    }
  ];

  it("renders without student name if not provided", () => {
    const { getByPlaceholderText } = render(<Form interviewers={interviewers} />);
    expect(getByPlaceholderText("Enter Student Name")).toHaveValue("");
  });

  it("renders with initial student name", () => {
    const { getByTestId } = render(<Form name="Lydia Miller-Jones" interviewers={interviewers} />);
    expect(getByTestId("student-name-input")).toHaveValue("Lydia Miller-Jones");
  });

  it("calls onSave function when the name is defined", () => {
    //initialize mock function
    const onSave = jest.fn();

    const { queryByText, getByText } = render(<Form name="Lydia Miller-Jones" interviewers={interviewers} onSave={onSave} />);

    fireEvent.click(getByText("Save"))

    expect(queryByText(/student name cannot be blank/i)).toBeNull();
    expect(onSave).toHaveBeenCalledTimes(1);
    expect(onSave).toHaveBeenCalledWith("Lydia Miller-Jones", null);
  });


  it("calls onSave function when the name is defined", () => {
    /* 3. validation is not shown */
    //initialize moch fn
    const onSave= jest.fn();
    const { queryByText, getByText } = render(<Form name="Lydia Miller-Jones"interviewers={interviewers} onSave={onSave} />);
    fireEvent.click(getByText("Save"))
    expect(queryByText(/student name cannot be blank/i)).toBeNull();
    //onSave is called once*/
    expect(onSave).toHaveBeenCalledTimes(1);
    //onSave is called with the correct arguments */
    expect(onSave).toHaveBeenCalledWith("Lydia Miller-Jones", null);

  });

});
