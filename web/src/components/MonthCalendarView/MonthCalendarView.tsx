import {
  Box,
  Flex,
  Text,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react"
import { monthCalculator } from "src/util/monthCalculator"
import { months, thisYear, thisMonth } from "src/lib/monthData"
const MonthCalendarView = () => {

  return (
    <Box>
      <Flex direction={"column"}>
        <Flex direction={"column"}>
        <Text>{months[thisMonth]}</Text>
        <Text>{thisYear}</Text>
        </Flex>
        <TableContainer>
          <Table variant='simple'>

            <Thead>
              <Tr>
                <Th>Sunday</Th>
                <Th>Monday</Th>
                <Th>Tuesday</Th>
                <Th>Wednesday</Th>
                <Th>Thursday</Th>
                <Th>Friday</Th>
                <Th>Saturday</Th>
              </Tr>
            </Thead>
            <Tbody>
              {
                monthCalculator(thisMonth, thisYear).map((week, i) => {
                  return (
                    <Tr key={i}>
                      {week.map((day, j) => {
                        return (
                          <Td key={j}>{day}</Td>
                        )
                      })}
                    </Tr>
                  )
                })
              }

            </Tbody>
            <Tfoot>
              <Tr>
                <Th>Previous Month</Th>
                <Th>Next Month</Th>
                
              </Tr>
            </Tfoot>
          </Table>
        </TableContainer>
      </Flex>
    </Box>
  )
}

export default MonthCalendarView
