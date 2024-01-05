import PrintHide from "../PrintHide/PrintHide"
import { ListItem, UnorderedList, Flex } from '@chakra-ui/react'
import { Link, routes } from '@redwoodjs/router'

const JournalNav = () => {
  return (
    // nav bar that will be on the left side of the journal page and reference the different pages
    <PrintHide>
      <Flex borderBottom={'1px solid'} borderColor={'gray.200'} py={2}>
        <UnorderedList>
          <ListItem>
            {/* link to daily page */}
            <Link to={routes.daily()}>Daily</Link>
          </ListItem>
          <ListItem>
            <Link to={routes.weekly()}>Weekly</Link>
          </ListItem>
          <ListItem>
            <Link to={routes.quarterly()}>Quarterly</Link>
          </ListItem>
        </UnorderedList>



      </Flex>
    </PrintHide>
  )
}

export default JournalNav
