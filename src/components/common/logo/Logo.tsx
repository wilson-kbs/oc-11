import styles from "./Logo.module.scss";

interface LogoProps {
  className?: string;
}

function Logo({ className }: LogoProps) {
  return <div className={`${styles.Logo} ${className}`}>Logo</div>;
}

export default Logo;
