import styles from "./Logo.module.scss";
import logoSrc from "public/images/logo.svg";
import logoWhiteSrc from "public/images/logo-white.svg";
import { useMemo } from "react";

const logoMap = {
  default: logoSrc,
  white: logoWhiteSrc,
};

interface LogoProps {
  className?: string;
  theme?: "default" | "white";
}

function Logo({ className, theme = "default" }: LogoProps) {
  const logo = useMemo(() => {
    return logoMap[theme] || logoMap.default;
  }, [theme]);
  return (
    <img className={`${styles.Logo} ${className}`} src={logo} alt="Logo" />
  );
}

export default Logo;
