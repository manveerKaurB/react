import { render, screen }from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("Contact us page test case", () => {

    it("should load contact us component", () => {

        render(<Contact/>);
     
         const heading = screen.getByRole("heading");
         // assertion
         expect(heading).toBeInTheDocument();
     });
     
     test("should load button inside contact component", () => {
     
         render(<Contact/>);
      
         //  const button = screen.getByRole("button");
         const button = screen.getByText("Submit");
          // assertion
          expect(button).toBeInTheDocument();
      });
     
      test("should load input name inside contact component", () => {
     
         render(<Contact/>);
      
         //  const button = screen.getByRole("button");
         const inputName = screen.getByPlaceholderText("name");
          // assertion
          expect(inputName).toBeInTheDocument();
      });
     
      test("should load 2 inout boxes on contact component", () => {
         render(<Contact/>);
     
         // this tyoe of role does not exist - input, role for input is textBox
         // const inputBoxes = screen.getAllByRole("input");   won't work
         //querying
         const inputBoxes = screen.getAllByRole('textbox'); 
         // assertion
         expect(inputBoxes.length).toBe(2);
     
         expect(inputBoxes.length).not.toBe(3);
      })

});
