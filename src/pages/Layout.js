import { useState, useEffect } from "react";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import HeaderNav from "./HeaderNav.js";
import AssessmentDetailCard from "../components/common/AssessmentDetailCard.jsx";
import CustomCard from "../components/common/CustomCard.jsx";
import Courses from "./Courses.js";
import LeaderBoardCard from "../components/common/LeaderBoardCard";
import LeaderBoardDrawar from "./LeaderBoardDrawar.js";
import MuiCustomTableWithSortandSelect from "../components/common/MuiCustomTableWithSortandSelect.jsx";
import MuiColumnChart from "../components/common/MuiColumnChart.jsx";
import palette from "../theme/palette.js";
import Profile from "./Profile.js";
import AssessmentSkeleton from "./AssessmentSkeleton.jsx";
import CourseSkeleton from "./CourseSkeleton.jsx";
import AssessmentDetailsSkeleton from "./AssessmentDetailsSkeleton.jsx";
import { Box, Typography } from "@mui/material";
import ReactErrorBoundary from "../components/common/ReactErrorBoundary";
import "./Layout.css";
import BarSkeleton from "./BarSkeleton.jsx";

function Layout() {
  //states
  const [data, setData] = useState({});
  const [assessmentData, setAssessmentData] = useState("");
  const [leaderDrawar, setLeaderDrawar] = useState(false);
  const categories = [];

  //fetching data from API's
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
  console.log("assessmentData is ", assessmentData);
  // console.log(leaderDrawar);
  // console.log(data.courses);
  const recent_assessments = data.recent_assessments;

  // console.log(recent_assessments);
  const analyticsData = data.analytics;

  //recent assessments data
  // if (data) {
  //   {
  //     recent_assessments &&
  //       recent_assessments.analysis.map((data, index) =>
  //         categories.push(data.name)
  //       );
  //   }
  // }

  const handleDrawar = () => {
    setLeaderDrawar((prevState) => !prevState);
  };

  const handleSort = (order, column) => {
    console.log("sorting is being done...");
    console.log("order is ", order, ",column is ", column);
  };

  return (
    <>
      <div
        className="dashboard-layout"
        style={{ backgroundColor: palette.primary[0] }}
      >
        {leaderDrawar && (
          <LeaderBoardDrawar
            data={data.leaderboard}
            open={leaderDrawar}
            onClose={handleDrawar}
          />
        )}
        <div id="header-div">
          {data && (
            <HeaderNav
              profileImg={data.profile_picture}
              name={data.name || ""}
              email={data.email}
            />
          )}
        </div>
        <div id="dashboard-text-div">Dashboard</div>
        <div id="details-div">
          {analyticsData === undefined ? (
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
        </div>
        <div className="container-div">
          <div id="left-div">
            {/* <div
              id="recent-assessment-div"
              style={{ backgroundColor: palette.primary[0] }}
            >
              <div id="recent-assessment-details">
                {!recent_assessments && <BarSkeleton />}
                {recent_assessments && (
                  <>
                    <span>{recent_assessments.title}</span>
                    <ul>
                      <li>Attempted</li>
                      <li>Unattempted</li>
                      <li>
                        Subjects
                        <KeyboardArrowDownOutlinedIcon />
                      </li>
                    </ul>
                  </>
                )}
              </div>
              {recent_assessments && (
                <MuiColumnChart
                  series={[
                    {
                      name: data?.recent_assessments?.title,
                      data: data?.recent_assessments?.analysis.map((item) =>
                        Math.floor(item?.percentage)
                      ),
                    },
                  ]}
                  categories={categories}
                  xaxisTitle={recent_assessments["x-axis"]}
                />
              )}
            </div> */}
            <div className="assessment-div">
              {!assessmentData ? (
                <AssessmentSkeleton />
              ) : (
                <MuiCustomTableWithSortandSelect
                  data={assessmentData}
                  sortHandler={handleSort}
                />
              )}
            </div>
          </div>
          <div id="right-div">
            <div id="profile-div">
              <span>UserProfile</span>
              <Profile data={data} />
            </div>
            <div id="calendar-div">
              <span id="calendar-title">Calendar</span>
            </div>
            <div id="leaderboard-div" onClick={handleDrawar}>
              <LeaderBoardCard data={data.leaderboard} />
            </div>
          </div>
        </div>
        <div id="course-div">
          {analyticsData === undefined ? (
            <CourseSkeleton />
          ) : (
            <>
              {data.courses.map((course) => (
                <Courses
                  key={course.id}
                  id={course.id}
                  name={course.name}
                  tag={course.tag}
                  image={course.image}
                />
              ))}
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default Layout;
