import { Box, Button, Flex, FormControl, FormLabel, Text, Select, VStack } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { formatDateToMMYYYY } from 'src/util/monthCalculator';
import { months } from 'src/lib/monthData';
import 'react-datepicker/dist/react-datepicker.css';

const PrintMenu = ({ onMonthYearFromChange, onMonthYearToChange }) => {
  const [startMonth, setStartMonth] = useState<string>('');
  const [startYear, setStartYear] = useState<string>('');
  const [endMonth, setEndMonth] = useState<string>('');
  const [endYear, setEndYear] = useState<string>('');
  const years = Array.from({ length: 20 }, (_, i) => i + 2023);
  const startingYear = new Date().getFullYear();
  const startingYearShort = startingYear.toString().slice(2, 4);
  const [startDate, setStartDate] = useState<string>('');
  const [endDate, setEndDate] = useState<string>('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onMonthYearFromChange(startMonth.padStart(2,'0') + startYear);
    onMonthYearToChange(endMonth.padStart(2,'0') + endYear);
  }

    return (
      <Flex direction={'column'}>
      <FormControl>
        <Flex direction={'row'} gap={'8'}>
      <Flex direction={'column'}>

        <FormLabel>Month From</FormLabel>
        <Select
          placeholder="Select month"
          onChange={(e) => {
            setStartMonth(e.target.value);
          }}
          >
          {months.map((month, i) => (
            <option key={i} value={i}>
              {month}
            </option>
          ))}
        </Select>
        <FormLabel>Year From</FormLabel>
        <Select
          placeholder="Select year"
          defaultValue={years[startingYearShort]}
          onChange={(e) => {
            setStartYear(e.target.value);
          }}
          >
          {years.map((year, i) => (
            <option key={i} value={year}>
              {year}
            </option>
          ))}
        </Select>
          </Flex>
        <Flex direction={'column'}>
        <FormLabel>Month To</FormLabel>
        <Select
          placeholder="Select month"
          onChange={(e) => {
            setEndMonth(e.target.value);
          }}
          >
          {months.map((month, i) => (
            <option key={i} value={i}>
              {month}
            </option>
          ))}
        </Select>
        <FormLabel>Year To</FormLabel>
        <Select
          defaultValue={years[startingYearShort]}
          placeholder="Select year"
          onChange={(e) => {
            setEndYear(e.target.value);
          }}
          >
          {years.map((year, i) => (
            <option key={i} value={year}>
              {year}
            </option>
          ))}
        </Select>
        </Flex>
        </Flex>
        <Button
          type="submit"
          onClick={(e) => {
            handleSubmit(e);
          }}
          >
          Submit
        </Button>

      </FormControl>
      </Flex>
    );
  };

export default PrintMenu;
