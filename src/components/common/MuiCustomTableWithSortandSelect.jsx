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
  Typography,
  Box
} from "@mui/material";
import MuiCustomTableHeaderRowWithSortandSelect from "./MuiCustomTableHeaderRowWithSortandSelect";
import MuiCustomStudentTableRow from "./MuiCustomStudentTableRow";
import palette from "../../theme/palette";
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

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
  const [semester,setSemester] = useState(1)

  console.log(data)

  const assessments = data.assessments?.filter((assessment) => assessment.semester === semester)

  //handling Semester
  const handleSemester = (arrow) => {
    if(arrow === 'right' && semester<3){
      setSemester(prevState => prevState + 1);
    }
    else if(arrow === 'left' && semester!=1)
    {
      setSemester(prevState => prevState - 1);
    }
  }

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
          // height: "535px",
          padding : '0.875rem',
        }}
      >
        <Stack direction='row' justifyContent={'space-between'}>
          <Typography variant="h5" >Assessments</Typography>
          <Stack direction='row' alignItems={'normal'} sx={{cursor : 'pointer'}}>
            <KeyboardArrowLeftIcon onClick={()=>handleSemester('left')} />
            <Typography variant='button' sx={{fontWeight : '400'}}>Semester 0{semester} </Typography>
            <KeyboardArrowRightIcon onClick={()=>handleSemester('right')}/>
          </Stack>
        </Stack>
        <Table sx={{ width: "100%"}} aria-label="sticky table">
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
            {assessments?.slice(startingIndex,startingIndex + 8).map((stu, i) => (
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
        // sx={{ marginTop: "1rem" }}
      >
        <Pagination
          count={Math.ceil(data.assessments?.length / 8)}
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
