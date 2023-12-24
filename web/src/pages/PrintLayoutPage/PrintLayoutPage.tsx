import { Flex } from '@chakra-ui/react'
import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import MonthCalendarView from 'src/components/MonthCalendarView/MonthCalendarView'
import YearCalendarView from 'src/components/YearCalendarView/YearCalendarView'

const PrintLayoutPage = () => {
  return (

    <Flex direction={'column'} maxWidth={'full'} justifyContent={'center'} align={'center'}>
      <YearCalendarView />
      <MonthCalendarView />
    </Flex>
  )
}

export default PrintLayoutPage
