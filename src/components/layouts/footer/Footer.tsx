import styles from "./Footer.module.scss";

import Logo from "src/components/common/logo/Logo.tsx";
import Copyright from "src/components/layouts/footer/copyright/Copyright.tsx";

interface FooterProps {
  className?: string;
}

function Footer({ className }: FooterProps) {
  return (
    <div className={`${styles.Footer} ${className}`}>
      <div className={styles.Footer__wrapper}>
        <Logo className={styles.Footer__Logo} theme={"white"} />
        <Copyright className={styles.Footer__Copyright} />
      </div>
    </div>
  );
}

export default Footer;
