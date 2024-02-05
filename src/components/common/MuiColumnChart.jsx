import React from 'react'
import Chart from 'react-apexcharts'
import { useTheme } from '@mui/material/styles'
import palette from '../../theme/palette'
import { useMediaQuery } from '@mui/material'

const categories = [1,2,3,4,5,6,7,8,9,10]


const MuiColumnChart = ({
  series,
  categories,
  yaxisTitle,
  xaxisTitle,
  width="897px",
  height="267px",
  daataLabelsColor=palette.primary.main,
  primaryBarColor=palette.primary.main,
  secondarybarColor=palette.error.main,
}) => {
  // console.log(series)
  const theme = useTheme()
  const options = {
    chart: {
      type: 'bar',
      margin: {
        left: 100,
      },
      toolbar: {
        show: false, // Hide the toolbar
      },
    },
    plotOptions: {
      bar: {
        dataLabels: {
          position: 'top', // top, center, bottom
        },
        barHeight: '70%',
        columnWidth: '20px',
      },
    },
    dataLabels: {
      enabled: true,
      formatter: function(val) {
        return val + '%'
      },
      offsetY: -20,
      style: {
        fontSize: '14px',
        colors: [daataLabelsColor],
        fontFamily: 'Poppins',
        fontWeight: 500,
        cssClass: 'apexcharts-xaxis-label',
      },
    },
    xaxis: {
      title: {
        text: xaxisTitle,
        style : {
          fontSize: '14px',        
          fontFamily: 'Poppins',   
          fontWeight: 400,         
          color: palette.grey[600],
        }
      },
      tickPlacement: 'on',
      categories: categories,
      lines: {
        show: true,
      },
      position: 'bottom',
      axisBorder: {
        show: true,
      },
      axisTicks: {
        show: true,
      },
      tooltip: {
        enabled: false,
      },
      labels: {
        style: {
          colors: theme.palette.grey[500],
          fontSize: '16px',
          fontFamily: 'Poppins',
          fontWeight: 400,
          cssClass: 'apexcharts-xaxis-label',
        },
      },
    },
    yaxis: {
      title: {
        text: yaxisTitle,
        style: {
          color: theme.palette.grey[500],
          fontSize: '10px',
          fontFamily: 'Axiforma-SemiBold, Arial, sans-serif',
          fontWeight: 400,
          cssClass: 'apexcharts-yaxis-title',
        },
      },
      lines: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      labels: {
        show: false,
        formatter: function(val) {
          return val
        },
        style: {
          colors: theme.palette.grey[500],
          fontSize: '10px',
          fontFamily: 'Axiforma-SemiBold, Arial, sans-serif',
          fontWeight: 500,
          cssClass: 'apexcharts-xaxis-label',
        },
      },
    },
    grid: {
      show: true,
    },
    colors: [
      function({ value, seriesIndex, w, dataPointIndex }) {
        //  console.log(value, seriesIndex, w, dataPointIndex)
        if (value !== 0) {
          return primaryBarColor
        } else {
          return secondarybarColor
        }
      },
    ],
    tooltip: {
      enabled: false,
    },
  }
  return (
    <>
     <span style={{
      marginLeft : '20px',
      fontFamily : 'poppins',
      fontWeight : 500,
      color : palette.grey[600]
     }}>Avg.Peformance</span>
    <Chart
      options={options}
      series={series}
      type='bar'
      // width={width}
      height={height}
      id="chart"
    />
    </>
  )
}

export default MuiColumnChart
