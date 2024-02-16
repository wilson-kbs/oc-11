import styles from "./Navigation.module.scss";

import type { INavigationRoute } from "src/types/header/INavigationRoute.ts";

import { Link, useLocation } from "react-router-dom";
import RoutesService from "src/services/RoutesService.ts";

interface NavigationProps {
  className?: string;
  routes: INavigationRoute[];
}

function Navigation({ className, routes }: NavigationProps) {
  const location = useLocation();

  return (
    <div className={`${styles.Navigation} ${className}`}>
      {routes.map((route) => (
        <Link
          key={route.name}
          to={RoutesService.getRoute(route.id)}
          className={`${styles.Navigation__link} ${RoutesService.getRoute(route.id) === location.pathname ? styles.Navigation__link_active : ""}`}
        >
          {route.name}
        </Link>
      ))}
    </div>
  );
}

export default Navigation;
