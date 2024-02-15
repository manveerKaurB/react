import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
// esting-library/jest-dom imports toBeInTheDocument menthod and few other methods
describe("test cases for header component", () => {

    it("should render header component with a login button", () => {
        //render
        render(<BrowserRouter>
               <Provider store={appStore}>
                 <Header/>
               </Provider>
            </BrowserRouter>
        );
        //query
       // const loginBtn = screen.getByRole("button");    // good way to find getByRole instead of getByText
       // const loginBtn = screen.getByText("Login");
       const loginBtn = screen.getByRole("button", {name: "Login"});
        //assertion
        expect(loginBtn).toBeInTheDocument();
    });

    it("should render header component with a cart items 0", () => {
        //render
        render(<BrowserRouter>
               <Provider store={appStore}>
                 <Header/>
               </Provider>
            </BrowserRouter>
        );
        //query
      // const cartItems = screen.getByText("Cart (0 items)");
      // regex to find text
        const cartItems = screen.getByText(/Cart/);
        //assertion
        expect(cartItems).toBeInTheDocument();
    });

    it("should change login button to logout on click", () => {
        //render
        render(<BrowserRouter>
               <Provider store={appStore}>
                 <Header/>
               </Provider>
            </BrowserRouter>
        );
        //query
        const loginBtn = screen.getByRole("button", {name: "Login"});
        fireEvent.click(loginBtn);
        const logoutBtn = screen.getByRole("button", {name: "Logout"});
        expect(logoutBtn).toBeInTheDocument();
        
       
    });
});