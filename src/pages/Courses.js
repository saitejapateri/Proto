import * as React from "react";
import { useNavigate } from "react-router";
import Chip from "@mui/material/Chip";
import "./Courses.css";
import palette from "../theme/palette";

const bgColors = [palette.primary[200],palette.warning[200],palette.success[200],palette.warning[200]]
const colors = [palette.primary[800],palette.warning[800],palette.success[800],palette.warning[800]]
function Courses({ key, id, name, tag, image }) {
  const navigate = useNavigate();

  const handleClick = (courseId) => {
    navigate(`/course/${courseId}`);
  };

  return (
    <div id="course" onClick={() => handleClick(id)}>
      <div id="course-img">
        <img src={image} height="183px" width="100%" />
      </div>
      <div>
        <Chip
          label={tag}
          variant="outlined"
          size="medium"
          sx={{
            borderRadius: 0,
            marginTop: "10px",
            backgroundColor: bgColors[id-1],
            border : 'none',
            color : colors[id-1]
          }}
        />
      </div>
      <div id="course-des">{name}</div>
    </div>
  );
}

export default Courses;
