import React from "react";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import LeaderRanking from "../components/common/LeaderRanking";
import { Box, Typography } from "@mui/material";
import typography from "../theme/typography";

const LeaderBoardDrawar = ({ data, open, onClose }) => {
  return (
    <SwipeableDrawer anchor="right" open={open} onClose={onClose}>
      <Typography
        
        sx={{
          fontFamily: "Poppins",
          fontWeight: 500,
          fontSize: "20px",
          color: "grey.900",
          marginLeft : '20px',
          marginTop : '20px',
        }}
      >
        <ArrowBackIcon style={{marginRight : '10px', cursor :'pointer'}} onClick={onClose}/>
        Leaderboard
      </Typography>
      <Box sx={{ width: "350px", padding : '10px 30px'}}>
        {data?.slice(0, 10).map((item, index) => (
          <LeaderRanking
            key={index + 1}
            data={item}
            value={item.percentage}
            index={index + 1}
          />
        ))}
      </Box>
    </SwipeableDrawer>
  );
};

export default LeaderBoardDrawar;
