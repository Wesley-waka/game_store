import React from "react";
import { createBrowserRouter } from "react-router-dom";
import GameDetails from "./pages/GameDetails";
import Layout from "./pages/Layout";
import HomePage from "./pages/HomePage";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "games/:slug", element: <GameDetails /> },
    ],
  },
]);

export default routes;
