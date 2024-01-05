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
import { months, days } from "src/lib/monthData"
import NotesArea from "../NotesArea/NotesArea";
import { Link } from "@redwoodjs/router";
const MonthCalendarView = ({ month, year }) => {
  let formattedMonth = month.toString().padStart(2, '0');
  let formattedDay = (day)=>{
    return (parseInt(day) - 1).toString().padStart(2, '0')

  }
  const thisMonth = parseInt(formattedMonth.slice(0, 2))

  const thisYear = year
  const colWidth = '20mm'
  const fontSize = '9px'
  const monthYear = `${month}${year}`

  const previousMonth = ((parseInt(month) - 1) >= 0 ? (parseInt(month) - 1) : 11).toString().padStart(2, '0')
  const nextMonth = ((parseInt(month) + 1) <= 11 ? (parseInt(month) + 1) : "00").toString().padStart(2, '0')
  return (
    <Box className="page-break-before" id={`${month}${year}`}
    >
      <Flex direction={"column"} maxWidth={'8.5in'} justifyContent={'space-evenly'} mt={'75px'} >
        <Flex direction={"column"} position={'relative'} top={0} left={0} >
          <Text fontSize={'x-large'} textAlign={'center'} py={4}>{months[thisMonth]} <Link to={`/print#printHome}`}><Text as={'span'}>{year}</Text></Link></Text>

        </Flex>
        <Flex direction={'column'}>
          {/* days row */}
          <Flex direction={'row'}>
          { days.map((day, i) => {
            return (
              <Box w={'1in'}>{day}</Box>
            )
          })}
          </Flex>
          {/* calendar row */}
          {
                monthCalculator(thisMonth, thisYear).map((week, i) => {
                  return (
                    <Flex key={i}>
                      {week.map((day, j) => {
                        return (
                            <Link to={`/print#dayView${formattedDay(day)}${month}${year}`}>
                          <Flex fontSize={fontSize} key={j} border={'1px'} borderColor={'#bbb'} w={'1in'} h={'.75in'} justifyContent={'center'} alignItems={'center'}>
                              <Text fontSize={'lg'}>{day}</Text>
                            </Flex>
                            </Link>
                        )
                      })}
                    </Flex>
                  )
                })
              }

          </Flex>

        <Flex justifyContent={'space-between'} my={'20px'}>
          <Link to={`/print#${previousMonth}${year}`}><Button variant={'outline'} border={'1px'} borderColor={'#555'} rounded={'none'} color={'#555'}>Previous Month</Button></Link>
          <Link to={`/print#${nextMonth}${year}`}><Button variant={'outline'} border={'1px'} borderColor={'#555'} rounded={'none'} color={'#555'}>Next Month</Button></Link>

        </Flex>
        <NotesArea rows={15} />
      </Flex>
    </Box>
  )
}

export default MonthCalendarView
