import styles from "./Main.module.scss";
import type { PropsWithChildren } from "react";

interface MainProps {
  className?: string;
}

function Main({ className, children }: PropsWithChildren<MainProps>) {
  return <div className={`${styles.Main} ${className}`}>{children}</div>;
}

export default Main;
