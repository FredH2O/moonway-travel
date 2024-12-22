import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./layouts/Layout";
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import Hotels from "./pages/Hotels";
import HotelDetails from "./pages/HotelDetails";
import UnderConstruction from "./pages/UnderConstruction";
import Contact from "./pages/Contact";
import BookingConfirmed from "./pages/Confirmed";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/hotels",
        element: <Hotels />,
      },
      {
        path: "/hotels/:id",
        element: <HotelDetails />,
      },
      {
        path: "/under-construction",
        element: <UnderConstruction />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/confirmed",
        element: <BookingConfirmed />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={appRouter} />;
};

export default App;
