import React, { useState } from "react";
import { useSelector } from "react-redux";
import {
  TableCell,
  Typography,
  Stack,
  IconButton,
  Menu,
  MenuItem,
  Checkbox,
} from "@mui/material";
import { useTheme } from "@mui/styles";
import ArrowDownwardOutlinedIcon from "@mui/icons-material/ArrowDownwardOutlined";
import ArrowUpwardOutlinedIcon from "@mui/icons-material/ArrowUpwardOutlined";
import downArrow from "../../images/arrow-up.svg";
import theme from "../../theme";

const options = [
  { id: 1, value: "Timeout" },
  { id: 2, value: "Interrupted" },
  { id: 3, value: "On Submit" },
  { id: 4, value: "Tabswitch" },
];

const ITEM_HEIGHT = 48;

const MuiCustomTableHeaderCellWithSortandSelect = ({
  itemData,
  index,
  isSortable,
  isSelectable,
  arrayLength,
  sortHandler,
  selectHandler,
}) => {
  // const { submissionTypesToShowinStudentTable } = useSelector(
  //   (state) => state.assessment
  // )
  const [sortOrder, setSortOrder] = useState("asc");
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    //console.log(event)
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const changeSortOrder = () => {
    if (sortOrder === "asc") {
      sortHandler("des", index);
      setSortOrder("des");
    } else {
      sortHandler("asc", index);
      setSortOrder("asc");
    }
  };
  const theme = useTheme();
  return (
    <>
      <TableCell
        sx={{
          padding: "5px 0 5px 16px",
          borderRadius:
            index === 0
              ? "5px 0 0 5px"
              : index === arrayLength - 1
              ? "0 5px 5px 0"
              : "0",
          border: "none",
        }}
      >
        <Stack
          direction="row"
          alignItems="center"
          gap={"0.8rem"}
          sx={{ height: "20px" }}
        >
          <Typography
            variant="body2"
            sx={{
              color: theme.palette.grey[500],
              lineHeight: "1rem",
              fontFamily: "Poppins",
              fontWeight: "500",
              fontSize: "14px",
            }}
          >
            {itemData.label}
          </Typography>
          {isSortable ? (
            <IconButton
              aria-label="delete"
              sx={{ padding: "0" }}
              onClick={changeSortOrder}
            >
              {sortOrder === "asc" ? (
                <ArrowDownwardOutlinedIcon
                  fontsize="small"
                  color={theme.palette.grey[500]}
                />
              ) : (
                <ArrowUpwardOutlinedIcon
                  fontsize="small"
                  color={theme.palette.grey[500]}
                />
              )}
            </IconButton>
          ) : null}
          {isSelectable ? (
            <>
              <IconButton
                aria-label="delete"
                sx={{ padding: "0" }}
                onClick={handleClick}
              >
                {/* <DownArrow2 color={theme.palette.grey[500]} /> */}
                {/* <ArrowDownwardOutlinedIcon color={theme.palette.grey[500]}/> */}
                <img src={downArrow} />
              </IconButton>
              <Menu
                id="long-menu"
                MenuListProps={{
                  "aria-labelledby": "long-button",
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                PaperProps={{
                  style: {
                    maxHeight: ITEM_HEIGHT * 4.5,
                    width: "20ch",
                  },
                }}
              >
                {options.map((option) => (
                  <MenuItem key={option} sx={{ padding: "0" }}>
                    <Stack direction="row" alignItems="center">
                      <Checkbox
                        size="small"
                        sx={{
                          "&.Mui-checked": {
                            color: "primary",
                          },
                        }}
                        onChange={(e) => selectHandler(e, option.id)}
                        // checked={submissionTypesToShowinStudentTable?.includes(
                        //   option.id
                        // )}
                      />
                      <Typography
                        variant="body1"
                        sx={{ color: theme.palette.grey[900] }}
                      >
                        {option.value}
                      </Typography>
                    </Stack>
                  </MenuItem>
                ))}
                <MenuItem
                  onClick={(e) => {
                    selectHandler(e, 5);
                    handleClose();
                  }}
                  sx={{ justifyContent: "center" }}
                >
                  <Typography
                    variant="body1"
                    sx={{
                      color: theme.palette.info[700],
                      fontWeight: 500,
                    }}
                  >
                    Clear all
                  </Typography>
                </MenuItem>
              </Menu>
            </>
          ) : null}
        </Stack>
      </TableCell>
    </>
  );
};

export default MuiCustomTableHeaderCellWithSortandSelect;
