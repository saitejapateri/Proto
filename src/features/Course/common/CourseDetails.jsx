import React from "react";
import { useNavigate } from "react-router-dom";
import { Grid, Stack, Typography } from "@mui/material";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import MuiCustomChipCount from "../../../components/common/MuiCustomChipCount";
import Slider from "@mui/material/Slider";
import palette from "../../../theme/palette";

const bgColors = [
  palette.primary[200],
  palette.warning[200],
  palette.success[200],
  palette.warning[200],
];
const colors = [
  palette.primary[800],
  palette.warning[800],
  palette.success[800],
  palette.warning[800],
];

function CourseDetails({ data }) {
  console.log(data);
  console.log(data?.percentage);

  //handling BackButtonClick
  const navigate = useNavigate();
  const handleBackButton = () => {
    navigate("/dashboard");
  };

  return (
    <Grid md={8} lg={12} sx={{ marginLeft: "2.09rem", marginTop : "2.18rem"}}>
      <Stack direction="row" alignItems={"center"} sx={{ gap: "1.25rem" }}>
        <KeyboardBackspaceIcon
          sx={{ cursor: "pointer" }}
          onClick={handleBackButton}
        />
        <Typography
          variant="h2"
          sx={{
            maxWidth: "685px",
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          }}
        >
          {data?.name}
        </Typography>
        <MuiCustomChipCount
          label={data?.tag}
          color={colors[data?.id - 1]}
          bgcolor={bgColors[data?.id - 1]}
        />
      </Stack>
      <Stack direction="row" alignItems={'center'} sx={{gap : '0.75rem',marginLeft : '3rem'}}>
        <Slider
          size="medium"
          defaultValue={60}
          valueLabelDisplay="auto"
          disabled
          max={100}
          min={0}
          sx={{
            width: 255,
            "& .MuiSlider-thumb": {
              width: 0,
              height: 0,
            },
          }}
        />
        <Typography variant='subtitle2' color={palette.primary.main} sx={{fontWeight : '400'}}>Avg. {data?.percentage}%</Typography>
      </Stack>
    </Grid>
  );
}

export default CourseDetails;
