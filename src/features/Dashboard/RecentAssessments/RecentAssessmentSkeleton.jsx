import React from 'react'
import Skeleton from '@mui/material/Skeleton';
import {Stack} from '@mui/material';

function RecentAssessmentSkeleton() {
  return <Stack sx={{width:'98%', height:'300px', margin : '10px'}} spacing={1}>
  <Stack>
      <Skeleton variant="rounded" width="20%"/>
  </Stack>
  <Skeleton variant="rounded" width="100%" height="100%"/>
</Stack>
}

export default RecentAssessmentSkeleton;

