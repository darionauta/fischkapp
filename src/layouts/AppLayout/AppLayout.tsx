import React, { ReactElement, ReactNode } from "react";
import styles from "./AppLayout.module.css";

type Props = {
  children: ReactNode
}

export default function ({children}: Props): ReactElement {
  return (
    <div className={styles.layout}>{children}</div>
  )
}