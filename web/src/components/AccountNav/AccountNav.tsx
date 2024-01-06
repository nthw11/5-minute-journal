import { ListItem, UnorderedList, Flex } from '@chakra-ui/react'
import { Link, routes } from '@redwoodjs/router'
import PrintHide from '../PrintHide/PrintHide'

const AccountNav = () => {
  return (
    // nav bar that runs along the top of the page with a logo on the left and a profile icon on the right
      <PrintHide>
        <Flex direction={'column'}  borderBottom={'1px solid'} borderColor={'gray.200'} py={2}>


      <UnorderedList>

        <ListItem>Logo</ListItem>
        <ListItem>
          <Link to={routes.home()}>Home</Link>
        </ListItem>
        <ListItem>
<Link to={routes.dashboard()}>Dashboard</Link>
</ListItem>
        <ListItem>
          <Link to={routes.print()}>Print Layout</Link>
        </ListItem>
      </UnorderedList>

    </Flex>
      </PrintHide>

  )
}

export default AccountNav
