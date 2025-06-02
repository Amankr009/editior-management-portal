import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const ManuscriptStatus = ({data}) => {
  const options = {
    chart: {
      type: "pie",
      backgroundColor: "transparent",
      height: 333
    },
    title: {
      text: "Manuscript Status",
      align: "left",
      style: {
        fontWeight: "bold",
        fontSize: "20px",
        color: "#002B45",
        fontFamily: "Merriweather Sans"
      },
    },
    tooltip: {
      pointFormat: "{series.name}: <b>{point.percentage:.1f}%</b>",
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: "pointer",
        dataLabels: {
          enabled: false
        },
        showInLegend: true,
        borderWidth: 0
      },
    },
    legend: {
      layout: "horizontal",
      align: "center",
      verticalAlign: "bottom",
      symbolHeight: 12,
      symbolWidth: 12,
      symbolRadius: 6,
      itemStyle: {
        fontWeight: "500",
        color: "#002B45",
        fontSize: "14px"
      },
      labelFormatter: function () {
        return `<span style="color: #002B45">${this.name}</span>`;
      },
    },
    series: [
      {
        name: "Status",
        colorByPoint: true,
        data: data
      }
    ],
    credits: {
      enabled: false
    },
  };

  return (
    <div style={{width: 251, border: "1px solid #94A3B8", borderRadius: 4, padding: 8}}>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

export default ManuscriptStatus;
