import React, { useEffect, useRef } from "react";
import * as echarts from "echarts";

const Chart1 = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    var myChart = echarts.init(chartRef.current);
    var option = {
      tooltip: {
        trigger: "axis",
        axisPointer: { type: "cross" },
      },
      legend: {},
      xAxis: [
        {
          type: "category",
          axisTick: {
            alignWithLabel: true,
          },
          axisLabel: {
            rotate: 30,
          },
          data: [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December",
          ],
        },
      ],
      yAxis: [
        {
          type: "value",
          name: "Precipitation",
          min: 0,
          max: 250,
          position: "right",
          axisLabel: {
            formatter: "{value} ml",
          },
        },
        {
          type: "value",
          name: "Temperature",
          min: 0,
          max: 25,
          position: "left",
          axisLabel: {
            formatter: "{value} °C",
          },
        },
      ],
      series: [
        {
          name: "Precipitation",
          type: "bar",
          yAxisIndex: 0,
          data: [
            6, 32, 70, 86, 68.7, 100.7, 125.6, 112.2, 78.7, 48.8, 36.0, 19.3,
          ],
        },
        {
          name: "Temperature",
          type: "line",
          smooth: true,
          yAxisIndex: 1,
          data: [
            6.0, 10.2, 10.3, 11.5, 10.3, 13.2, 14.3, 16.4, 18.0, 16.5, 12.0,
            5.2,
          ],
        },
      ],
    };

    myChart.setOption(option);
  }, []);

  return (
    <div className="flex flex-col lg:flex-row items-start lg:items-center lg:space-x-4 p-2">
      <div className="lg:w-1/2 p-4 bg-white shadow rounded">
        <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl">
          Monthly Precipitation and Temperature
        </h2>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl">
          This chart presents a comparison of monthly precipitation and
          temperature. The x-axis represents the months of the year, from
          January to December. The y-axis on the left side represents the
          temperature in degrees Celsius, ranging from 0 to 25. The y-axis on
          the right side represents the precipitation in milliliters, ranging
          from 0 to 250. The precipitation data is represented by a bar chart,
          with each bar's height indicating the amount of precipitation in a
          particular month. The temperature data is represented by a line chart,
          with the line's height at any point indicating the temperature in that
          month. This chart can be useful for understanding the climate and
          weather patterns throughout the year. For example, you can see which
          months have the highest precipitation and which months have the
          highest temperatures.
        </p>
      </div>
      <div
        ref={chartRef}
        className="w-full h-64 md:h-96 lg:w-1/2 lg:h-96 "
      ></div>
    </div>
  );
};

const Chart2 = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    var myChart = echarts.init(chartRef.current);
    var option = {
      xAxis: {
        type: "category",
        data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      },
      yAxis: {
        type: "value",
      },
      series: [
        {
          data: [150, 230, 224, 218, 135, 147, 260],
          type: "line",
        },
      ],
    };

    myChart.setOption(option);
  }, []);

  return (
    <div className="flex flex-col lg:flex-row items-start lg:items-center lg:space-x-4">
      <div className="lg:w-1/2 p-4 bg-white shadow rounded">
        <h2 className="text-lg sm:p-5 sm:text-xl md:text-2xl lg:text-3xl">
          Weekly Data
        </h2>
        <p className="text-sm sm:p-5 sm:text-base md:text-lg lg:text-xl">
          This chart presents data for each day of the week. The x-axis
          represents the days of the week, from Monday to Sunday. The y-axis
          represents the data values. The data is represented by a line chart,
          with the line's height at any point indicating the data value on that
          day. This chart can be useful for tracking weekly trends or patterns
          in the data.
        </p>
      </div>
      <div
        ref={chartRef}
        className="w-full h-64 md:h-96 lg:w-1/2 lg:h-96"
      ></div>
    </div>
  );
};

const ChartDisplay = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-gradient-to-r from-green-200 to-blue-300 text-gray-800">
      <div className="space-y-8">
        <Chart1 />
        <br/>
        <Chart2 />
      </div>
    </div>
  );
};

export default ChartDisplay;
