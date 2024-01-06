import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const WeeklyPage = () => {
  return (
    <>
      <MetaTags title="Weekly" description="Weekly page" />

      <h1>WeeklyPage</h1>
      <p>
        Find me in <code>./web/src/pages/WeeklyPage/WeeklyPage.tsx</code>
      </p>
      <p>
        My default route is named <code>weekly</code>, link to me with `
        <Link to={routes.weekly()}>Weekly</Link>`
      </p>
    </>
  )
}

export default WeeklyPage
