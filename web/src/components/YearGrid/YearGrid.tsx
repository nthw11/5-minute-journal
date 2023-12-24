import {
  Box,
  Flex,
  Text,
  Grid,
} from "@chakra-ui/react"
// import { m } from "framer-motion"
import { months } from "src/lib/monthData"
interface MonthGridProps {
  months: string[];
  monthNames: string[];
  year: string;
}

const MonthGrid: React.FC<MonthGridProps> = ({ months, monthNames, year }) => {

  return (
    <Box p={8}>
      <Text fontWeight="bold" fontSize={'xl'} textAlign={'center'}>{year}</Text>
    <Grid templateColumns="repeat(3, 1fr)" gap={6}>
      {monthNames.map((name, index) => {
        const monthIndex = index.toString().padStart(2, '0');
        const isBold = months.includes(monthIndex);

        return (
          <Text key={name} fontWeight={isBold ? 'bold' : 'light'} >
            {name}
          </Text>
        );
      })}
    </Grid>
    </Box>
  );
};
const YearGrid = (monthsToDisplay, year) => {
  
  return <MonthGrid months={monthsToDisplay.monthsToDisplay} monthNames={months} year={monthsToDisplay.year} />;
}

export default YearGrid
