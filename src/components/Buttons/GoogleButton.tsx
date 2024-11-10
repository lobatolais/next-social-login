"use client"

import { signIn } from "next-auth/react"
import { FcGoogle } from "react-icons/fc"

import styles from "./index.module.scss"

export const GoogleButton = () => {
  return (
    <button
      onClick={() => {
        signIn("google")
      }}
      className={`${styles.btn_google}`}
    >
      <FcGoogle className={styles.provider_icon} />
      Sign in with Google
    </button>
  )
}
