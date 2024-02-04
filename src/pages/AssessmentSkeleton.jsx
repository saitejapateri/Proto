import * as React from "react";
import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";

const skeletonStyle = {
  animation: "wave",
  height: 40,
  marginBottom: '10px', 
  marginLeft : '10px',
  marginRight : '10px'
};

function AssessmentSkeleton() {
  return (
    <Box sx={{ width: "100%" }}>
      <Skeleton width={200} sx={skeletonStyle} />
      <Skeleton sx={skeletonStyle} />
      <Skeleton sx={skeletonStyle} />
      <Skeleton sx={skeletonStyle} />
      <Skeleton sx={skeletonStyle} />
      <Skeleton sx={skeletonStyle} />
      <Skeleton sx={skeletonStyle} />
      <Skeleton sx={skeletonStyle} />
      <Skeleton sx={skeletonStyle} />
      <Skeleton sx={skeletonStyle} />
      <Skeleton variant="circular" sx={{width : '20px', height : '20px', marginLeft : '40%'}}/>
    </Box>
  );
}

export default AssessmentSkeleton;
