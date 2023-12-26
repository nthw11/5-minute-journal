import { daysInMonth, daysInMonthLeapYear } from 'src/lib/monthData'

export const monthCalculator = (month: number, year: number) => {
    const monthLength = isLeapYear(year)
    ? daysInMonthLeapYear[month]
    : daysInMonth[month]
  const monthStartDay = (month: number, year: number) => {
    const monthStr = (month + 1).toString()
    const yearStr = year.toString()
    const monthStartDay = new Date(`${yearStr}/${monthStr}/01`).getDay()

    return monthStartDay
  }

  const monthStart = monthStartDay(month, year)



  const monthLayout = []
  for (let i = 0; i < monthStart; i++) {
    monthLayout.push('')
  }
  for (let i = 1; i <= monthLength; i++) {
    monthLayout.push(i)
  }
  let monthWeekLayout = [[], [], [], [], [], []]
  for (let i = 0; i < monthLayout.length; i++) {
    monthWeekLayout[Math.floor(i / 7)].push(monthLayout[i])
  }

  return monthWeekLayout
}

export const isLeapYear = (year: number) => {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0
}

// type MonthYear = [string, string];

export const monthsInCalendarDisplayArray = (
  startMonthStr: string,
  endMonthStr: string
): Record<string, string[]> => {
  const startMonth = parseInt(startMonthStr.slice(0, 2));
  const startYear = parseInt(startMonthStr.slice(2));
  const endMonth = parseInt(endMonthStr.slice(0, 2));
  const endYear = parseInt(endMonthStr.slice(2));

  let result: Record<string, string[]> = {};
  let currentYear = startYear;
  let currentMonth = startMonth;

  while (
    currentYear < endYear ||
    (currentYear === endYear && currentMonth <= endMonth)
  ) {
    // Format the month with leading zero if necessary
    let formattedMonth = currentMonth.toString().padStart(2, '0');
    let formattedYear = currentYear.toString();

    // Initialize the year array if not already present
    if (!result[formattedYear]) {
      result[formattedYear] = [];
    }

    // Add the month to the year's array
    result[formattedYear].push(formattedMonth);

    // Increment month and check if it rolls over to the next year
    currentMonth++;
    if (currentMonth > 11) {
      currentMonth = 0;
      currentYear++;
    }
  }


  return result;
};
