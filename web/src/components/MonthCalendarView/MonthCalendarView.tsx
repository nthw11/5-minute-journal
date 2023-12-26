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
  let formattedDay = (day)=>{
    return (parseInt(day) - 1).toString().padStart(2, '0')

  }
  const thisMonth = parseInt(formattedMonth.slice(0, 2))

  const thisYear = month.slice(2, 6)
  const colWidth = '20mm'
  const fontSize = '9px'
  const monthYear = `${month}${year}`

  const previousMonth = ((parseInt(month) - 1) <= 0 ? (parseInt(month) - 1) : 11).toString().padStart(2, '0')
  const nextMonth = ((parseInt(month) + 1) <= 11 ? (parseInt(month) + 1) : "00").toString().padStart(2, '0')
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
                          <Td fontSize={fontSize} key={j}>
                            <Link to={`/print#dayView${formattedDay(day)}${month}${year}`}>{day}</Link></Td>
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
          <Link to={`/print#${previousMonth}${year}`}><Button>Previous Month</Button></Link>
          <Link to={`/print#${nextMonth}${year}`}><Button>Next Month</Button></Link>

        </Flex>
        <NotesArea />
      </Flex>
    </Box>
  )
}

export default MonthCalendarView
