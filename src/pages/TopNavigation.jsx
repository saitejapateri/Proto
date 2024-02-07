import React from "react";
import { Stack, Box, Typography } from "@mui/material";
import avatar from "../images/avatar.png";
import palette from "../theme/palette";

function TopNavigation() {
  return (
    <>
      <Box
        width={"100%"}
        height={"80px"}
        sx={{
          display: "flex",
          flexDirection: "row",
          borderBottom: `2px solid ${palette.grey[200]}`,
        }}
        bgcolor={palette.primary[0]}
        justifyContent={"space-between"}
      >
        <Stack direction="row">
          <Typography
            sx={{
              fontFamily: "Poppins",
              fontSize: "24px",
              fontWeight: "400",
              lineHeight: "32px",
              marginTop: "27px",
              marginLeft: "18px",
            }}
          >
            Good morning, Maharram 👋
          </Typography>
        </Stack>
        <Stack sx={{ marginTop: "15px", marginRight: "40px" }}>
          <img
            src={avatar}
            width={"50px"}
            height={"50px"}
            style={{ borderRadius: "50%" }}
          />
        </Stack>
      </Box>
    </>
  );
}

export default TopNavigation;
