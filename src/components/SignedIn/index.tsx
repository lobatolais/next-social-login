import { FC } from "react"
import { useSession, signOut } from "next-auth/react"

import styles from "./index.module.scss"

export const SignedIn: FC = () => {
  const { data: session } = useSession()

  return (
    <div className={styles.signedin_container}>
      <div className={styles.signedin_content}>
        <p>
          You&apos;re signed in
          <br />
          as {session?.user?.name}
        </p>
      </div>
      <button onClick={() => signOut()} className={styles.btn_signout}>
        Sign out
      </button>
    </div>
  )
}
