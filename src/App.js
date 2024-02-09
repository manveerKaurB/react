import React, {lazy, Suspense, useEffect, useState} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import UserContext from "./utils/UserContext";

const Grocery = lazy(()=>import("./components/Grocery"));
const Search = () => {

}

const AppLayout = () => {
    const [userName, setUserName] = useState('');
    // authentication
    useEffect(()=> {
      // make an api call to fetch user and password
      const data = {
        name: "Manveer Kaur"
      };
      setUserName(data.name);
    }, []);
    return (
      <UserContext.Provider value={{loggedInUser: userName , setUserName}}>
        <div className="app">
            <Header/>
            <Outlet/>
        </div>
      </UserContext.Provider>
    )
}

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout/>,
    children: [
      {
        path: '/',
        element: <Body/>
      },
      {
        path: '/about',
        element: <About/>
      },
      {
         path: '/contact',
         element: <Contact/>
      },
      {
        path: '/grocery',
        element: (
                  <Suspense fallback={<h1>Loading ...</h1>}>
                      <Grocery/>
                  </Suspense>
                )
      },
      {
        path: '/restaurants/:resId',
        element: <RestaurantMenu/>
      }
    ] ,
    errorElement: <Error/>
  }
])

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<AppLayout/>);
root.render(<RouterProvider router={appRouter}/>)