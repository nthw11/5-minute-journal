import {
  Box,
  Flex,
  Text,
  Grid,
} from "@chakra-ui/react"
import { months } from "src/lib/monthData"
import YearGrid from "../YearGrid/YearGrid"

const YearCalendarView = (
  { monthsToDisplay }
) => {

  return (
    <Flex direction={'column'} justify={'space-between'}  id={'printHome'} mt={'75px'}>

      {
        Object.entries(monthsToDisplay).map(([year, months]) => (
          <YearGrid key={year} monthsToDisplay={months} year={year} />
        ))
      }

    </Flex>
  )
}

export default YearCalendarView
