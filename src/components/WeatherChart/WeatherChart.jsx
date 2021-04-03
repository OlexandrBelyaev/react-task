import React, { Component } from "react";
import Chart from "react-apexcharts";

class WeatherChart extends Component {
  state = {
    options: {
      chart: {
        id: "basic-bar"
      },
      xaxis: {
        categories: ['00:00', '03:00', '06:00', '09:00', '12:00', '15:00', '18:00', '21:00']
      },
    },
    series: [
      {
        name: "Temperature",
        data: [5, 7, 10, 11, 15, 8, 10, 9]
      }
    ]
  };

  render() {
    return (
      <div className="app">
        <div className="row">
          <div className="mixed-chart">
            <Chart
              options={this.state.options}
              series={this.state.series}
              type="area"
              width="300"
              height="150"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default WeatherChart;
