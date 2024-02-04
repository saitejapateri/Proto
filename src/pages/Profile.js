import React from "react";
import palette from "../theme/palette";

function Profile({data}) {
  return (
    <div style={{
        backgroundColor : palette.grey[100]
    }}>
      <img
        src={data.profile_picture}
        width="48px"
        height="48px"
        style={{ borderRadius: "4px" }}
      />
      <div id="naming" style={{backgroundColor : palette.grey[100]}}>
        <span>{data.name}</span>
        <span>{data.email}</span>
      </div>
    </div>
  );
}

export default Profile;
