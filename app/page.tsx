import { Card } from "src/components/Card"
import { CardAnimation } from "src/components/CardAnimation"
import { Page as Home } from "src/components/Page"

export default function Page() {
  return (
    <Home>
      <Card>
        <CardAnimation />
      </Card>
    </Home>
  )
}
