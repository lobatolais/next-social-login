"use client"

import { signIn } from "next-auth/react"
import { BsGithub } from "react-icons/bs"

import styles from "./index.module.scss"

export const GithubButton = () => {
  return (
    <button
      onClick={() => {
        signIn("github")
      }}
      className={`${styles.btn_github}`}
    >
      <BsGithub className={styles.provider_icon} />
      Sign in with Github
    </button>
  )
}
