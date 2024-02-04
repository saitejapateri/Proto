import React, { useState } from "react";
// import profileImg from '../images/avatar.png'
import "./HeaderNav.css";
import { useNavigate } from "react-router-dom";
import { Menu, MenuItem } from "@mui/material";

function HeaderNav({ profileImg, name, email }) {
  // const profileName = name.split(" ")
  const navigate = useNavigate();
  const [profileClick, setProfileClick] = useState(false);

  const handleLogout = () => {
    navigate('/');
  };

  const handleClose = () => {
    setProfileClick( prevState => !prevState);
  };

  return (
    <>
      <div id="header">
        <span id="header-content">Good morning, Maharram 👋</span>

        <span id="avatar">
          <img
            src={profileImg}
            width="50px"
            height="50px"
            style={{ borderRadius: "50%" }}
            onClick={handleClose}
          />
        </span>
        {profileClick && (
          <Menu
            open={profileClick}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            
          >
            <MenuItem>
              <img
                src={profileImg}
                width="50px"
                height="50px"
                style={{ borderRadius: "50%" }}
              />
            </MenuItem>
            <MenuItem>{name}</MenuItem>
            <MenuItem>{email}</MenuItem>
            <MenuItem onClick={handleLogout}>Logout</MenuItem>
          </Menu>
        )}
      </div>
    </>
  );
}

export default HeaderNav;
