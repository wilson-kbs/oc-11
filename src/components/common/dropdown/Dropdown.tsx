import styles from "./Dropdown.module.scss";
import type { PropsWithChildren } from "react";

interface DropdownProps {
  className?: string;
  title: string;
}

function Dropdown({
  className,
  children,
  ...props
}: PropsWithChildren<DropdownProps>) {
  return (
    <div className={`${styles.Dropdown} ${className}`}>
      <div className={styles.Dropdown__title}>{props.title}</div>
      <div className={styles.Dropdown__content}>{children}</div>
    </div>
  );
}

export default Dropdown;
