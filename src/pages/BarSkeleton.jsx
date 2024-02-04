import Skeleton from '@mui/material/Skeleton';
import {Stack} from '@mui/material';
import React from 'react'

function BarSkeleton() {
  return <Stack sx={{width:'98%', height:'300px'}} spacing={1}>
    <Stack>
        <Skeleton variant="rounded" width="20%"/>
    </Stack>
    <Skeleton variant="rounded" width="100%" height="100%"/>
  </Stack>
}

export default BarSkeleton
