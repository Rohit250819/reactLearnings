import { fireEvent, render, screen } from "@testing_library/react";
import App from './App';

describe("Feedback Form", () => {
  test("Submissiont is disabled if score is lower than 5 and there is no feedbac", () =>{
    const handleSubmit = jest.fn();
    render(<form onSubmit ={handleSubmit}></form>);

    const rangeInput = screen.getByLabelText(/Score:/);
    fireEvent.change(rangeInput,{target: {value : "4"}});

    const submitButton = screen.getByRole("button");
    fireEvent.click(submitButton);

    expect(handleSubmit).not.toHaveBeenCalled();
    expect(submitButton).toHaveAttribute("disabled");
  })
})