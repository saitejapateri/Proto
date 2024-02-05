import * as React from "react";
import {useNavigate} from 'react-router-dom'
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import Chip from "@mui/material/Chip";
import palette from "../../theme/palette";

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

const StyledCard = styled(Card)({
  "MuiPaper-root-MuiCard-root": {
    padding: 'none',
  },
  ".MuiCardContent-root": {
    padding: 0,
  },
});

function MuiCustomCourseCard({ name, tag, image, id }) {
    
    const navigate = useNavigate(id);
    const handleClick = () => {
        navigate(`/course/${id}`)
    }

  return (
    <StyledCard
      sx={{
        padding : 0,
        boxShadow : 'none',
        borderRadius : '10px 10px 0px 0px',
        border : `1px solid ${palette.primary[0]}`,
        cursor : 'pointer',
        "@media (min-width : 900px) and (max-width : 1200px)": {
          minWidth: "180px",
          maxWidth: "200px",
        },
        "@media (min-width : 1200px) and (max-width : 1500px)": {
          minWidth: "233px",
          maxWidth: "280px",
        },
        "@media (min-width : 1500px)": {
          minWidth : '280px',
          maxnWidth: "300px",
        },
      }}
      onClick = {()=>handleClick(id)}
    >
      <CardMedia sx={{ height: "183px", width: "100%" }} image={image} />
      <CardContent sx={{marginLeft : '14px', width : '216px', overflow : 'hidden', textOverflow : 'ellipsis'}}>
        <Chip
          label={tag}
          variant="outlined"
          size="medium"
          sx={{
            borderRadius: 0,
            marginTop: "10px",
            backgroundColor: bgColors[id - 1],
            border: "none",
            color: colors[id - 1],
          }}
        />
        <Typography variant='subtitle2' sx={{marginTop : '10px'}}>
            {name}
        </Typography>
      </CardContent>
    </StyledCard>
  );
}

export default MuiCustomCourseCard;
