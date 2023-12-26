import { isLeapYear } from "src/util/monthCalculator"
import { daysInMonth, daysInMonthLeapYear } from "src/lib/monthData"
import { Box, Text, Flex } from "@chakra-ui/react"
import DayCalendarView from "../DayCalendarView/DayCalendarView"

const DaysInCalendar = ({monthsToDisplay}) => {
  const yearsArray = Object.keys(monthsToDisplay)
  const monthsArray: number[][] = Object.values(monthsToDisplay) // Provide the correct type information here


  return (
    <Box>
      {
        yearsArray.map((year, i) => {
          return (
            <Flex key={i} direction={'column'}>
              {/* <h2>{yearsArray[i]}</h2> */}
              {
                monthsArray[i].map((month: number, j: number) => { // Provide the correct type information here
                  const day = isLeapYear(parseInt(yearsArray[i])) ? daysInMonthLeapYear[month] : daysInMonth[month]
                  return (
                    <Flex key={j} direction={'column'}>
                    {
                      Array.from(Array(day).keys()).map((day, k) => {
                        return (
                          <DayCalendarView key={k} day={day} month={month} year={yearsArray[i]} />
                        )
                      })
                    }
                    </Flex>
                  )
                })
              }
            </Flex>
          )
        })
      }
    </Box>
  )
}

export default DaysInCalendar
