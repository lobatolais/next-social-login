import { FacebookButton } from "src/components/Buttons/FacebookButton"
import { GithubButton } from "src/components/Buttons/GithubButton"
import { GoogleButton } from "src/components/Buttons/GoogleButton"

import styles from "./index.module.scss"

export const SignIn = () => {
  return (
    <div className={styles.signin_container}>
      <h1>Sign in with your account</h1>
      <div className={styles.btn_group}>
        <GithubButton />
        <GoogleButton />
        <FacebookButton />
      </div>
    </div>
  )
}
