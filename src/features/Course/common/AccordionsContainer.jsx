import React from "react";
import { Grid } from "@mui/material";
import MuiCustomAccordion from "../../../components/common/MuiCustomAccordion";

function AccordionsContainer({ topics }) {

    console.log(topics)

  return (
    <Grid
      item
      md={6}
      sx={{ marginLeft: "3.5rem", marginTop: "1.5rem" }}
    >
        {
            topics.map((topic) => (
                <MuiCustomAccordion key={topic.topic_id} topic_name={topic.topic_name} materials={topic.materials}/>
            ))
        }
    </Grid>
  );
}

export default AccordionsContainer;
