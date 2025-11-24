import type { ReactNode } from "react";
import styles from "./style.module.css";

export default function TransformContainer({
  children,
}: {
  children: ReactNode;
}) {
  return <div className={styles.transformContainer}>{children}</div>;
}
