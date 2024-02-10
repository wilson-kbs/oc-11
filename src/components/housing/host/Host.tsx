import styles from "./Host.module.scss";
import Avatar from "src/components/common/avatar/Avatar.tsx";

interface HostProps {
  className?: string;
}

function Host({ className }: HostProps) {
  return (
    <div className={`${styles.Host} ${className}`}>
      <div className={styles.Host__Name}>HOST NAME</div>
      <Avatar />
    </div>
  );
}

export default Host;
