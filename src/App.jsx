import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./layouts/Layout";
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import Hotels from "./pages/Hotels";
import HotelDetails from "./pages/HotelDetails";

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
    ],
  },
]);

const App = () => {
  return <RouterProvider router={appRouter} />;
};

export default App;
