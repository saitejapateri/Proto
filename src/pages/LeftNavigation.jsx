import React from "react";
import { Stack, Box } from "@mui/material";
import palette from "../theme/palette";
import edwiselyLogo from "../images/edwisely.svg";
import dashboardImg from "../images/dashboardimg.svg";
import courseImg from "../images/courseimg.svg";
import logoutImg from "../images/logout.svg";
import courseActiveImg from '../images/courseActive.svg';
import dashboardNull from "../images/dashboardNULL.svg";
import { useLocation, useNavigate} from "react-router-dom";

function LeftNavigation() {


  const location = useLocation();
  const navigate = useNavigate();

  //handling dashboard click
  const handleDashboard = () => {
    navigate('/dashboard')
  }

  //handling course click
  const handleCourseClick = () => {
    window.scrollTo(0,document.body.scrollHeight)
  }

  //handling logout 
  const handleLogout = () => {
    navigate('/');
  }

  return (
    <>
      <Stack direction="column" bgcolor={palette.grey[100]} sx={{width : '80px'}}>
        <Box sx={{ margin: "22px 22px 30.98px 22px", cursor : 'pointer'}}>
          <img src={edwiselyLogo} width="36px" height="42.02px" alt='edwiselyLogo'/>
        </Box>

        {/* dashboardBox */}
        <Box
          sx={{
            marginBottom: "16px",
            width: "80px",
            height: "56px",
            display: "flex",
            cursor : 'pointer'
          }}
          alignItems={"center"}
        >
          {location.pathname === "/dashboard" && (
            <Box
              component="span"
              bgcolor="primary.main"
              sx={{
                width: "3px",
                height: "40px",
                display: "inline",
                borderRadius: "5px",
              }}
            ></Box>
          )}
          <Box
            sx={{
              marginLeft: "16px",
              width: "40px",
              height: "40px",
              borderRadius: "10px",
              padding: "8px",
            }}
            bgcolor={
              location.pathname === "/dashboard" ? palette.primary[200] : ""
            }
          >
            <img
              src={
                location.pathname === "/dashboard"
                  ? dashboardImg
                  : dashboardNull
              }
              width="24px"
              height="24px"
              alt="dashboardLogo"
              onClick={handleDashboard}
            />
          </Box>
        </Box>

        {/* courseBox */}
        <Box
          sx={{
            marginBottom: "477px",
            width: "80px",
            height: "56px",
            display: "flex",
            cursor : 'pointer'
          }}
          alignItems={"center"}
        >
          {location.pathname.includes("/course") && (
            <Box
              component="span"
              bgcolor="primary.main"
              sx={{
                width: "3px",
                height: "40px",
                display: "inline",
                borderRadius: "5px",
              }}
            ></Box>
          )}
          <Box
            sx={{
              marginLeft: "16px",
              width: "40px",
              height: "40px",
              borderRadius: "10px",
              padding: "8px",
            }}
            bgcolor={location.pathname.includes('/course') ? palette.primary[200] : ''}
          >
            <img
              src={location.pathname.includes("/course") ? courseActiveImg : courseImg}
              width="24px"
              height="24px"
              alt="courseLogo"
              onClick={handleCourseClick}
            />
          </Box>
        </Box>

        {/* logut box */}
        <Box
          sx={{
            height: "56px",
            marginBottom: "12px",
            padding: "16px 26px 16px 27px",
            cursor: "pointer",
          }}
        >
          <img src={logoutImg} onClick={handleLogout} alt='logoutLogo'/>
        </Box>
      </Stack>
    </>
  );
}

export default LeftNavigation;
