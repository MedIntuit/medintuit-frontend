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

const Chart = ({ fieldName, data, minThresholdValue, maxThresholdValue }) => {
  useEffect(() => {
    return () => {
      ChartJS.getChart("chart-id")?.destroy();
    };
  }, []);

  const labels = data.map((item) => new Date(item?.timestamp));

  const dataPoints = data.map((item) => parseFloat(item?.field1))
  const minThreshold = minThresholdValue ?? null;
  const maxThreshold = maxThresholdValue ?? null;

  const minThresholdLine = new Array(data.length).fill(minThreshold);
  const maxThresholdLine = new Array(data.length).fill(maxThreshold);

  const chartData = {
    labels,
    datasets: [
      {
        label: `${fieldName} (°C)`,
        data: dataPoints,
        fill: false,
        borderColor: "rgb(75, 0, 192)",
        tension: 0.1,
      },
      {
        label: `MinThreshold(${minThreshold})`,
        data: minThresholdLine,
        borderColor: "blue",
        borderWidth: 2,
        borderDash: [5,5],
        pointRadius: 0,
      },
      {
        label: `MaxThreshold(${maxThreshold})`,
        data: maxThresholdLine,
        borderColor: "red",
        borderWidth: 2,
        borderDash: [5,5],
        pointRadius: 0,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      tooltip: {
        callbacks: {
          label: (tooltipItem) => `${fieldName}: ${tooltipItem.raw}°C`,
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
