import { useState } from 'react'
import { Flex, Text } from '@chakra-ui/react'
import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import DaysInCalendar from 'src/components/DaysInCalendar/DaysInCalendar'

import MonthsInCalendar from 'src/components/MonthsInCalendar/MonthsInCalendar'

import PrintHide from 'src/components/PrintHide/PrintHide'
import PrintMenu from 'src/components/PrintMenu/PrintMenu'
import YearCalendarView from 'src/components/YearCalendarView/YearCalendarView'
import { months } from 'src/lib/monthData'
import { monthsInCalendarDisplayArray } from 'src/util/monthCalculator'
import { formatDateToMMYYYY } from 'src/util/monthCalculator'

import { journalName } from 'src/lib/userData'

const PrintLayoutPage = () => {
  const [monthYearFrom, setMonthYearFrom] = useState<string>('102023')
  const [monthYearTo, setMonthYearTo] = useState<string>('112023')
  const [monthFromName, setMonthFromName] = useState<string>('')
  const [monthToName, setMonthToName] = useState<string>('')

  const handleMonthYearFrom = (monthYearFrom: string) => {
    setMonthFromName(months[parseInt(monthYearFrom.slice(0, 2))])
    setMonthYearFrom(monthYearFrom)
  }
  const handleMonthYearTo = (monthYearTo: string) => {
    setMonthToName(months[parseInt(monthYearTo.slice(0, 2))])
    setMonthYearTo(monthYearTo)
  }
  const monthsToDisplay = monthsInCalendarDisplayArray(
    monthYearFrom,
    monthYearTo
  )
  const yearFrom = monthYearFrom.slice(2)
  const yearTo = monthYearTo.slice(2)

  return (
    <>
      <MetaTags title={journalName} />
      <Flex
        direction={'column'}
        maxWidth={'full'}
        justifyContent={'center'}
        align={'center'}
      >
        {/* options div */}
        <Flex
          direction={'column'}
          maxWidth={'full'}
          justifyContent={'center'}
          align={'center'}
          width={'8.5in'}
          height={'11in'}
        >
          <PrintHide>
            <PrintMenu
              onMonthYearFromChange={handleMonthYearFrom} // Add this line
              onMonthYearToChange={handleMonthYearTo}
            />
          </PrintHide>
          <Flex direction={'column'}>
            <Text as={'h1'} textTransform={'uppercase'} fontSize={'xx-large'}>
              {journalName}
            </Text>
            <Text as={'h2'}>
              From {monthFromName} {yearFrom} to {monthToName} {yearTo}{' '}
            </Text>
          </Flex>
          
        </Flex>
        {/* calendar begins here */}
        <YearCalendarView monthsToDisplay={monthsToDisplay} />
        <MonthsInCalendar monthsToDisplay={monthsToDisplay} />
        <DaysInCalendar monthsToDisplay={monthsToDisplay} />
      </Flex>
    </>
  )
}

export default PrintLayoutPage
