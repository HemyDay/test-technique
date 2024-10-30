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

  // Function to handle button clicks to previous and next week
  const handleCalendarNavigation = (attemptedChange:'previous'|'next') => {
    let change = attemptedChange === 'previous' ? -7 : 7;
    addDaysToDate(displayedDates[0], change) < TODAY ? 
    console.log('Impossible to go back in time') 
    : 
    setDisplayedDates(determineDatesToDisplay(addDaysToDate(displayedDates[0], change),7));
  }

  return (
    <section className="Calendar">

      <button 
        onClick={() => handleCalendarNavigation('previous')} 
        // disabled={displayedDates[0] < TODAY ? true : false}
        >
          {'<'}
        </button>

      {displayedDates.slice(0,9).map((date) => {
        {return (
          <Day key={date.toDateString()} date={date} />
        )}
      })}
      
      <button 
        onClick={() => handleCalendarNavigation('next')}
      > 
        {'>'}
      </button>

    </section>
  )

}

export default Calendar;