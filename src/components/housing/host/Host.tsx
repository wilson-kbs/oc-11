import styles from "./Host.module.scss";
import type { IHost } from "src/types/models/IHost.ts";
import Avatar from "src/components/common/avatar/Avatar.tsx";

interface HostProps {
  className?: string;
  host: IHost;
}

function Host({ className, ...props }: HostProps) {
  return (
    <div className={`${styles.Host} ${className}`}>
      <div className={styles.Host__Name}>{props.host.name}</div>
      <Avatar url={props.host.picture} />
    </div>
  );
}

export default Host;
