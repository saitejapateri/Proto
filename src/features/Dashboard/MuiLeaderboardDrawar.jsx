import React from "react";
import { SwipeableDrawer, Typography, Stack } from "@mui/material";
import LeaderRanking from "../../components/common/LeaderRanking";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import typography from "../../theme/typography.js";
import palette from "../../theme/palette.js";

function MuiLeaderboardDrawar({ data, open, onClose }) {
  return (
    <SwipeableDrawer anchor="right" open={open} onClose={onClose} onOpen={onClose}>
      <Stack sx={{ width: "364px" }}>
        <Stack
          direction="row"
          sx={{ gap: "15px", marginTop: "19px", marginLeft: "27px" }}
          alignItems={"center"}
        >
          <KeyboardBackspaceIcon sx={{cursor : 'pointer'}} onClick={onClose} />
          <Typography
            variant='h5'
            sx={{
              color: `${palette.grey[900]}`,
            }}
          >
            Leaderboard
          </Typography>
        </Stack>
        <Stack sx={{margin : '20px 33px 49px 33px'}}>
          {data?.slice(0, 10).map((item, index) => (
            <LeaderRanking
              key={index + 1}
              data={item}
              value={item.percentage}
              index={index + 1}
            />
          ))}
        </Stack>
      </Stack>
    </SwipeableDrawer>
  );
}

export default MuiLeaderboardDrawar;
