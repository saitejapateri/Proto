import * as React from "react";
import { useNavigate } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
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

const StyledCard = styled(Card)(({ theme }) => ({
  height: "281px",
  width : '244px',
  padding: 0,
  boxShadow: "none",
  borderRadius: "10px",
  border: `1px solid ${palette.grey[100]}`,
  cursor: "pointer",
  [theme.breakpoints.up("900")]: {
    minWidth: "180px",
    maxWidth: "200px",
  },
  [theme.breakpoints.between("1200", "1500")]: {
    minWidth: "233px",
    maxWidth: "244px",
  },
  [theme.breakpoints.up("1500")]: {
    minWidth: "280px",
    maxWidth: "300px",
  },
  '.MuiCardContent-root' : {
    padding : 0,
    margin: '0.875rem',
  }
}));

const StyledChip = styled(Chip)({
  borderRadius: 0,
  border: "none",
  height: "20px",
});

function MuiCustomCourseCard({ name, tag, image, id }) {
  const navigate = useNavigate(id);
  const handleClick = () => {
    navigate(`/course/${id}`);
    window.scrollTo(0,0);
  };

  return (
    <StyledCard
      onClick={() => handleClick(id)}
    >
      <CardMedia sx={{ height: "183px", width: "100%" }} image={image} />
      <CardContent
      >
        <StyledChip
          label={tag}
          variant="outlined"
          size="medium"
          sx={{
            backgroundColor: bgColors[id - 1],
            color: colors[id - 1],
          }}
        />
        <Typography variant="subtitle2" sx={{ marginTop: "0.625rem", overflow : 'hidden', textOverflow : 'ellipsis', whiteSpace : 'nowrap'}}>
          {name}
        </Typography>
      </CardContent>
    </StyledCard>
  );
}

export default MuiCustomCourseCard;
