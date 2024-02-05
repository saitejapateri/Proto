import React from "react";
import { Stack, Box, Typography } from "@mui/material";
import palette from "../../theme/palette";

function ProfileCard({ name, profilePic, email }) {
  return (
    <Stack direction="column">
      <Typography
        variant = 'h5'
        sx={{
          color: palette.grey[800],
          marginBottom: "12px",
        }}
      >
        User profile
      </Typography>
      <Stack
        direction="row"
        sx={{ padding: "10px", borderRadius: "10px", gap: "10px" }}
        bgcolor={palette.grey[100]}
      >
        <Box>
          <img
            src={profilePic}
            alt=""
            width="48px"
            height="48px"
            style={{ borderRadius: "4px" }}
          />
        </Box>
        <Stack>
          <Typography
            sx={{
              fontFamily: "Poppins",
              fontWeight: "500",
              fontSize: "16px",
              lineHeight: "24px",
              color : `${palette.grey[800]}`
            }}
          >
            {name}
          </Typography>
          <Typography
            sx={{
              fontFamily: "Poppins",
              fontWeight: "400",
              fontSize: "12px",
              lineHeight: "16px",
              color : `${palette.grey[400]}`
            }}
          >
            {email}
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  );
}

export default ProfileCard;
