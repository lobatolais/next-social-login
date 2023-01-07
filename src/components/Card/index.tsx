import { FC, PropsWithChildren } from "react"

import styles from "./index.module.scss"

export const Card: FC<PropsWithChildren> = ({ children }) => {
  return <main className={styles.card}>{children}</main>
}
