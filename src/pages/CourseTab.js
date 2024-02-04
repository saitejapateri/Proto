import React, { useEffect, useState } from "react";
import HeaderNav from "./HeaderNav.js";
import "./CourseTab.css";
import backButton from "../images/backbutton.svg";
import { useNavigate, useParams } from "react-router-dom";
import Slider from "@mui/material/Slider";
import { Chip } from '@mui/material'
import palette from "../theme/palette.js";
import Units from "./Units.js";
import Search from "./Search.js";
import CustomCard from "../components/common/CustomCard.jsx";
import Accordian from "./Accordian.js";
import { unitActions } from "../store/index.js";
import { useSelector, useDispatch } from "react-redux";

function CourseTab() {
  const [courseData, setCourseData] = useState({});
  const [dashboardData,setDashboardData] = useState({})
  const navigate = useNavigate();
  const { courseId } = useParams();
  const id = parseInt(courseId);
  const data = courseData.data;
  console.log(data);
  // console.log(dashboardData)


  useEffect(() => {
    const fetchData = async () => {
      try {
        const [courseResponse,dashboardResponse] = await Promise.all([
          fetch(
            `https://stagingstudentpython.edwisely.com/reactProject/courseData?course_id=${id}`
          ),
          fetch(
            "https://stagingstudentpython.edwisely.com/reactProject/dashboardData"
          ),
        ]);

        const courseData = await courseResponse.json();
        const dashboardDetails = await dashboardResponse.json();

        setCourseData(courseData);
        setDashboardData(dashboardDetails);

        if (courseData.data.units.length > 0) {
          dispatch(unitActions.openUnit(courseData.data.units[0].unit_id));
        }

      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleBack = () => {
    navigate("/dashboard");
  };

  const openPdf = (url) => {
    // navigate(`/pdf?url=${url}`)
    window.open(url)
  };

  //handling selectedUnit
  const selectedUnitId = useSelector((state) => state.unit.selectedUnitId);
  const dispatch = useDispatch();
  const handleUnitClick = (unitId) => {
    console.log(unitId);
    if (selectedUnitId === unitId) {
      dispatch(unitActions.closeUnit());
    } else {
      dispatch(unitActions.openUnit(unitId));
    }
  };

  return (
    <div id="course-page" style={{backgroundColor : palette.primary[0]}}>
      <div id="header-div">
      {dashboardData &&  <HeaderNav profileImg={dashboardData.profile_picture} />}
      </div>
      <>
        {Object.keys(courseData).length > 0 && (
          <>
            <div id="heading-div">
              <span id="img-span" onClick={handleBack}>
                <img src={backButton} />
              </span>
              <span id="name" style={{ color: "#161C24" }}>
                {data.name}
              </span>
              <span>
                <Chip sx={{
                  borderRadius : 0,
                  height : 22,
                  backgroundColor : palette.primary[100],
                  border : 'none'
                }} label="DESIGN" variant="outlined" />
              </span>
            </div>
            <div id="slider-div">
              <Slider
                size="medium"
                defaultValue={data.percentage}
                valueLabelDisplay="auto"
                max={100}
                min={0}
                sx={{
                  width: 255,
                  "& .MuiSlider-thumb": {
                    width: 0,
                    height: 0,
                  },
                }}
              />
              <span id="Avg" style={{ color: palette.primary[700] }}>
                Avg. {data.percentage}%
              </span>
            </div>
            <div id="des-div">
              <div id="title-div">What you will learn</div>
              <div id="para-div">
                <ul style={{ listStyleType: "disc", marginLeft: "20px" }}>
                  {data.description.split("\n").map((paragraph, index) => (
                    <li key={index}>{paragraph}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div id="continue-reading-div">
              <span id="continue-reading">Continue reading</span>
              <div id="pdfs">
                {data.continue_reading.map((pdf) => (
                  <CustomCard
                    key={pdf.id}
                    name={pdf.name}
                    url={pdf.url}
                    onClick={() => openPdf(`${pdf.url}`)}
                  />
                ))}
              </div>
              <div id="units-div">
                {data.units.map((unit) => (
                  <Units
                    unit_name={unit.unit_name}
                    key={unit.unit_id}
                    topics={unit.topics}
                    id={unit.unit_id}
                    onClick={handleUnitClick}
                  />
                ))}
                <Search />
              </div>
              <div id="accordians">
                {data.units.map((unit) => (
                  <Accordian
                    title={unit.unit_name}
                    key={unit.unit_id}
                    topics={unit.topics}
                    expand={selectedUnitId === unit.unit_id}
                  />
                ))}
              </div>
            </div>
          </>
        )}
      </>
    </div>
  );
}

export default CourseTab;
