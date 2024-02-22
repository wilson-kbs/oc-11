import styles from "./Logo.module.scss";
import logoSrc from "public/images/logo.svg";
import logoWhiteSrc from "public/images/logo-white.svg";

const logoMap = {
  default: logoSrc,
  white: logoWhiteSrc,
};

interface LogoProps {
  className?: string;
  theme?: "default" | "white";
}

function Logo({ className, theme = "default" }: LogoProps) {
  return (
    <img
      className={`${styles.Logo} ${className}`}
      src={logoMap[theme] || logoMap.default}
      alt="Logo"
    />
  );
}

export default Logo;
