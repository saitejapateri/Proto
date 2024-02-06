import React from "react";
import Chart from "react-apexcharts";
import { useTheme } from "@mui/material/styles";
import { Typography } from "@mui/material";
import palette from "../../theme/palette";

const MuiColumnChart = ({
  series,
  categories,
  yaxisTitle,
  xaxisTitle,
  width = "100%",
  height = "320px",
  daataLabelsColor = palette.primary.main,
  primaryBarColor = palette.primary.main,
  secondarybarColor = palette.error.main,
}) => {
  // console.log(series)
  const theme = useTheme();
  const options = {
    chart: {
      type: "bar",
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
          position: "top", // top, center, bottom
        },
        barHeight: "70%",
        columnWidth: "20px",
      },
    },
    dataLabels: {
      enabled: true,
      formatter: function (val) {
        return val + "%";
      },
      offsetY: -20,
      style: {
        fontSize: "14px",
        colors: [daataLabelsColor],
        fontFamily: "Poppins",
        fontWeight: 500,
        cssClass: "apexcharts-xaxis-label",
      },
    },
    xaxis: {
      title: {
        text: xaxisTitle,
        style: {
          fontSize: "14px",
          fontFamily: "Poppins",
          fontWeight: 400,
          color: palette.grey[600],
        },
      },
      tickPlacement: "on",
      categories: categories,
      lines: {
        show: true,
      },
      position: "bottom",
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
          fontSize: "16px",
          fontFamily: "Poppins",
          fontWeight: 400,
          cssClass: "apexcharts-xaxis-label",
        },
      },
    },
    yaxis: {
      title: {
        text: yaxisTitle,
        style: {
          color: theme.palette.grey[500],
          fontSize: "10px",
          fontFamily: "Axiforma-SemiBold, Arial, sans-serif",
          fontWeight: 400,
          cssClass: "apexcharts-yaxis-title",
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
        formatter: function (val) {
          return val;
        },
        style: {
          colors: theme.palette.grey[500],
          fontSize: "10px",
          fontFamily: "Axiforma-SemiBold, Arial, sans-serif",
          fontWeight: 500,
          cssClass: "apexcharts-xaxis-label",
        },
      },
    },
    grid: {
      show: true,
    },
    colors: [
      function ({ value, seriesIndex, w, dataPointIndex }) {
        //  console.log(value, seriesIndex, w, dataPointIndex)
        if (value !== 0) {
          return primaryBarColor;
        } else {
          return secondarybarColor;
        }
      },
    ],
    tooltip: {
      enabled: false,
    },
  };
  return (
    <>
      <Typography
        variant="subtitle2"
        sx={{
          marginLeft: "1.43rem",
          marginTop: "0.81rem",
          color: palette.grey[600],
        }}
      >
        Avg.Performance
      </Typography>
      <Chart
        options={options}
        series={series}
        type="bar"
        width={width}
        height={height}
        id="chart"
      />
    </>
  );
};

export default MuiColumnChart;
