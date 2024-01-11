import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import {DailyMorningPostEntryForm, DailyEveningPostEntryForm} from 'src/components/DailyPostEntryForm/DailyPostEntryForm'
import {   Tabs,
  TabList,
  Tab,
  TabPanel,
  TabPanels} from "@chakra-ui/react"

  
const DailyPage = () => {

  return (
    <>
      <MetaTags title="Daily" description="Daily page" />

      <h1>DailyPage</h1>



    </>
  )
}


export default DailyPage
