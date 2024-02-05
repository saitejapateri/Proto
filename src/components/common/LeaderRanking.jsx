import { Avatar, Box, Stack, Typography } from "@mui/material";
import React from "react";
import palette from "../../theme/palette";

const LeaderRanking = ({ data, index, value }) => {
  return (
    <Stack
      direction={"row"}
      alignItems={"center"}
      justifyContent={"space-between"}
      // width={"298px"}
      height={"65px"}
      sx={{
        backgroundColor: index === 1 ? palette.grey[100] : "transparent",
        borderRadius: "5px",
        paddingLeft: "10px",
        paddingRight: "10px",
      }}
    >
      <Stack direction={"row"} alignItems={"center"} gap={"27px"}>
        {/* <Typography component={'p'} sx={{
          fontFamily: 'Poppins-Medium',
          fontSize: '14px',
          color: (theme) => theme.palette.grey[900]
        }}>{index}.</Typography> */}
        <Stack direction={"row"} alignItems={"center"} gap={"16px"}>
          <Avatar
            alt="Avatar"
            sx={{ width: 50, height: 50 }}
            src={data.profile_pic}
          />
          <Stack direction={"column"}>
            <Typography
              component={"p"}
              sx={{
                fontFamily: "Poppins",
                fontSize: "16px",
                fontWeight: 500,
                color: (theme) => theme.palette.grey[900],
              }}
            >
              {data.name}
            </Typography>
            <Typography
              component={"p"}
              sx={{
                fontFamily: "Poppins",
                fontSize: "12px",
                fontWeight: 400,
                color: (theme) => theme.palette.grey[900],
              }}
            >
              Avg: {value}%
            </Typography>
          </Stack>
        </Stack>
      </Stack>
      <Stack
        flexDirection={"flex-end"}
        width={"26px"}
        height={"26px"}
        justifyContent={"center"}
        alignItems={"center"}
        borderRadius={"50%"}
        bgcolor={data.rank <= 3 ? palette.success[200] : palette.primary[200]}
      >
        <Typography
          sx={{
            color :data.rank <=3 ? palette.success.main : palette.primary.main,
            fontWeight: "300",
            fontSize : '12px',
            lineHeight : '18.9px'
          }}
        >
          {data.rank}
        </Typography>
      </Stack>
    </Stack>
  );
};

export default LeaderRanking;
