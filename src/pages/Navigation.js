import React from "react";
import logo from "../images/edwisely.svg";
import dashboardImg from "../images/dashboardimg.svg";
import courseImg from "../images/courseimg.svg";
import logoutImg from "../images/logout.svg";
import courseActive from "../images/courseActive.svg";
import dashboardNull from "../images/dashboardNULL.svg";
import {useNavigate, useLocation} from 'react-router-dom'
import "./Navigation.css";
import palette from "../theme/palette";

function Navigation() {

  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/')
    localStorage.setItem('isLogin',false);
  }

  const path = useLocation()
  const page=path.pathname;

  return (
    <div className="topdiv">
      <div className="sidenav" style={{backgroundColor : palette.grey[100]}}>
        <img id="edwisely-logo" src={logo} alt="" />
        <div id="dashboard-logo-div">
          <span className="dash-line" style={{ backgroundColor: page === '/dashboard' ? palette.primary[700] : '' }}></span>
          <span id="logo-span" style={{background : page ==='/dashboard' ?  '#cedefd' : ''}}>
            <img id="dashboard-logo" src={page === '/dashboard' ? dashboardImg : dashboardNull} alt=""/>
          </span>
        </div>
        <div id="course-logo-div">
          { <span className="dash-line" style={{ backgroundColor: page.includes('/course') ? palette.primary[700] : ''}}></span>}
          <span id="course-logo-span" className={`${page.includes('/course') ? 'active-logo' : ''}`}>
            <img id="courses-logo" src={page.includes('/course') ? courseActive : courseImg} alt="" style={{marginLeft : page.includes('/course') ? '16px' : ''}}/>
          </span>
        </div>

        <div id="logout-logo-div">
          <span id="logout-logo-span" onClick={handleLogout}>
            <img id="courses-logo" src={logoutImg} alt="" />
          </span>
        </div>
      </div>
    </div>
  );
}

export default Navigation;
