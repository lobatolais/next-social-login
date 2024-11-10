import { PropsWithChildren } from "react"

import styles from "./index.module.scss"

export const Card = ({ children }: PropsWithChildren) => {
  return <main className={styles.card}>{children}</main>
}
