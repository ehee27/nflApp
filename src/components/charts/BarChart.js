import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from 'chart.js/auto';

ChartJS.register(BarElement, Tooltip, Legend, CategoryScale, LinearScale);

const BarChart = ({ chartData }) => {
  // console.log(chartData);
  return <Bar data={chartData} />;
};

export default BarChart;
