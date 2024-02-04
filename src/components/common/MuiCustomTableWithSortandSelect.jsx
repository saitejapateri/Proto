import React, { useEffect, createRef, useState } from "react";
import {
  TableContainer,
  Table,
  TableBody,
  TableHead,
  Paper,
  Skeleton,
  Stack,
  Pagination,
  Typography
} from "@mui/material";
import MuiCustomTableHeaderRowWithSortandSelect from "./MuiCustomTableHeaderRowWithSortandSelect";
import MuiCustomStudentTableRow from "./MuiCustomStudentTableRow";

const HeaderArr = [
  { label: "Subject", isSortable: false, isSelectable: false },
  { label: "Time Spent", isSortable: false, isSelectable: false },
  {label : "Submission Type",isSortable : false, isSelectable : false},
  {label : "Internet Speed",isSortable : false, isSelectable : false},
  {label : "Rank",isSortable : false, isSelectable : false},
  {label : "Mark",isSortable : true, isSelectable : false}
];

const MuiCustomTableWithSortandSelect = (props) => {
  const {
    // HeaderArr,
    // tableData,
    data,
    viewStudentResult,
    sortHandler,
    selectHandler,
    loading_reportData,
    currentPageforTablepaginaton,
    // tablePaginationHandler,
    filtered_studentAssessmentList,
    submissionTypesToShowinStudentTable,
  } = props;

  const [startingIndex,setStartingIndex] = useState(0) 

  const tablePaginationHandler = (event,value) => {
    console.log(value)
    setStartingIndex((value-1) * 10);
  }
  
  return (
    <>
      <Paper
        sx={{
          boxShadow: "none",
          // marginTop: "1.5rem",
          height: "535px",
        }}
      >
        {/* <Typography sx={{fontWeight : '500', fontSize : '20px', fontFamily : 'Poppins'}}>Assessments</Typography> */}
        <Table sx={{ width: "100%" }} aria-label="sticky table">
          <TableHead
            sx={{
              // position: "",
              top: "162px",
              zIndex: 100,
              background: "white",
            }}
          >
            <MuiCustomTableHeaderRowWithSortandSelect
              headerArray={HeaderArr}
              sortHandler={sortHandler}
              selectHandler={selectHandler}
            />
          </TableHead>
          <TableBody>
            {data.assessments?.slice(startingIndex,startingIndex + 10).map((stu, i) => (
              <MuiCustomStudentTableRow
                stu={stu}
                key={i}
                viewStudentResult={viewStudentResult}
              />
            ))}
          </TableBody>
        </Table>
      </Paper>

      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        sx={{ marginTop: "1rem" }}
      >
        <Pagination
          count={Math.ceil(data.assessments?.length / 10)}
          //   filtered_studentAssessmentList?.filter((stu) =>
          //     submissionTypesToShowinStudentTable.includes(stu.submission_type)
          //   ).length / 15
          // )}
          page={currentPageforTablepaginaton}
          onChange={tablePaginationHandler}
          color='primary'
          sx={{fontFamily : 'Poppins', fontWeight : '300', fontSize : '12px'}}
        />
      </Stack>
    </>
  );
};

export default MuiCustomTableWithSortandSelect;
