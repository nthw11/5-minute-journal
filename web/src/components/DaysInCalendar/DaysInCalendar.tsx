import { isLeapYear } from "src/util/monthCalculator"
import { daysInMonth, daysInMonthLeapYear } from "src/lib/monthData"
import { Box, Text, Flex } from "@chakra-ui/react"
import DayCalendarView from "../DayCalendarView/DayCalendarView"

const DaysInCalendar = ({monthsToDisplay}) => {
    return (
      <Box>
        {Object.entries(monthsToDisplay).map(([year, months], i) => (
          <Flex key={i} direction="column">
            {(months as string[]).map((monthStr, j) => {
              const month = parseInt(monthStr);
              const daysCount = isLeapYear(parseInt(year)) ? daysInMonthLeapYear[month] : daysInMonth[month];

              return (
                <Flex key={j} direction="column">
                  {Array.from({ length: daysCount }, (_, k) => (
                    <DayCalendarView key={k} day={k + 1} month={month} year={parseInt(year)} />
                  ))}
                </Flex>
              );
            })}
          </Flex>
        ))}
      </Box>
    );
  // )
}

export default DaysInCalendar
