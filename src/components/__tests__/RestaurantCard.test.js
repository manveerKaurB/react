import { render, screen } from "@testing-library/react"
import RestaurantCard from "../RestaurantCard"
import MOCK_DATA from "../mocks/restaurantCardMock.json"
import "@testing-library/jest-dom"
it("should render restaurant card component with props data", () => {
    // using mock data
     render(<RestaurantCard resData={MOCK_DATA}/>);
     const restaurantName = screen.getByText("Theobroma");
     expect(restaurantName).toBeInTheDocument();
});
it("should render restaurant card component with promoted label", () => {
    // test higher order component
});

