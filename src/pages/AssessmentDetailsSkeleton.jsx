import React from 'react'
import {Box, Stack} from '@mui/material'
import Skeleton from '@mui/material/Skeleton';

function AssessmentDetailsSkeleton() {
  return <Stack direction="row" spacing={2} sx={{marginTop : '20pxgi'}}>
    <Box>
        <Skeleton variant="rounded" width="233px" height="60px" />
    </Box>
    <Box>
        <Skeleton variant="rounded" width="233px" height="60px" />
    </Box>
    <Box>
        <Skeleton variant="rounded" width="233px" height="60px" />
    </Box>
    <Box>
        <Skeleton variant="rounded" width="233px" height="60px" />
    </Box>
    <Box>
        <Skeleton variant="rounded" width="233px" height="60px" />
    </Box>
  </Stack>
}

export default AssessmentDetailsSkeleton