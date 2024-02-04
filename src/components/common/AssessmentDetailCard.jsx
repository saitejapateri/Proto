import React from "react";
import { Box, Stack, Typography, Icon } from "@mui/material";
import CountUp from "react-countup";
import palette from "../../theme/palette";
import assessmentLogo from '../../images/assess.svg'
import assignmentLogo from '../../images/assisgnment.svg'
import attendanceLogo from '../../images/attendance.svg'
import avgPerLogo from '../../images/avgper.svg'
import codignLogo from '../../images/coding.svg'

const colors = ["#E7EEFE", "#E6F2FD", "#FFF8EC", "#FEECEB", "#EDFAEE"];
const titles = [
  "Attendance",
  "Avg.Performance",
  "Assessment",
  "Assignment",
  "Coding",
];
const icons = [attendanceLogo,avgPerLogo,assessmentLogo,assignmentLogo,codignLogo]
const AssessmentDetailCard = ({
  icon,
  iconBgColor,
  iconSize = "medium",
  title,
  contentMagnitude,
  contentType = "",
  showCountingAnimation,
}) => {
  return (
    <Box
      sx={{
        height: {
          sm: "80px", // Height for small screens
          md: "60px", // Height for medium screens
          lg: "80px", // Height for large screens
          xl: "80px",
        },
        minHeight: "60px",
        minWidth: "100px",
        width: "100%",
        maxWidth: "230px",
        borderRadius: "10px",
        boxShadow: "10px 10px 32px 0px rgba(22, 22, 22, 0.04)",
        padding: "10px 27px 10px 10px",
        border: "0",
        backgroundColor : palette.primary[0],
        border : `1px solid ${palette.grey[100]}`
      }}
    >
      <Stack
        direction={"row"}
        gap="0 10px"
        alignItems="center"
        sx={{ width: "100%", height: "100%" }}
      >
        <Stack
          direction="row"
          alignItems="center"
          sx={{
            width: "60px",
            height: "60px",
            background: colors[iconBgColor],
            borderRadius: "5px",
            padding: "15px",
            '@media (max-width:900px)' : {
              width : '40px',
              height : '40px'
            }
          }}
        >
          <img src={icons[icon]} width="30px" height="30px"/>
        </Stack>

        <Stack direction="column" justifyContent="center">
          <Typography
            variant="caption2"
            fontFamily="Poppins"
            fontWeight="500"
            fontSize="14px"
          >
            {titles[title]}
          </Typography>
          <Typography
            variant="h5"
            fontFamily="Poppins"
            fontWeight="500px"
            fontSize="25px"
            color={palette.grey[900]}
            fontStyle='normal'
            sx={{marginTop : '0.5rem'}}
          >
            {showCountingAnimation ? (
              <CountUp
                start={0}
                end={contentMagnitude}
                duration={3}
                suffix={
                  contentType === "percent"
                    ? "%"
                    : contentType === "time"
                    ? " Min"
                    : contentType === "count"
                    ? ""
                    : ""
                }
              />
            ) : contentType === "percent" ? (
              `${contentMagnitude}%`
            ) : contentType === "time" ? (
              `${contentMagnitude} Min`
            ) : (
              contentMagnitude
            )}
          </Typography>
        </Stack>
      </Stack>
    </Box>
  );
};

export default AssessmentDetailCard;
