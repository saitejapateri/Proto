import React from "react";
import { Box, Stack } from "@mui/material";
import Skeleton from "@mui/material/Skeleton";

const commonStyles = {
  marginBottom: "10px",
  borderRadius: "17.5px",
};

function CourseSkeleton() {
  return (
    <>
      <Stack direction="row" spacing={{md : 2,lg : 4}} sx={{marginLeft : '23px'}}>
        <Box>
          <Skeleton
            animation="wave"
            width={244}
            height={183}
            variant="rectangular"
            sx={{ ...commonStyles, borderRadius: "17.5px 17.5px 0px 0px" }}
          />
          <Skeleton
            animation="wave"
            width={56}
            variant="rectangular"
            sx={{ ...commonStyles }}
          />
          <Skeleton
            animation="wave"
            width={213}
            variant="rectangular"
            sx={{ ...commonStyles }}
          />
          <Skeleton
            animation="wave"
            width={108}
            variant="rectangular"
            sx={{ ...commonStyles }}
          />
        </Box>
        <Box>
          <Skeleton
            animation="wave"
            width={244}
            height={183}
            variant="rectangular"
            sx={{ ...commonStyles, borderRadius: "17.5px 17.5px 0px 0px" }}
          />
          <Skeleton
            animation="wave"
            width={56}
            variant="rectangular"
            sx={{ ...commonStyles }}
          />
          <Skeleton
            animation="wave"
            width={213}
            variant="rectangular"
            sx={{ ...commonStyles }}
          />
          <Skeleton
            animation="wave"
            width={108}
            variant="rectangular"
            sx={{ ...commonStyles }}
          />
        </Box>
        <Box>
          <Skeleton
            animation="wave"
            width={244}
            height={183}
            variant="rectangular"
            sx={{ ...commonStyles, borderRadius: "17.5px 17.5px 0px 0px" }}
          />
          <Skeleton
            animation="wave"
            width={56}
            variant="rectangular"
            sx={{ ...commonStyles }}
          />
          <Skeleton
            animation="wave"
            width={213}
            variant="rectangular"
            sx={{ ...commonStyles }}
          />
          <Skeleton
            animation="wave"
            width={108}
            variant="rectangular"
            sx={{ ...commonStyles }}
          />
        </Box>
        <Box>
          <Skeleton
            animation="wave"
            width={244}
            height={183}
            variant="rectangular"
            sx={{ ...commonStyles, borderRadius: "17.5px 17.5px 0px 0px" }}
          />
          <Skeleton
            animation="wave"
            width={56}
            variant="rectangular"
            sx={{ ...commonStyles }}
          />
          <Skeleton
            animation="wave"
            width={213}
            variant="rectangular"
            sx={{ ...commonStyles }}
          />
          <Skeleton
            animation="wave"
            width={108}
            variant="rectangular"
            sx={{ ...commonStyles }}
          />
        </Box>
      </Stack>
    </>
  );
}

export default CourseSkeleton;
