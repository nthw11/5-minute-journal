import MonthCalendarView from "../MonthCalendarView/MonthCalendarView"

const MonthsInCalendar = ({monthsToDisplay}) => {
  // create an array of months to display out of the monthsToDisplay object
  const yearsArray = Object.keys(monthsToDisplay)

  const monthsArray: number[][] = Object.values(monthsToDisplay) // Provide the correct type information here
  
  return (
    <div>
      {
        yearsArray.map((year, i) => {
          return (
            <div key={i}>
              {/* <h2>{yearsArray[i]}</h2> */}
              {
                monthsArray[i].map((month: number, j: number) => { // Provide the correct type information here
                  return (
                    <MonthCalendarView key={j} month={month} year={yearsArray[i]} /> // Use the correct variable name here
                  )
                })
              }
            </div>
          )
        })
      }
    </div>
  )
}

export default MonthsInCalendar
