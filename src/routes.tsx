import { createBrowserRouter, RouteObject } from "react-router-dom";

import MainLayout from "./layouts/main/MainLayout.tsx";

import Home from "./pages/home/Home.tsx";
import House from "./pages/house/House.tsx";
import About from "./pages/about/About.tsx";
import NotFound from "./pages/not-found/NotFound.tsx";

const routes: RouteObject[] = [
  {
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/house/:houseId",
        element: <House />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
];

export const router = createBrowserRouter(routes);
