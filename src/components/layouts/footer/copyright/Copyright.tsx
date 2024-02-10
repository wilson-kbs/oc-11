import styles from "./Copyright.module.scss";
import content from "src/contents/layouts/footer.json";

interface CopyrightProps {
  className?: string;
}

function Copyright({ className }: CopyrightProps) {
  return (
    <div className={`${styles.Copyright} ${className}`}>
      <p className={styles.Copyright__content}>{content.copyright}</p>
    </div>
  );
}

export default Copyright;
