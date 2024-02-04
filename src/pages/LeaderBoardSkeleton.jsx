import React from "react";
import { Box, Stack } from "@mui/material";
import Skeleton from "@mui/material/Skeleton";

function LeaderBoardSkeleton() {
  return (
    <Stack>
        <Stack>
            <Skeleton variant="rectangular" height='60px' sx={{margin : '10px', borderRadius : '5px'}} />
        </Stack>
      <Stack
        direction="row"
        sx={{
          alignItems: "center",
          margin: "10px",
          justifyContent: "space-between",
        }}
        
      >
        <Stack
          direction="row"
          sx={{ alignItems: "center",gap : '10px' }}
          
          width={'60%'}
        >
          <Skeleton variant="circular" width={50} height={50} />
          <Skeleton variant="rectangular" width={43} height={10.5} />
        </Stack>
        <Skeleton variant="circular" width={20} height={20} />
      </Stack>
      <Stack
        direction="row"
        sx={{
          alignItems: "center",
          margin: "10px",
          justifyContent: "space-between",
        }}
        
      >
        <Stack
          direction="row"
          sx={{ alignItems: "center",gap : '10px' }}
          
          width={'60%'}
        >
          <Skeleton variant="circular" width={50} height={50} />
          <Skeleton variant="rectangular" width={43} height={10.5} />
        </Stack>
        <Skeleton variant="circular" width={20} height={20} />
      </Stack>
      <Stack
        direction="row"
        sx={{
          alignItems: "center",
          margin: "10px",
          justifyContent: "space-between",
        }}
        
      >
        <Stack
          direction="row"
          sx={{ alignItems: "center",gap : '10px' }}
          
          width={'60%'}
        >
          <Skeleton variant="circular" width={50} height={50} />
          <Skeleton variant="rectangular" width={43} height={10.5} />
        </Stack>
        <Skeleton variant="circular" width={20} height={20} />
      </Stack>
      <Stack
        direction="row"
        sx={{
          alignItems: "center",
          margin: "10px",
          justifyContent: "space-between",
        }}
        
      >
        <Stack
          direction="row"
          sx={{ alignItems: "center",gap : '10px' }}
          
          width={'60%'}
        >
          <Skeleton variant="circular" width={50} height={50} />
          <Skeleton variant="rectangular" width={43} height={10.5} />
        </Stack>
        <Skeleton variant="circular" width={20} height={20} />
      </Stack>
      <Stack
        direction="row"
        sx={{
          alignItems: "center",
          margin: "10px",
          justifyContent: "space-between",
        }}
        
      >
        <Stack
          direction="row"
          sx={{ alignItems: "center",gap : '10px' }}
          
          width={'60%'}
        >
          <Skeleton variant="circular" width={50} height={50} />
          <Skeleton variant="rectangular" width={43} height={10.5} />
        </Stack>
        <Skeleton variant="circular" width={20} height={20} />
      </Stack>
    </Stack>
  );
}

export default LeaderBoardSkeleton;
