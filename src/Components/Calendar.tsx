// LIBRARIES
import React, { useState } from "react"
// STYLE
import './Calendar.css'
// COMPONENTS
import Day from "./Day";

// COMPONENT START
const Calendar = () => {

  // Function to add or substarct days to a date
    const addDaysToDate = (date: Date, days:number) => {
      const newDate = new Date(date);
      newDate.setDate(newDate.getDate() + days);
      return newDate;
    }


  // Function to determine dates to display in the calendar
  const determineDatesToDisplay = (startDate : Date, span : number) => {
    let output = [];

    for (let i = 0; i < span ; i++) {
      output.push(addDaysToDate(startDate, i))
    }

    return output
  }

  // Initial state: Display 7 days starting from today's date
  const TODAY: Date = new Date();
  const [displayedDates, setDisplayedDates] = useState(determineDatesToDisplay(TODAY,7))

  
  console.log(displayedDates)

  return (
    <section className="Calendar">

      {displayedDates.map((date) => {
        {return (
          <Day key={date.toISOString} date={date} />
        )}
      })}
      
    </section>
  )

}

export default Calendar;