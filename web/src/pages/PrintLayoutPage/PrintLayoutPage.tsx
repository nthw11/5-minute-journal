import { Flex, Text } from '@chakra-ui/react'
import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import DaysInCalendar from 'src/components/DaysInCalendar/DaysInCalendar'
import MonthCalendarView from 'src/components/MonthCalendarView/MonthCalendarView'
import MonthsInCalendar from 'src/components/MonthsInCalendar/MonthsInCalendar'
import PrintButton from 'src/components/PrintButton/PrintButton'
import YearCalendarView from 'src/components/YearCalendarView/YearCalendarView'
import { months } from 'src/lib/monthData'
import { monthsInCalendarDisplayArray } from 'src/util/monthCalculator'

const PrintLayoutPage = () => {
  const monthFrom = '112023'
  const monthTo = '002024'
  const monthsToDisplay = monthsInCalendarDisplayArray(monthFrom, monthTo)
console.log('monthsToDisplay', monthsToDisplay)
  return (

    <Flex direction={'column'} maxWidth={'full'} justifyContent={'center'} align={'center'} id={'printHome'}>
      <Flex direction={'column'} maxWidth={'full'} justifyContent={'center'} align={'center'} >
      <PrintButton />
      <Text>monthFrom= {monthFrom}</Text>
      <Text>monthTo= {monthTo}</Text>
      <YearCalendarView monthsToDisplay={monthsToDisplay} />
      </Flex>
      <MonthsInCalendar monthsToDisplay={monthsToDisplay} />
      <DaysInCalendar monthsToDisplay={monthsToDisplay} />
    </Flex>
  )
}

export default PrintLayoutPage
