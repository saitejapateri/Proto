import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import rightButton from "../images/rightbutton2.svg";
import videoPlay from "../images/video-play.svg";
import "./Accordian.css";
import palette from "../theme/palette";

export default function AccordionUsage({ title, topics, expand}) {
  return (
    <div style={{ marginBottom: 2 }}>
      <Accordion
        square
        sx={{
          width: 600,
          boxShadow: "none",
          background: palette.grey[100],
          margin: 0,
        }}
        expanded={expand}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          {title}
        </AccordionSummary>
        {topics.map((topic) => (
          <AccordionDetails key={topic.topic_id}>
            <div id="titles">
              <img src={videoPlay} />
              {topic.topic_name}
            </div>
            <div id="start-button">
              <span id="start">Start</span>
              <span id="button">
                <img src={rightButton} />
              </span>
            </div>
          </AccordionDetails>
        ))}
      </Accordion>
      <hr style={{ width: "600px", margin: "0" }} />
    </div>
  );
}
