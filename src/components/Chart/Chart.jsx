import { useEffect } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  TimeSeriesScale,
} from "chart.js";
import "chartjs-adapter-date-fns";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  TimeSeriesScale,
  Title,
  Tooltip,
  Legend
);

const Chart = ({ fieldName, data }) => {
  useEffect(() => {
    return () => {
      ChartJS.getChart("chart-id")?.destroy();
    };
  }, []);

  const labels = data.map((item) => {
    const date = new Date(item?.timestamp);
    return date;
  });

  const dataPoints = data.map((item) => {
    const field1Value = parseFloat(item?.field1);
    const minValue = parseFloat(item?.minThreshold)
    const maxValue = parseFloat(item?.maxThreshold)
    return field1Value, minValue, maxValue;
  });

  const chartData = {
    labels,
    datasets: [
      {
        label: `${fieldName} (°C)`,
        data: dataPoints,
        fill: false,
        borderColor: "rgb(75, 192, 192)",
        tension: 0.1,
      },
      {
        label: "MinThreshold Value(60)",
        data: dataPoints,
        fill: false,
        borderColor: "rgb(212, 19, 19)",
        tension: 0.1,
      },
      {
        label: "MaxThreshold Value(100)",
        data: dataPoints,
        fill: false,
        borderColor: "rgb(212, 19, 19)",
        tension: 0.1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            return `${fieldName}: ${tooltipItem.raw}°C`;
          },
        },
      },
      legend: {
        display: true,
        position: "top",
      },
    },
    scales: {
      x: {
        type: "time",
        time: {
          unit: "hour",
        },
        title: {
          display: true,
          text: "Time",
        },
      },
      y: {
        min: 0,
        title: {
          display: true,
          text: `${fieldName} (°C)`,
        },
      },
    },
  };

  return <Line id="chart-id" data={chartData} options={options} />;
};

export default Chart;
