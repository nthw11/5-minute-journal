import {
  Box,
  Flex,
  Text,
  Grid,
} from "@chakra-ui/react"
import { months } from "src/lib/monthData"
import YearGrid from "../YearGrid/YearGrid"

import { monthsInCalendarDisplayArray, monthCalculator } from "src/util/monthCalculator"

const YearCalendarView = (

) => {
  const monthFrom = '102023'
  const monthTo = '072025'

  const monthsToDisplay = monthsInCalendarDisplayArray(monthFrom, monthTo)
  console.log('firstMonth', monthsToDisplay)

  return (
    <Flex direction={'column'} justify={'space-between'}>


      {
        Object.entries(monthsToDisplay).map(([year, months]) => (
          <YearGrid key={year} monthsToDisplay={months} year={year} />
        ))
      }
    </Flex>
  )
}

export default YearCalendarView
