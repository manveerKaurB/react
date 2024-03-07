import { fireEvent, render, renderHook, screen } from "@testing-library/react";
import MOCK_DATA from "../mocks/restaurantListMock.json";
import Body from "../Body";
import { act } from "react-dom/test-utils";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import appStore from "../../utils/appStore";
import useOnlineStatus from "../../utils/useOnlineStatus";
import "@testing-library/jest-dom";
import Header from "../Header";
global.fetch = jest.fn(()=> {
    return Promise.resolve({
        json: ()=>Promise.resolve(MOCK_DATA)
    })
});
Object.defineProperty(window, 'addEventListener', {
    value: jest.fn(),
});
it("should show offline status message", async() => {
    await act(async()=>render(<Provider store={appStore}>
        <BrowserRouter>
             <Body/>
        </BrowserRouter>
    </Provider>
    ));

    const {result} = renderHook(()=> useOnlineStatus());
    const offlineEventCallback = window.addEventListener.mock.calls.find(
        call => call[0] === 'offline'
      )[1];
      act(()=>offlineEventCallback());
      expect(screen.getByTestId("offlineMsg")).toBeInTheDocument();
});

// it("should set user name", async() => {
//     await act(async()=>render(<Provider store={appStore}>
//         <BrowserRouter>
//              <Header/>   
//              <Body/>
//         </BrowserRouter>
//     </Provider>
//     ));

//       const userInput = screen.getByTestId("userNameInput");
//       fireEvent.change(userInput, {target: {value:"Meeru"}});
//       const userName = screen.getByTestId("userName");
//       expect(userName).toBe("Meeru");
// });