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
  Button,
} from "@chakra-ui/react"
import { monthCalculator } from "src/util/monthCalculator"
import { months, thisYear, thisMonth } from "src/lib/monthData"
import NotesArea from "../NotesArea/NotesArea";
import { Link } from "@redwoodjs/router";
const MonthCalendarView = ({ month, year }) => {
  let formattedMonth = month.toString().padStart(2, '0');
  const thisMonth = parseInt(formattedMonth.slice(0, 2))

  const thisYear = month.slice(2, 6)
  const colWidth = '20mm'
  const fontSize = '9px'
  const monthYear = `${month}${year}`
  console.log('thisYear', monthYear)
  return (
    <Box className="page-break-before" id={`${month}${year}`}
    >
      <Flex direction={"column"} maxWidth={'8.5in'} >
        <Flex direction={"column"} position={'relative'} top={0} left={0}>
          <Text fontSize={'x-large'} textAlign={'center'} py={4}>{months[thisMonth]} <Link to={`/print#printHome}`}><Text as={'span'}>{year}</Text></Link></Text>

        </Flex>
        <TableContainer >
          <Table variant='striped' >

            <Thead>
              <Tr>
                <Th maxWidth={colWidth} fontSize={fontSize}  >Sunday</Th>
                <Th maxWidth={colWidth} fontSize={fontSize} >Monday</Th>
                <Th maxWidth={colWidth} fontSize={fontSize} >Tuesday</Th>
                <Th maxWidth={colWidth} fontSize={fontSize} >Wednesday</Th>
                <Th maxWidth={colWidth} fontSize={fontSize} >Thursday</Th>
                <Th maxWidth={colWidth} fontSize={fontSize} >Friday</Th>
                <Th maxWidth={colWidth} fontSize={fontSize} >Saturday</Th>
              </Tr>
            </Thead>
            <Tbody>
              {
                monthCalculator(thisMonth, thisYear).map((week, i) => {
                  return (
                    <Tr key={i}>
                      {week.map((day, j) => {
                        return (
                          <Td fontSize={fontSize} key={j}>{day}</Td>
                        )
                      })}
                    </Tr>
                  )
                })
              }

            </Tbody>

          </Table>
        </TableContainer>
        <Flex justifyContent={'space-between'}>
          <Button>Previous Month</Button>
          <Button>Next Month</Button>
        </Flex>
        <NotesArea />
      </Flex>
    </Box>
  )
}

export default MonthCalendarView
