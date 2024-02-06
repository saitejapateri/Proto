import React from "react";
import { Stack, Card, Typography } from "@mui/material";
import MuiCustomCourseCard from "./MuiCustomCourseCard";
import CourseSkeleton from "../../pages/CourseSkeleton";
import typography from "../../theme/typography";

function Courses({ courses }) {
  return (
    <Stack>
      <Typography
        variant='h5'
        sx={{
          color: "#2E3A59",
        }}
      >
        Your courses
      </Typography>
      {courses ? (
        <Stack direction="row" spacing={2.75} sx={{ marginTop: "0.93rem" }}>
          {courses?.map((course, index) => (
            <MuiCustomCourseCard
              id={course.id}
              key={index}
              name={course.name}
              tag={course.tag}
              image={course.image}
            />
          ))}
        </Stack>
      ) : (
        <Stack>
          <CourseSkeleton />
        </Stack>
      )}
    </Stack>
  );
}

export default Courses;
