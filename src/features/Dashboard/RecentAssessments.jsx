import React, {useState} from "react";
import {
  Box,
  Stack,
  Typography,
  List,
  ListItem,
  Button,
  Menu,
  MenuItem,
} from "@mui/material";
import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import MuiColumnChart from '../../components/common/MuiColumnChart.jsx'
import palette from "../../theme/palette";

function RecentAssessments({ recent_assessments }) {
  console.log(recent_assessments);

  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedSubject, setSelectedSubject] = useState("Web Technologies")

  // const handleSubjectsDropdown = () => {
  //   console.log("clicked");
  // };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (subject) => {
    setSelectedSubject(subject)
    setAnchorEl(null);
  };

  return (
    <Stack>
      <Stack direction="row" justifyContent={"space-between"}>
        <Typography
          variant="h5"
          sx={{ marginLeft: "1.43rem", marginTop: "1rem" }}
        >
          {recent_assessments?.title}
        </Typography>
        <List
          component="ul"
          sx={{
            display: "flex",
            gap: "1.125rem",
            marginRight: "1.125rem",
            alignItems: "center",
          }}
        >
          <ListItem disablePadding>
            <CircleOutlinedIcon
              style={{ backgroundColor: "blue", borderRadius: "50%" }}
              sx={{
                fontSize: "0.5rem",
                marginRight: "0.3rem",
                color: palette.primary.main,
              }}
            />
            <Typography variant="subtitle2" sx={{ fontWeight: "400" }}>
              Attempted
            </Typography>
          </ListItem>
          <ListItem disablePadding>
            <CircleOutlinedIcon
              style={{ backgroundColor: "red", borderRadius: "50%" }}
              sx={{
                fontSize: "0.5rem",
                marginRight: "0.3rem",
                color: palette.error.main,
              }}
            />
            <Typography variant="subtitle2" sx={{ fontWeight: "400" }}>
              Unattempted
            </Typography>
          </ListItem>
          <ListItem disablePadding>
            <Button
              variant="text"
              disableRipple
              disableElevation
              disableFocusRipple
              endIcon={<KeyboardArrowDownIcon onClick={handleClick} />}
              sx={{overflow : 'hidden', textOverflow : 'ellipsis', whiteSpace : 'nowrap'}}
            >
              {selectedSubject}
            </Button>
          </ListItem>
        </List>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleClose}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
        >
          {
            recent_assessments?.subjects.map((subject) => (
              <MenuItem onClick={()=>handleClose(subject.name)}>{subject.name}</MenuItem>
            ))
          }
        </Menu>
      </Stack>
      <Stack>
      </Stack>
    </Stack>
  );
}

export default RecentAssessments;
