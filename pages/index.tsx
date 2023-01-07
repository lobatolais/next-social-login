import { FC } from "react"

import type { NextPage } from "next/types"

import { Card } from "../src/components/Card"
import { Page } from "../src/components/Page"
import { SignIn } from "../src/components/SignIn"

const Home: FC<NextPage> = () => {
  return (
    <Page>
      <Card>
        <SignIn />
      </Card>
    </Page>
  )
}

export default Home
