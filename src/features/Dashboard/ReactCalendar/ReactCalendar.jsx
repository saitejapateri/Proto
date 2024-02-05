import { useState } from "react";
import Calendar from "react-calendar";
import {styled} from '@mui/material/styles'
import 'react-calendar/dist/Calendar.css';
import './ReactCalendar.css'

const StyledCalendar = styled(Calendar)({
})


function ReactCalendar() {
  const [value, onChange] = useState(new Date());

  return (
    <StyledCalendar
      onChange={onChange}
      value={value}
      next2Label={null}
      prev2Label={null}
      view="month"
    />
  );
}

export default ReactCalendar;
