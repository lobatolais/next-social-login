import { FC, PropsWithChildren } from "react"

import styles from "./index.module.scss"

export const Page = ({ children }: PropsWithChildren) => {
  return <div className={styles.page_container}>{children}</div>
}
