import { signIn } from "next-auth/react"
import { BsFacebook } from "react-icons/bs"
import styles from "./index.module.scss"

export const Facebook = () => {
  return (
    <button
      onClick={() => {
        signIn("facebook")
      }}
      className={`${styles.btn} ${styles.facebook}`}
    >
      <BsFacebook />
      Login with Facebook
    </button>
  )
}
