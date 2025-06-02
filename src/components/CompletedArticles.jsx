import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

/* Utils */
import { getLineChartData } from "../utils/chartDataMapper";

const CompletedArticles = ({data}) => {
  const {counts, dates} = getLineChartData(data);

  const options = {
    title: {
      text: "Completed Articles",
      align: "left",
      style: {
        fontWeight: "bold",
        fontSize: "20px",
        fontFamily: "Merriweather Sans",
      }
    },
    chart: {
      type: "line",
      height: 333
    },
    xAxis: {
      categories: dates,
      lineColor: "#94A3B8",
      labels: {
        style: {
          fontSize: "14px",
        },
      }
    },
    yAxis: {
      title: {
        text: null,
      },
      labels: {
        style: {
          fontSize: "14px",
        }
      },
      gridLineWidth: 0,
      lineWidth: 1,
      lineColor: "#94A3B8",
      min: 0,
      max: 70,
      tickInterval: 10
    },
    series: [
      {
        name: "Articles",
        data: counts,
        color: "#005b96",
        lineWidth: 1,
        marker: {
          enabled: false
        },
      }
    ],
    credits: {
      enabled: false,
    },
    legend: {
      enabled: false,
    }
  };

  return (
    <div style={{width: 452, border: "1px solid #94A3B8", borderRadius: 4, padding: 8}}>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

export default CompletedArticles;