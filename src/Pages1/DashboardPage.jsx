import React, { useEffect, useState } from "react";
import palette from "../theme/palette";
import { Grid, Box, Typography } from "@mui/material";
import AssessmentDetailsSkeleton from "../features/Dashboard/AssessmentDetailsSkeletion";
import AssessmentDetailCard from "../components/common/AssessmentDetailCard";
import RecentAssessments from "../features/Dashboard/RecentAssessments";
import ProfileCard from "../features/Dashboard/ProfileCard";
import ReactCalendarComp from "../features/Dashboard/ReactCalendarComp";
import LeaderBoardCard from "../components/common/LeaderBoardCard";
import MuiLeaderboardDrawar from "../features/Dashboard/MuiLeaderboardDrawar";
import CourseSkeleton from "../pages/CourseSkeleton";
import Courses from "../features/Dashboard/Courses";
import typography from "../theme/typography";

function DashboardPage() {
  const [data, setData] = useState({});
  const [assessmentData, setAssessmentData] = useState({});
  const [drawerState, setDrawarState] = useState(false);

  //handling leaderboardDrawar component
  const handleDrawar = () => {
    setDrawarState((prevState) => !prevState);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [dashboardResponse, assessmentsResponse] = await Promise.all([
          fetch(
            "https://stagingstudentpython.edwisely.com/reactProject/dashboardData"
          ),
          fetch(
            "https://stagingstudentpython.edwisely.com/reactProject/assessments"
          ),
        ]);

        const dashboardData = await dashboardResponse.json();
        const assessmentsDetails = await assessmentsResponse.json();

        setData(dashboardData);
        setAssessmentData(assessmentsDetails);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  console.log(data);
  const analyticsData = data.analytics;

  return (
    <>
      <Typography
        variant="h6"
        sx={{
          marginLeft: "18px",
          marginTop: "12px",
          marginBottom: "20px",
        }}
      >
        Dashboard
      </Typography>
      <Grid container bgcolor={palette.primary[0]}>
        <Grid
          item
          xs
          // style={{ height: "80px" }}
          sx={{
            marginLeft: "14px",
            display: "flex",
            gap: "24px",
            marginBottom: "28px",
            flexWrap: "wrap",
          }}
        >
          {!analyticsData ? (
            <AssessmentDetailsSkeleton />
          ) : (
            <>
              {Object.keys(analyticsData).map((analytics, index) => (
                <AssessmentDetailCard
                  key={index}
                  title={index}
                  icon={index}
                  iconBgColor={index}
                  contentMagnitude={analyticsData[analytics]}
                />
              ))}
            </>
          )}
        </Grid>

        {/* assessments grid */}
        <Grid
          container
          item
          direction="row"
          sx={{ gap: "22px", marginLeft: "20px" }}
        >
          <Grid
            container
            item
            md={8.37}
            sx={{ display: "flex", flexDirection: "column", gap: "21px" }}
            style={{ height: "887px" }}
          >
            <Grid
              item
              md
              // bgcolor={palette.success[200]}
            >
              <RecentAssessments recent_assessments={data.recent_assessments} />
            </Grid>
            <Grid
              item
              md
              bgcolor={palette.success[500]}
            ></Grid>
          </Grid>
          <Grid
            container
            item
            md={2.99}
            style={{ display: "flex", flexDirection: "column" }}
          >
            <Grid md item sx={{ marginBottom: "30px" }}>
              <ProfileCard
                name={data.name}
                profilePic={data.profile_picture}
                email={data.email}
              />
            </Grid>
            <Grid md item sx={{ marginBottom: "30px" }}>
              <ReactCalendarComp />
            </Grid>
            <Grid md item>
              <LeaderBoardCard data={data.leaderboard} onClick={handleDrawar} />
            </Grid>
          </Grid>
        </Grid>

        {/* course grid */}
        <Grid
          container
          md
          sx={{ marginLeft: "20px", marginTop: "20px", marginBottom: "55px" }}
        >
          {/* <CourseSkeleton /> */}
          <Courses courses={data.courses} />
        </Grid>
        <MuiLeaderboardDrawar
          data={data.leaderboard}
          open={drawerState}
          onClose={handleDrawar}
        />
      </Grid>
    </>
  );
}

export default DashboardPage;
