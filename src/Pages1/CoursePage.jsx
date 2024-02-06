import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Grid } from "@mui/material";
import palette from "../theme/palette.js";
import CourseDetails from "../features/Course/common/CourseDetails.jsx";

function CoursePage() {
  const { courseId } = useParams();
  const [courseData, setCourseData] = useState(null);
  console.log(courseData);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [courseResponse] = await Promise.all([
          fetch(
            `https://stagingstudentpython.edwisely.com/reactProject/courseData?course_id=${courseId}`
          ),
        ]);

        const courseDetails = await courseResponse.json();

        setCourseData(courseDetails);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <Grid container xs bgcolor={palette.primary[0]}>
        <CourseDetails data={courseData?.data} />
    </Grid>
  );
}

export default CoursePage;
