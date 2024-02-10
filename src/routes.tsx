import { createBrowserRouter, RouteObject } from "react-router-dom";

import PageWrapper from "./layouts/pageWrapper/PageWrapper.tsx";

import Home from "./pages/home/Home.tsx";
import Housing from "./pages/housing/Housing.tsx";
import About from "./pages/about/About.tsx";
import NotFound from "./pages/notFound/NotFound.tsx";
import LoaderService from "src/services/LoaderService.ts";

const routes: RouteObject[] = [
  {
    element: <PageWrapper />,
    children: [
      {
        path: "/",
        element: <Home />,
        errorElement: <NotFound />,
        loader: LoaderService.homePageLoader,
      },
      {
        path: "/housing/:housingId",
        element: <Housing />,
        errorElement: <NotFound />,
        loader: LoaderService.housingPageLoader,
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
