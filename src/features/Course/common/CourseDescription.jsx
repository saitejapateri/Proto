import React from "react";
import { List, ListItem, Typography, Grid, Stack } from "@mui/material";

function CourseDescription({ description }) {
  return (
    <Grid item md={10} sx={{ marginLeft: "5.31rem", marginTop : '1.43rem'}}>
        <Typography
          sx={{ fontSize: "16px", fontWeight: "500", fontFamily: "Poppins" }}
        >
          What you will learn
        </Typography>
        <List sx={{ listStyleType: "disc", paddingLeft: "1rem" }}>
          {description.split("\n").map((paragraph, index) => (
            <ListItem sx={{ display: "list-item" }} key={index} disablePadding>
              <Typography variant="subtitle2" sx={{ fontWeight: "400" }}>
                {paragraph}
              </Typography>
            </ListItem>
          ))}
        </List>
    </Grid>
  );
}

export default CourseDescription;
