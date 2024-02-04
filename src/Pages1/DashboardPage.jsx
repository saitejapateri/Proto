import React, { useEffect, useState } from "react";
import palette from "../theme/palette";
import { Grid, Box, Typography } from "@mui/material";
import AssessmentDetailsSkeleton from "../features/Dashboard/AssessmentDetailsSkeletion";
import AssessmentDetailCard from "../components/common/AssessmentDetailCard";
import ProfileCard from "../features/Dashboard/ProfileCard";

function DashboardPage() {
  const [data, setData] = useState({});
  const [assessmentData, setAssessmentData] = useState({});

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
  console.log(analyticsData);

  return (
    <>
      <Typography
        sx={{
          marginLeft: "18px",
          marginTop: "12px",
          marginBottom: "20px",
          fontFamily: "Poppins",
          fontWeight: "600",
          fontSize: "20px",
          lineHeight: "28px",
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
        <Grid container item direction='row' sx={{gap : '22px', marginLeft : '20px'}}>
          <Grid container item md={8.37} sx={{display : 'flex', flexDirection : 'column', gap : '21px'}} style={{height : '887px'}}>
            <Grid item md bgcolor={palette.success[200]} style={{height : '512px', borderRadius : '10px'}}></Grid>
            <Grid item md bgcolor={palette.success[500]} style={{height : '535px', borderRadius : '10px'}}></Grid>
          </Grid>
          <Grid container item md={2.99} style={{display : 'flex', flexDirection : 'column'}}>
            <Grid md item sx={{marginBottom : '30px'}} style={{height : '108px'}} bgcolor={palette.error[300]}>
              <ProfileCard />
            </Grid>
            <Grid md item sx={{marginBottom : '30px'}} style={{height : '274px'}} bgcolor={palette.error[300]}></Grid>
            <Grid md item style={{height : '425px'}} bgcolor={palette.error[300]}>
            </Grid>
          </Grid>
        </Grid>

        {/* course grid */}
        <Grid
          container
          xs={10.4}
          style={{ height: "324px" }}
          bgcolor="primary.light"
          sx={{ marginLeft: "20px", marginTop : "20px"}}
        ></Grid>
      </Grid>
    </>
  );
}

export default DashboardPage;
