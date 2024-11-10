"use client"

import { useSession, signOut } from "next-auth/react"
import Lottie from "lottie-react"
import { BsFillCheckCircleFill } from "react-icons/bs"

import confetti from "public/lotties/confetti.json"

import styles from "./index.module.scss"

export const SignedIn = () => {
  const { data: session } = useSession()

  return (
    <div className={styles.signedin_container}>
      <div className={styles.signedin_content}>
        <BsFillCheckCircleFill />
        <p>
          You&apos;re signed in
          <br />
          as {session?.user?.name}
        </p>
      </div>
      <button onClick={() => signOut()} className={styles.btn_signout}>
        Sign out
      </button>
      <div className={styles.lottie_container}>
        <Lottie animationData={confetti} loop={false} />
      </div>
    </div>
  )
}
