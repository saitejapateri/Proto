import React from "react";
import LeftNavigation from "./LeftNavigation.jsx";
import { Outlet, useLocation } from "react-router-dom";
import { Grid, Stack } from "@mui/material";
import TopNavigation from "./TopNavigation.jsx";
import palette from "../theme/palette.js";

function Root() {
  const isLogin = localStorage.getItem("isLogin");
  const path = useLocation();
  const loginPage = path.pathname === "/" ? true : false;
  const isLoginPage = !loginPage && isLogin;

  return (
    // <Grid container bgcolor={palette.primary[0]}>
    //   {isLoginPage && (
    //     <Stack sx={{ width: "80px" }}>
    //       <LeftNavigation />
    //     </Stack>
    //   )}
    //   <Grid container item xs>
    //     {isLoginPage && (
    //       <Grid item xs={12} style={{ height: "80px" }}>
    //         <TopNavigation />
    //       </Grid>
    //     )}
    //     <Grid item xs={12}>
    //       <Outlet />
    //     </Grid>
    //   </Grid>
    // </Grid>
    <Stack direction='row' bgcolor={palette.primary[0]}>
      {isLoginPage && <Stack><LeftNavigation /></Stack>}
      <Stack sx={{width : '100%'}}>
        {isLoginPage && <TopNavigation />}
        <Outlet />
      </Stack>
    </Stack>
  );
}

export default Root;
