import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const data = {
  labels: ["Apple", "Orange", "Banana", "Mango", "Grape"],
  datasets: [
    {
      label: "Mangoes",
      data: [10, 15, 25, 30, 28],
      backgroundColor: "rgba(245, 224, 39, 0.77)",
    },
    {
      label: "Apples",
      data: [20, 35, 15, 20, 18],
      backgroundColor: "rgba(250, 0, 0, 0.77)",
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: { position: "top" as const },
    title: { display: true, text: "Fruit Data" },
  },
};

const BarGraph: React.FC = () => <Bar data={data} options={options} />;

export default BarGraph;
