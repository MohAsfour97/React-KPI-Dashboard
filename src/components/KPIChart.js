import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const KPIChart = ({ data }) => {
  const chartData = {
    labels: data.map((item) => item.date), // assuming you have date field
    datasets: [
      {
        label: 'Actual KPI',
        data: data.map((item) => item.actual),
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
      },
      {
        label: 'Target KPI',
        data: data.map((item) => item.target),
        borderColor: 'rgba(153, 102, 255, 1)',
        backgroundColor: 'rgba(153, 102, 255, 0.2)',
      },
    ],
  };

  return <Line data={chartData} />;
};

export default KPIChart;
