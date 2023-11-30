import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const DailyPage = () => {
  return (
    <>
      <MetaTags title="Daily" description="Daily page" />

      <h1>DailyPage</h1>
      <p>
        Find me in <code>./web/src/pages/DailyPage/DailyPage.tsx</code>
      </p>
      <p>
        My default route is named <code>daily</code>, link to me with `
        <Link to={routes.daily()}>Daily</Link>`
      </p>
    </>
  )
}

export default DailyPage
