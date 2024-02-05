import React from "react";
import { Typography, Stack } from "@mui/material";
import ReactCalendar from "./ReactCalendar/ReactCalendar";

function ReactCalendarComp() {
  return (
    <Stack>
      <Typography
        sx={{
          color: "#2E3A59",
          fontFamily: "Poppins",
          fontWeight: "500",
          fontSize: "20px",
          lineHeight: "28px",
        }}
      >
        Calendar
      </Typography>
      <Stack>
        <ReactCalendar />
      </Stack>
    </Stack>
  );
}

export default ReactCalendarComp;
