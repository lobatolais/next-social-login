import { useSession } from "next-auth/react"
import React from "react"
import { Login } from "../Login"
import { Logged } from "../Logged"
import styles from "./index.module.scss"

export const Card = () => {
  const { data: session } = useSession()

  return (
    <div className={styles.page_container}>
      <section>
        <div
          className={`${styles.slider} ${
            session ? styles.logged : styles.login
          }`}
        >
          <Login />
          <Logged />
        </div>
      </section>
    </div>
  )
}
