import { FC } from "react"

import { FacebookButton } from "../Buttons/FacebookButton"
import { GoogleButton } from "../Buttons/GoogleButton"

import styles from "./index.module.scss"

export const SignIn: FC = () => {
  return (
    <div className={styles.signin_container}>
      <h1>Sign in with your account</h1>
      <div className={styles.btn_group}>
        <button>Github</button>
        <GoogleButton />
        <FacebookButton />
      </div>
    </div>
  )
}
