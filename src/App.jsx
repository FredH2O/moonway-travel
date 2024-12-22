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
    path: "/moonway-travel/",
    element: <Layout />,
    children: [
      {
        path: "/moonway-travel/",
        element: <HomePage />,
      },
      {
        path: "/moonway-travel/about",
        element: <About />,
      },
      {
        path: "/moonway-travel/hotels",
        element: <Hotels />,
      },
      {
        path: "/moonway-travel/hotels/:id",
        element: <HotelDetails />,
      },
      {
        path: "/moonway-travel/under-construction",
        element: <UnderConstruction />,
      },
      {
        path: "/moonway-travel/contact",
        element: <Contact />,
      },
      {
        path: "/moonway-travel/confirmed",
        element: <BookingConfirmed />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={appRouter} basename="/moonway-travel/" />;
};

export default App;
