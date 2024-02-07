import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Grid } from "@mui/material";
import palette from "../theme/palette.js";
import CourseDetails from "../features/Course/common/CourseDetails.jsx";
import MuiCustomCoursePageSkeleton from "../features/Course/common/MuiCustomCoursePageSkeleton.jsx";
import CourseDescription from "../features/Course/common/CourseDescription.jsx";
import ContinueReading from "../features/Course/common/ContinueReading.jsx";
import UnitsContainer from "../features/Course/common/UnitsContainer.jsx";
import AccordionsContainer from "../features/Course/common/AccordionsContainer.jsx";

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
    <Grid container item md bgcolor={palette.primary[0]}>
      {courseData ? (
        <>
          {/* courseDetails */}
          <CourseDetails
            id={courseData.data.id}
            name={courseData.data.name}
            tag={courseData.data.tag}
            percentage={courseData.data.percentage}
          />

          {/* courseDescription */}
          <CourseDescription description={courseData.data.description} />

          {/* continueReading */}
          <ContinueReading continue_reading={courseData.data.continue_reading} />

          {/* UnitsContainer */}
          <UnitsContainer units={courseData.data.units} />

          {/* Accordions */}
          {
            courseData.data.units.map((unit) => (
              <AccordionsContainer topics={unit.topics} />
            ))
          }

        </>
      ) : (
        <MuiCustomCoursePageSkeleton />
      )}
    </Grid>
  );
}

export default CoursePage;
