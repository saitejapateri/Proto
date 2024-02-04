import React from "react";
// import { useSelector } from 'react-redux'
import {
  TableRow,
  TableCell,
  Typography,
  IconButton,
  Stack,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
// import { RightArrowIcon } from '../../../../assets/Svg/RightArrowIcon'
import ArrowUpwardOutlinedIcon from "@mui/icons-material/ArrowUpwardOutlined";

function secondsToMinutes(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  if (remainingSeconds > 0)
    return `${minutes} minutes ${remainingSeconds} seconds`;
  return `${minutes} minutes`;
}

function getInternetQuality(speed) {
  if (speed >= 1 && speed <= 3) return "Poor";
  else if (speed >= 4 && speed <= 7) return "Average";
  else return "Excellent";
}

const commonStyles = {
  fontFamily : 'Poppins',
  fontWegiht : '400',
  fontSize : '14px'
}

const MuiCustomStudentTableRow = ({ key, stu, viewStudentResult }) => {
  const theme = useTheme();
  // const { currentSectionTab } = useSelector((state) => state.assessment)
  // const transformData = (data) => {
  //   return {
  //     subject: data.subject,
  //     semester: data.semester,
  //     total_timespent: data.total_timespent || "N/A",
  //     submission_type: data.submission_type || "N/A",
  //     internet_speed: data.internet_speed || "N/A",
  //     percentage_scored: data.percentage_scored || "N/A",
  //   };
  // };
  // const transformedStu = transformData(stu);

  return (
    <TableRow
      onClick={() => {
        viewStudentResult(stu);
      }}
      key={key}
      sx={{
        cursor: "pointer",
        background:
          stu.submission_type === "not attempted"
            ? theme.palette.error[200]
            : "",
        "&:hover": {
          background:
            stu.submission_type === "Timeout"
              ? theme.palette.error[300]
              : theme.palette.grey[100], // Set your desired background color
        }
      }}
    >
      <TableCell
        scope="row"
        sx={{ border: "none", borderRadius: "6px 0 0 6px"}}
      >
        <Typography
          variant="body1"
          sx={{
            ...commonStyles,
            color: theme.palette.grey[900],
          }}
        >
          {stu.subject}
        </Typography>
      </TableCell>
      <TableCell scope="row" sx={{ border: "none" }}>
        <Typography variant="body1" sx={{ ...commonStyles,color: theme.palette.grey[900] }}>
          {stu.total_timespent}Min
        </Typography>
      </TableCell>
      <TableCell scope="row" sx={{ border: "none" }}>
        <Typography
          variant="body1"
          sx={{
            ...commonStyles,
            color:
              stu.submission_type === 3
                ? theme.palette.success[700]
                : stu.submission_type === 1
                ? theme.palette.info[700]
                : stu.submission_type === 4
                ? theme.palette.error[700]
                : stu.submission_type === 2
                ? theme.palette.warning[700]
                : theme.palette.error[800],
          }}
        >
          {stu.submission_type === 1
            ? "Timeout"
            : stu.submission_type === 2
            ? "Interrupted"
            : stu.submission_type === 3
            ? "On Submit"
            : "Tabswitch"}
        </Typography>
      </TableCell>
      <TableCell scope="row" sx={{ border: "none" }}>
        <Typography variant="body1" sx={{...commonStyles, color: theme.palette.grey[900] }}>
          {getInternetQuality(stu.internet_speed)}
        </Typography>
      </TableCell>
      <TableCell scope="row" sx={{ border: "none" }}>
        <Typography variant="body1" sx={{...commonStyles, color: theme.palette.grey[900] }}>
          {stu.semester}
        </Typography>
      </TableCell>
      {/* <TableCell scope='row' sx={{ border: 'none' }}>
        <Typography variant='body1' sx={{ color: theme.palette.grey[900] }}>
          {stu.effective_time_utilization}%
        </Typography>
      </TableCell> */}
      {/* <TableCell scope='row' sx={{ border: 'none' }}>
        <Typography variant='body1' sx={{ color: theme.palette.grey[900] }}>
          {stu.submitted_at}
        </Typography>
      </TableCell> */}
      <TableCell
        scope="row"
        sx={{ border: "none", borderRadius: "0 6px 6px 0" }}
      >
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography variant="body1" sx={{...commonStyles, color: theme.palette.grey[900] }}>
            {stu.percentage_scored}%
          </Typography>
          {/* <IconButton
            aria-label='delete'
            onClick={() => {
              viewStudentResult(stu)
            }}
            sx={{
              height: '24px',
              width: '24px',
              background: theme.palette.grey[500],
              borderRadius: '6px',
              '&:hover': {
                background: theme.palette.grey[900], // Set your desired background color
              },
            }}
          >
            <ArrowUpwardOutlinedIcon
              color={theme.palette.grey[100]}
              sx={{
                transform: 'rotate(90deg)',
                fontSize: '20px',
                fontWeight: 600,
              }}
            />
          </IconButton> */}
        </Stack>
      </TableCell>
    </TableRow>
  );
};

export default MuiCustomStudentTableRow;
