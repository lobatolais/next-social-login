import { BsGithub } from "react-icons/bs"
import { signIn } from "next-auth/react"
import styles from "./index.module.scss"

export const Github = () => {
  return (
    <>
      <button
        onClick={() => {
          signIn("github")
        }}
        className={`${styles.btn} ${styles.github}`}
      >
        <BsGithub />
        Login with Github
      </button>
    </>
  )
}
