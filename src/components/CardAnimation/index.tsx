"use client"

import { useSession } from "next-auth/react"

import { SignedIn } from "../SignedIn"
import { SignIn } from "../SignIn"

import styles from "./index.module.scss"

export const CardAnimation = () => {
  const { data: session } = useSession()

  return (
    <div
      className={`${styles.slider} ${
        session ? styles.signedin : styles.signin
      }`}
    >
      <SignIn />
      <SignedIn />
    </div>
  )
}
