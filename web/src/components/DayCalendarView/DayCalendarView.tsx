import {Flex, Box, Text} from '@chakra-ui/react'
import { days, months } from 'src/lib/monthData'

const DayCalendarView = ({day, month, year}) => {
  const dayOfWeek = new Date(year, month, day).getDay()
  const dayName = days[dayOfWeek]

  const dayNumber = parseInt(day) + 1
  return (
    <Box className='page-break-before' id={`dayView${day}${month}${year}`} maxWidth={'8.5in'} maxH={'11in'} >

    <Flex>
      {/* <Text>{dayName}{months[parseInt(month)]}{dayNumber}</Text> */}
      <Text>{day}</Text>
    </Flex>
    </Box>
  )
}

export default DayCalendarView
