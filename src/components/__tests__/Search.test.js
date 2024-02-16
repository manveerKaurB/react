import { fireEvent, render, screen } from "@testing-library/react";
import Body from "../Body";
import MOCK_DATA from "../mocks/restaurantListMock.json";
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

global.fetch = jest.fn(()=> {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(MOCK_DATA);
        }
    });
});

// integration testing examples

it("Should Search Res List for Momo text input ", async () => {
    await act(async () =>
      render(
        <BrowserRouter>
          <Body />
        </BrowserRouter>
      )
    );
  
    const cardsBeforeSearch = screen.getAllByTestId("resCard");
  
    expect(cardsBeforeSearch.length).toBe(9);
  
    const searchBtn = screen.getByRole("button", { name: "Search" });
  
    const searchInput = screen.getByTestId("searchInput");
  
    fireEvent.change(searchInput, { target: { value: "Momo" } });
  
    fireEvent.click(searchBtn);

    const cardsAfterSearch = screen.getAllByTestId("resCard");
  
    expect(cardsAfterSearch.length).toBe(1);
  });

it("Should filter top rated restaurants", async() => {
    await act(async () => 
    render(
        <BrowserRouter>
             <Body/>
        </BrowserRouter>
        )
    )

    const cardsBeforeSearch = screen.getAllByTestId("resCard");
    expect(cardsBeforeSearch.length).toBe(9);
    const topRatedRestaurantsBtn = screen.getByRole("button", {name: "Top Rated Restaurants"});
    expect(topRatedRestaurantsBtn).toBeInTheDocument();
    fireEvent.click(topRatedRestaurantsBtn);
    // screen should load 2 cards
    const cardsAfterSearch = screen.getAllByTestId("resCard");
    expect(cardsAfterSearch.length).toBe(2);

});