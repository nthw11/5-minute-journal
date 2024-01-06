import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const AccountProfilePage = () => {
  return (
    <>
      <MetaTags title="AccountProfile" description="AccountProfile page" />

      <h1>AccountProfilePage</h1>
      <p>
        Find me in{' '}
        <code>./web/src/pages/AccountProfilePage/AccountProfilePage.tsx</code>
      </p>
      <p>
        My default route is named <code>accountProfile</code>, link to me with `
        <Link to={routes.accountProfile()}>AccountProfile</Link>`
      </p>
    </>
  )
}

export default AccountProfilePage
