import styles from "./Navigation.module.scss";
import { Link } from "react-router-dom";
import type { INavigationRoute } from "src/types/header/INavigationRoute.ts";
interface NavigationProps {
  className?: string;
  routes: INavigationRoute[];
}

function Navigation({ className, routes }: NavigationProps) {
  return (
    <div className={`${styles.Navigation} ${className}`}>
      {routes.map((route) => (
        <Link to={route.path} className={styles.Navigation__link}>
          {route.name}
        </Link>
      ))}
    </div>
  );
}

export default Navigation;
