// LIBRARIES
import React from "react";
// STYLE
import './Day.css'
// COMPONENTS
import Slot from "./Slot";

// COMPONENT START
const Day = (props:any) => {

  // Function that generates random appointments (between 0 and 15) that last 1 hour, between 8 AM and 8 PM
  const generateRandomAppointments = () => {
    const appointments = [];
    for (let i = 0; i < Math.floor(Math.random() * 16); i++) {
      const start = new Date(props.date.setHours(Math.floor(Math.random() * (20 - 8 + 1)) + 8));
      start.setMinutes(0);
      const end = new Date(start)
      end.setHours(end.getHours() + 1 );
      appointments.push({ start, end });
    }
    appointments.sort((a,b) => a.start.getTime() - b.start.getTime());
    return appointments;
  }

  const appointments = generateRandomAppointments();

  return (
    <div className="Day">
      <div className="DateStringDisplay">
        <p style={{color:'gray'}}>{props.date.toLocaleDateString('fr-FR',{ weekday: 'short'})}</p>
        <p style={{fontWeight:'bold'}}>{props.date.toLocaleDateString('fr-FR', { day:'numeric', month:'short'})}</p>
      </div>

      {appointments.slice(0,10).map((appointment) => {
        {return (
          <div>
            <Slot date={appointment} />
          </div>
        )}
      })}

    </div>
  )
}

export default Day;