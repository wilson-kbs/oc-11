import styles from "./Header.module.scss";

import content from "src/contents/layouts/header.json";
import Navigation from "src/components/layouts/header/navigation/Navigation.tsx";
import Logo from "src/components/common/logo/Logo.tsx";
import { Link } from "react-router-dom";

interface HeaderProps {
  className?: string;
}

function Header({ className }: HeaderProps) {
  return (
    <header className={`${styles.Header} ${className}`}>
      <Link to="/">
        <Logo />
      </Link>
      <Navigation routes={Object.values(content.navigation)} />
    </header>
  );
}

export default Header;
