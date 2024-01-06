import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import DailyCell from 'src/components/DailyCell'
import YearCalendarView from 'src/components/YearCalendarView/YearCalendarView'

const HomePage = () => {
  return (
    <>
      <MetaTags title="Home" description="Home page" />

      <h1>HomePage</h1>
      <p>
        Find me in <code>./web/src/pages/HomePage/HomePage.tsx</code>
      </p>
      <p>
        My default route is named <code>home</code>, link to me with `
        <Link to={routes.home()}>Home</Link>`
        {/* <YearCalendarView monthFrom={'012023'} monthTo={'122023'} /> */}
      </p>
    </>
  )
}

export default HomePage
