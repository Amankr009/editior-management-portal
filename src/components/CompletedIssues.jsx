import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const CompletedIssues = ({data}) => {
  const options = {
    chart: {
      type: "column",
      height: 333,
      backgroundColor: "transparent",
    },
    title: {
      text: "Completed Issues",
      align: "left",
      style: {
        fontSize: "18px",
        fontWeight: "bold",
        color: "#002B45"
      }
    },
    xAxis: {
      categories: ["Jan", "Feb", "Mar"],
      labels: {
        style: {
          color: "#002B45",
          fontWeight: "bold"
        }
      },
      lineColor: "#94A3B8"
    },
    yAxis: {
      min: 0,
      max: 5,
      tickInterval: 1,
      title: null,
      labels: {
        style: {
          color: "#002B45"
        },
      },
      gridLineWidth: 0,
      lineWidth: 1,
      lineColor: "#94A3B8"
    },
    legend: {
      align: "center",
      verticalAlign: "bottom",
      symbolRadius: 100,
      itemStyle: {
        color: "#002B45",
        fontWeight: "bold"
      }
    },
    plotOptions: {
      column: {
        stacking: "normal",
        borderWidth: 0
      }
    },
    series: data,
    credits: {
      enabled: false
    },
    tooltip: {
      shared: true,
      valueSuffix: ""
    }
  };

  return (
    <div style={{width: 272, border: "1px solid #94A3B8", borderRadius: 4, padding: 8}}>
      <HighchartsReact highcharts={(Highcharts)} options={options} />
    </div>
  );
};

export default CompletedIssues;