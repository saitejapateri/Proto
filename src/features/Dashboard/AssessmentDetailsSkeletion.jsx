import React from 'react'
import {Box, Stack} from '@mui/material'
import Skeleton from '@mui/material/Skeleton';

function AssessmentDetailsSkeleton() {
  return <Stack direction="row" spacing={2}>
    <Box>
        <Skeleton variant="rounded" width="233px" height="80px" />
    </Box>
    <Box>
        <Skeleton variant="rounded" width="233px" height="80px" />
    </Box>
    <Box>
        <Skeleton variant="rounded" width="233px" height="80px" />
    </Box>
    <Box>
        <Skeleton variant="rounded" width="233px" height="80px" />
    </Box>
    <Box>
        <Skeleton variant="rounded" width="233px" height="80px" />
    </Box>
  </Stack>
}

export default AssessmentDetailsSkeleton