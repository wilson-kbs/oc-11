import { createBrowserRouter, RouteObject } from "react-router-dom";

import PageWrapper from "./layouts/pageWrapper/PageWrapper.tsx";

import Home from "./pages/home/Home.tsx";
import Housing from "./pages/housing/Housing.tsx";
import About from "./pages/about/About.tsx";
import NotFound from "./pages/notFound/NotFound.tsx";

const routes: RouteObject[] = [
  {
    element: <PageWrapper />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/housing/:housingId",
        element: <Housing />,
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
