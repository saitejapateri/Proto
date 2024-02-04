import { useState } from "react";
import Calendar from "react-calendar";
import "./CalendarC.css";

function CalendarC() {
  const [value, onChange] = useState(new Date());

  return (
    <Calendar
      id="calendar"
      onChange={onChange}
      value={value}
      next2Label={null}
      prev2Label={null}
      view="month"
    />
  );
}

export default CalendarC;
