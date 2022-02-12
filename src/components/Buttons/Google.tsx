import { signIn } from "next-auth/react"
import { FcGoogle } from "react-icons/fc"
import styles from "./index.module.scss"

export const Google = () => {
  return (
    <button
      onClick={() => {
        signIn("google")
      }}
      className={`${styles.btn} ${styles.google}`}
    >
      <FcGoogle />
      Login with Google
    </button>
  )
}
