import React from "react"
import { Facebook } from "../Buttons/Facebook"
import { Github } from "../Buttons/Github"
import { Google } from "../Buttons/Google"
import styles from "./index.module.scss"

export const Login = () => {
  return (
    <div className={styles.login_container}>
      <h1>
        Choose your way to login <span>👋</span>
      </h1>
      <div className={styles.btn_group}>
        <Github />
        <Google />
        <Facebook />
      </div>
    </div>
  )
}
