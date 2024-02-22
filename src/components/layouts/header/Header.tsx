import styles from "./Header.module.scss";
import content from "src/contents/layouts/header.json";

import { Link } from "react-router-dom";

import RoutesService from "src/services/RoutesService.ts";

import Navigation from "src/components/layouts/header/navigation/Navigation.tsx";
import Logo from "src/components/common/logo/Logo.tsx";

interface HeaderProps {
  className?: string;
}

function Header({ className }: HeaderProps) {
  return (
    <header className={`${styles.Header} ${className}`}>
      <Link to={RoutesService.getHomeRoute()}>
        <Logo className={styles.Header_Logo} />
      </Link>
      <Navigation routes={Object.values(content.navigation)} />
    </header>
  );
}

export default Header;
