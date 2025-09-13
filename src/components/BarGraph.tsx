import React, { useState } from "react";
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

const BarGraph: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState("daily");

  // Example data (X-axis dates, Y-axis counts)
  const labels = [
    "23-08-2024",
    "27-08-2024",
    "29-08-2024",
    "05-09-2024",
    "10-09-2024",
    "16-10-2024",
    "21-10-2024",
    "01-02-2025",
    "02-02-2025",
  ];

  // Raw dataset
  const rawData = [5, 10, 0, 15, 20, 100, 400, 500, 100];

  // Apply filter (dummy logic, you can adapt)
  const filteredData =
    selectedFilter === "daily"
      ? rawData
      : selectedFilter === "weekly"
      ? rawData.map((v, i) => (i % 2 === 0 ? v + rawData[i + 1] || v : 0)) // example grouping
      : rawData.reduce((acc, v) => acc + v, 0); // monthly → total

  const data =
    selectedFilter === "monthly"
      ? {
          labels: ["Total Customers"],
          datasets: [
            {
              label: "Customers",
              data: [filteredData],
              backgroundColor: "rgba(245, 197, 24, 0.9)",
            },
          ],
        }
      : {
          labels,
          datasets: [
            {
              label: "Customers",
              data: filteredData,
              backgroundColor: "rgba(245, 197, 24, 0.9)",
            },
          ],
        };

  const options = {
    responsive: true,
    plugins: {
      legend: { display: false },
      title: { display: true, text: "New Customers" },
    },
    scales: {
      x: {
        ticks: { autoSkip: true, maxRotation: 45, minRotation: 45 },
      },
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div style={{ width: "470px", margin: "0 auto" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "10px",
        }}
      >
        <h5 style={{ margin: 0 }}>New Customers</h5>
        <select
          value={selectedFilter}
          onChange={(e) => setSelectedFilter(e.target.value)}
        >
          <option value="daily">Daily</option>
          <option value="weekly">Weekly</option>
          <option value="monthly">Monthly</option>
        </select>
      </div>
      <Bar data={data} options={options} />
    </div>
  );
};

export default BarGraph;
