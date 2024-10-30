// LIBRARIES
import React from "react";
// STYLE
import './Day.css'
// COMPONENTS
import Slot from "./Slot";
// TYPES
interface DayProps {
  dayDate: Date;
}

// COMPONENT START
const Day: React.FC<DayProps> = ({ dayDate }) => {

  // Function that generates random appointments (between 0 and 15) that last 1 hour, between 8 AM and 8 PM
  const generateRandomAppointments = () => {
    const appointments = [];

    for (let i = 0; i < Math.floor(Math.random() * 16); i++) {                              
      const start = new Date(dayDate.setHours(Math.floor(Math.random() * (20 - 8 + 1)) + 8)); // Choose random time between 8AM & 8PM
      start.setMinutes(0);                                                                    // Resets the minutes so that the hour is even
      const end = new Date(start)                                                         
      end.setHours(end.getHours() + 1 );                                                      
      appointments.push({ start, end });
    }
    appointments.sort((a,b) => a.start.getTime() - b.start.getTime());                        // Sorts appointments by time ascending
    return appointments;
  }

  // Array where the appointments for this specific day are stored
  const appointments = generateRandomAppointments();

  return (
    <div className="Day">
      <div className="DateStringDisplay">
        <p style={{color:'gray'}}>{dayDate.toLocaleDateString('fr-FR',{ weekday: 'short'})}</p>
        <p style={{fontWeight:'bold'}}>{dayDate.toLocaleDateString('fr-FR', { day:'numeric', month:'short'})}</p>
      </div>

      {appointments.slice(0,10).map((appointment) => {
        {return (
          <div>
            <Slot appointment={appointment} />
          </div>
        )}
      })}

    </div>
  )
}

export default Day;