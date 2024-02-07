import React, { useEffect, useState, Fragment} from "react";
import palette from "../theme/palette";
import { Grid, Box, Typography } from "@mui/material";
import AssessmentDetailsSkeleton from "../features/Dashboard/AssessmentDetailsSkeletion";
import AssessmentDetailCard from "../components/common/AssessmentDetailCard";
import RecentAssessments from "../features/Dashboard/RecentAssessments/RecentAssessments.jsx";
import MuiCustomTableWithSortandSelect from "../components/common/MuiCustomTableWithSortandSelect";
import ProfileCard from "../features/Dashboard/ProfileCard";
import ReactCalendarComp from "../features/Dashboard/ReactCalendarComp";
import LeaderBoardCard from "../components/common/LeaderBoardCard";
import MuiLeaderboardDrawar from "../features/Dashboard/MuiLeaderboardDrawar";
import Courses from "../features/Dashboard/Courses.jsx";

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
      <Grid container>
        <Grid
          item
          xs
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

        {/*recent_assessment && assessments grid */}
        <Grid
          container
          item
          direction="row"
          sx={{ gap: "22px", marginLeft: "20px" }}
        >
          {/* left grid */}
          <Grid
            container
            item
            md={8.37}
            sx={{display : 'flex', flexDirection : 'column'}}
          >
            <Grid
              item
              md
              sx={{border : `1px solid ${palette.grey[100]}`, borderRadius : '10px', height : '352px', marginBottom : '1.31rem'}}
            >
              <RecentAssessments recent_assessments={data.recent_assessments} />
            </Grid>
            <Grid
              item
              md
              sx={{height : '535px',border : `1px solid ${palette.grey[100]}`, borderRadius : '10px'}}
            >
              <MuiCustomTableWithSortandSelect data={assessmentData} />
            </Grid>
          </Grid>

          {/* right grid */}
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
          item
          md
          sx={{ marginLeft: "1.25rem", marginTop: "1.25rem", marginBottom: "55px"}}
        >
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
