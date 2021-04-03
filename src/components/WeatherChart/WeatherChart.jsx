import React from "react";
import Chart from "react-apexcharts";

const WeatherChart = (props) => {
  const options = {
    chart: {
      id: "basic-bar"
    },
    xaxis: {
      categories: ['00:00', '03:00', '06:00', '09:00', '12:00', '15:00', '18:00', '21:00']
    },
    fill: {
      colors: props.averageTemp > 0 ? "red" : "blue",
    }
  };

  const series = [
    {
      name: "Temperature",
      data: [5, 7, 10, 11, 15, 8, 10, 9]
    }
  ];

return (
    <div className="app">
      <div className="row">
        <div className="mixed-chart">
          <Chart
            options={options}
            series={series}
            type="area"
            width="300"
            height="150"
          />
        </div>
      </div>
    </div>
  );
}

export default WeatherChart;
