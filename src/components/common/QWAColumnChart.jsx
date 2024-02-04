import React from 'react'
import { Box, Stack, Typography } from '@mui/material'
import MuiColumnChart from './MuiColumnChart'
import MuiSmallDropDown from './MuiSmallDropDown'
import { useTheme } from '@mui/styles'

const QWAColumnChart = (props) => {
  const {
    sectionArrForQWA,
    currentSectionForQWA,
    dropdownHandlerforQWA,
    question_wise_analysis,
  } = props
  const theme = useTheme()
  return (
    <Box
      sx={{
        width: '100%',
        height: '230px',
        borderRadius: '10px',
        padding: '18px 20px',
        boxShadow: '3.79444px 3.79444px 14.22917px 0px rgba(0, 0, 0, 0.05)',
      }}
    >
      <Stack direction='row' justifyContent='space-between' alignItems='center'>
        <Typography
          variant='body5'
          sx={{ color: `${theme.palette.grey[500]}` }}
        >
          Question wise analysis
        </Typography>
        <Stack
          direction='row'
          justifyContent='flex-end'
          alignItems='center'
          gap={1}
        >
          <Box
            sx={{
              width: '15px',
              height: '15px',
              background: theme.palette.info[200],
            }}
          />
          <Box
            sx={{
              width: '15px',
              height: '15px',
              background: theme.palette.info[500],
            }}
          />
          <Typography
            variant='caption2'
            sx={{ color: theme.palette.info[900] }}
          >
            Questions
          </Typography>
          <MuiSmallDropDown
            data={sectionArrForQWA.map((section) => {
              return {
                value: section.section_id,
                color: theme.palette.grey[100],
                name: section.section_name,
              }
            })}
            dropDownValue={`${currentSectionForQWA?.section_id}`}
            setDropDownValue={dropdownHandlerforQWA}
          />
        </Stack>
      </Stack>``
      <MuiColumnChart
        series={[
          {
            name: question_wise_analysis?.title,
            data: question_wise_analysis?.analysis?.map((item) =>
              Math.floor(item?.percentage)
            ),
          },
        ]}
        categories={question_wise_analysis?.analysis?.map((item) => item?.name)}
        yaxisTitle='Correct Answer %'
        xaxisTitle={''}
        width={'100%'}
        height={'180px'}
        daataLabelsColor={theme.palette.info[500]}
        primaryBarColor={theme.palette.info[500]}
        secondarybarColor={theme.palette.info[200]}
      />
    </Box>
  )
}

export default QWAColumnChart
