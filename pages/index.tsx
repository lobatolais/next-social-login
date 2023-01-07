import { FC } from "react"

import type { NextPage } from "next/types"

import { Card } from "../src/components/Card"
import { Page } from "../src/components/Page"

const Home: FC<NextPage> = () => {
  return (
    <Page>
      <Card></Card>
    </Page>
  )
}

export default Home
