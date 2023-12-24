import { ListItem, UnorderedList } from '@chakra-ui/react'
import { Link, routes } from '@redwoodjs/router'

const AccountNav = () => {
  return (
    // nav bar that runs along the top of the page with a logo on the left and a profile icon on the right
    <nav>

      <UnorderedList>

        <ListItem>Logo</ListItem>
        <ListItem>
          <Link to={routes.home()}>Home</Link>

        </ListItem>
        <ListItem>
          <Link to={routes.print()}>Print Layout</Link>
        </ListItem>
      </UnorderedList>


    </nav>
  )
}

export default AccountNav
