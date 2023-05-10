import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from 'chart.js/auto';

ChartJS.register(BarElement, Tooltip, Legend, CategoryScale, LinearScale);

const LineChart = ({ chartData }) => {
  return <Line data={chartData} />;
};

export default LineChart;
