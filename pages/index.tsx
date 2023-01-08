import { FC } from "react"
import Head from "next/head"

import type { NextPage } from "next/types"

import { Card } from "src/components/Card"
import { CardAnimation } from "src/components/CardAnimation"
import { Page } from "src/components/Page"

const Home: FC<NextPage> = () => {
  return (
    <>
      <Head>
        <title>Next Social Login</title>
      </Head>
      <Page>
        <Card>
          <CardAnimation />
        </Card>
      </Page>
    </>
  )
}

export default Home
