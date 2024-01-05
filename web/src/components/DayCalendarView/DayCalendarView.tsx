import { Flex, Box, Text, Circle, UnorderedList, ListItem, ListIcon, Square, HStack, VStack, Button } from '@chakra-ui/react'
import { Link } from '@redwoodjs/router'
import { days, months } from 'src/lib/monthData'
import { activeRoutine, activeMorningLists, activeEveningLists, activeConsumptionList } from 'src/lib/userData'
import square from 'src/Icons/square.svg'
import NotesArea from '../NotesArea/NotesArea'
import { getLunarPhase } from 'src/util/monthCalculator'
import MoonPhase from '../LunarPhaseGrid/MoonPhase'


const DayCalendarView = ({ day, month, year }) => {
  const dayOfWeek = new Date(year, month, day).getDay()
  const dayName = days[dayOfWeek]
  const monthName = months[month]
  const dayNumber = parseInt(day)

  type DateDetails = {
    year: number;
    month: number;
    day: number;
  };

  function getAdjacentDays(year: number, month: number, day: number): { yesterday: string, today: Date, tomorrow: string } {
    // Create a date object (months are 0-indexed in JavaScript)
    const date = new Date(year, month, day);

    // Calculate tomorrow
    const tomorrow = new Date(date);
    tomorrow.setDate(tomorrow.getDate() + 1);

    // Calculate yesterday
    const yesterday = new Date(date);
    yesterday.setDate(yesterday.getDate() - 1);

    const today = new Date(date);

    const formatDate = (date: Date): string => {
      const d = date.getDate().toString().padStart(2, '0');
      const m = (date.getMonth()).toString().padStart(2, '0'); // Adjust month to 1-index
      const y = date.getFullYear().toString();
      return `${d}${m}${y}`;
    };

    return {
      yesterday: formatDate(yesterday),
      tomorrow: formatDate(tomorrow),
      today,

    };
  }



  const { yesterday, today, tomorrow } = getAdjacentDays(year, month, day);



  return (
    <Box className='page-break-before' id={`dayView${day.toString().padStart(2, '0')}${month}${year}`} width={'8.5in'} height={'11in'} padding={'5px'} >

      {/* full page flex */}
      <Flex direction={'column'} height={'1in'} mt={'40px'} >
        <Flex direction={'column'} maxWidth={'full'} >
          {/* nav section */}
          <Flex gap={'20px'}>
            <Text color={'#555'} fontWeight={'medium'} fontSize={'20px'} textTransform={'uppercase'} >{dayName}</Text>
            <Text fontSize={'20px'} fontWeight={'bold'} > {dayNumber}</Text>
            <Link to={`/print#${month}${year}`}>
              <Button variant={'outline'} border={'1px'} borderColor={'#555'} rounded={'none'} fontSize={'20px'} color={'#555'} > {monthName}</Button>
            </Link>
            <Link to={`/print#printHome`}>
              <Button variant={'outline'} border={'1px'} borderColor={'#555'} rounded={'none'} fontSize={'20px'} color={'#555'}> {year} </Button>
            </Link>
            <Link to={`/print#dayView${yesterday}`}>
              <Button variant={'outline'} border={'1px'} borderColor={'#555'} rounded={'none'} color={'#555'}>Yesterday</Button>
            </Link>
            <Link to={`/print#dayView${tomorrow}`}>
              <Button variant={'outline'} border={'1px'} borderColor={'#555'} rounded={'none'} color={'#555'}>Tomorrow</Button>
            </Link>
            <VStack>
              {/* <Text>{getLunarPhase(today)}</Text> */}
            <Text fontSize={'xs'} fontWeight={'light'} textTransform={'uppercase'}>Lunar phase</Text>
            <MoonPhase date={today}/>
            </VStack>
          </Flex>
        </Flex>
        {/* day section */}
        <Flex height={'5in'} >
          {/* top line */}
          <Flex justify={'space-between'} width={'full'} my={'2'} borderBottom={'1px'} height={'.25in'}>
            <Text fontWeight={'semibold'}>MORNING</Text>
            <Text>TIME:</Text>
            <Text marginRight={'150px'}>HOURS SLEPT</Text>
          </Flex>
        </Flex>
        {/* Next row */}
        <HStack height={'0.25in'} borderBottom={'1px'} >
          <Text fontSize={'sm'}>MORNING ROUTINE</Text>
          <HStack gap={'30px'} w={'40%'}>

            {activeRoutine.map((task, i) => (
              <Flex key={i}><svg width="25" height="25" viewBox="0 -6 20 40">
                <rect width="20" height="20" style={{ fill: 'none' }} stroke={'#555'} />
              </svg><Text fontSize={'sm'} textTransform={'uppercase'}>{task}</Text></Flex>
            ))}

          </HStack>
          <HStack width={'20%'}><Text>ATTITUDE:</Text>
            {Array.from({ length: 10 }, (_, i) => i + 1).map(number => (
              <Square
                key={number}
                size={'16px'}
                borderWidth={'1px'}
                borderColor={'black'}
              >
                <Text fontSize={'xs'}>{number}</Text>

              </Square>
            ))}</HStack>
        </HStack>
        {/* Notes sections */}
        <Flex direction={'column'} gap={2} my={2}>

          {activeMorningLists.map((list, i) => (
            <NotesArea header={list} rows={4} lineHeight={'16px'} headerSize={'12px'} />
          ))}
        </Flex>
        {/* evening section */}
        <Flex height={'5in'} direction={'column'} gap={2} >
          {/* FIRST EVENING ROW */}
          <Flex width={'full'} my={'2'} borderBottom={'1px'} height={'.25in'}>
            <Text fontWeight={'semibold'}>EVENING</Text>
            <Text ml={'250px'}>TIME:</Text>
            <HStack ml={'90px'} ><Text>PRODUCTIVITY:</Text>
              {Array.from({ length: 10 }, (_, i) => i + 1).map(number => (
                <Square
                  key={number}
                  size={'16px'}
                  borderWidth={'1px'}
                  borderColor={'black'}
                >
                  <Text fontSize={'xs'}>{number}</Text>

                </Square>
              ))}</HStack>

          </Flex>
          {/* SECOND EVENING ROW */}
          <HStack height={'0.25in'} borderBottom={'1px'} >
            <Text fontSize={'sm'}>CONSUMPTION</Text>
            <HStack gap={'30px'} w={'40%'}>
              {/* CONSUMPTION LIST */}
              {activeConsumptionList.map((task, i) => (
                <Flex key={i}><svg width="25" height="25" viewBox="0 -6 20 40">
                  <rect width="20" height="20" style={{ fill: 'none' }} stroke={'black'} />
                </svg><Text fontSize={'sm'} textTransform={'uppercase'}>{task}</Text></Flex>
              ))}

            </HStack>
            <HStack width={'20%'} ml={'27px'}><Text>ATTITUDE:</Text>
              {Array.from({ length: 10 }, (_, i) => i + 1).map(number => (
                <Square
                  key={number}
                  size={'16px'}
                  borderWidth={'1px'}
                  borderColor={'black'}
                >
                  <Text fontSize={'xs'}>{number}</Text>

                </Square>
              ))}</HStack>
          </HStack>

          {/* notes sections */}
          <Flex direction={'column'} gap={2}>

            {activeEveningLists.map((list, i) => (
              <NotesArea header={list} rows={4} lineHeight={'16px'} headerSize={'12px'} key={i} />
            ))}
          </Flex>
        </Flex>
      </Flex>

    </Box>
  )
}

export default DayCalendarView
