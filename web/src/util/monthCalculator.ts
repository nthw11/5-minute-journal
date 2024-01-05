import { daysInMonth, daysInMonthLeapYear } from 'src/lib/monthData'

export const monthCalculator = (month: number, year: number) => {
  const yearStr = year.toString()

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

export const formatDateToMMYYYY = (date: Date): string => {
  const month = (date.getMonth()).toString().padStart(2, '0');
  const year = date.getFullYear().toString();
  return month + year;
}

export const getLunarPhase = (date: Date): string => {
  // Date of a known full moon (e.g., January 1, 2000)
  const knownFullMoon = new Date('2023-12-13T22:33:00Z');
  const lunarCycleLength = 29.53; // Average length of a lunar cycle in days

  // Calculate the difference in days
  const diffInDays = (date.getTime() - knownFullMoon.getTime()) / (1000 * 60 * 60 * 24);
  const lunarAge = diffInDays % lunarCycleLength;

  // Determine the lunar phase
  if (lunarAge < 1.84566) {
      return 'New Moon';
  } else if (lunarAge < 5.53699) {
      return 'Waxing Crescent';
  } else if (lunarAge < 9.22831) {
      return 'First Quarter';
  } else if (lunarAge < 12.91963) {
      return 'Waxing Gibbous';
  } else if (lunarAge < 16.61096) {
      return 'Full Moon';
  } else if (lunarAge < 20.30228) {
      return 'Waning Gibbous';
  } else if (lunarAge < 23.99361) {
      return 'Last Quarter';
  } else if (lunarAge < 27.68493) {
      return 'Waning Crescent';
  } else {
      return 'New Moon';
  }
}



