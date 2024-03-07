import RestaurantMenu from "../../components/RestaurantMenu";
import { fireEvent, render, screen }from "@testing-library/react";
import MOCK_DATA from "../mocks/restaurantMenuMock.json";
import { act } from "react-dom/test-utils";
import appStore from "../../utils/appStore";
import { Provider } from "react-redux";
import Header from "../../components/Header";
import { BrowserRouter } from "react-router-dom";
import Cart from "../../components/Cart";
import "@testing-library/jest-dom";
// integration testing
global.fetch = jest.fn(()=> {
    return Promise.resolve({
        json: ()=>Promise.resolve(MOCK_DATA)
    })
});
it("should load restaurant menu component", async () => {
    await act(async () =>
    render(
        <BrowserRouter>
         <Provider store={appStore}>
                 <Header/>
                 <RestaurantMenu/>
                 <Cart/>
         </Provider>
        </BrowserRouter>
    )
    )

    const accordianHeader = screen.getByText("Recommended(20)");
    fireEvent.click(accordianHeader);
    const foodItems = screen.getAllByTestId("foodItems");
    expect(foodItems.length).toBe(20);
    expect(screen.getByText("Cart (0 items)")).toBeInTheDocument();
    const addBtns= screen.getAllByRole("button", {name: "Add +"});
    fireEvent.click(addBtns[0]);

    const cartItems = screen.getByText("Cart (1 items)");
    expect(cartItems).toBeInTheDocument();

    fireEvent.click(addBtns[1]);
    expect(screen.getByText("Cart (2 items)")).toBeInTheDocument();

    // cart items (as cart items and restuarantMenu uses same list i.e.itemList, so number of items are sum of both)
    expect(screen.getAllByTestId("foodItems").length).toBe(22);

    //remove test
    const removeBtns = screen.getAllByRole("button", {name: "Remove -"});
    fireEvent.click(removeBtns[0]);
    expect(screen.getByText("Cart (1 items)")).toBeInTheDocument();
    expect(screen.getAllByTestId("foodItems").length).toBe(21);


    fireEvent.click(screen.getByRole("button", {name: "Clear Cart"}));
    expect(screen.getAllByTestId("foodItems").length).toBe(20);
    expect(screen.getByText("Cart is empty, add items to the cart!")).toBeInTheDocument();
})