"use client"

import { signIn } from "next-auth/react"
import { BsFacebook } from "react-icons/bs"

import styles from "./index.module.scss"

export const FacebookButton = () => {
  return (
    <button
      onClick={() => {
        signIn("facebook")
      }}
      className={styles.btn_facebook}
    >
      <BsFacebook className={styles.provider_icon} />
      Sign in with Facebook
    </button>
  )
}
