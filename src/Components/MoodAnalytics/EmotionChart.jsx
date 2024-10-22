import React, { useEffect, useRef } from "react";
import { Chart, registerables } from "chart.js";

Chart.register(...registerables); // Register the required components

const EmotionChart = ({ mood, chart }) => {
  const chartRef = useRef(null);

  // Filter only current mood and map their createdAt dates and mood count
  const joyfulMoods = mood.filter((m) => m.moodName === chart);

  // Format the date for each joyful mood entry
  const updatedJoyfulMoods = joyfulMoods.map((m) => ({
    ...m,
    createdAt: new Date(m.createdAt).toLocaleString("default", {
      month: "long", // Extracts full month name
      year: "numeric",
    }),
  }));

  // Get unique month-year combinations and their occurrence count for the Y-axis
  const joyfulByDate = updatedJoyfulMoods.reduce((acc, curr) => {
    acc[curr.createdAt] = (acc[curr.createdAt] || 0) + 1; // Count joyful moods per month
    return acc;
  }, {});

  // Extract the labels (unique months) and the corresponding data (counts)
  const labels = Object.keys(joyfulByDate); // X-axis labels (months)
  const data = Object.values(joyfulByDate); // Y-axis data (counts of joyful moods)

  useEffect(() => {
    const ctx = chartRef.current.getContext("2d");

    const JoyfulChart = new Chart(ctx, {
      type: "line",
      data: {
        labels, // X-axis labels (months)
        datasets: [
          {
            label: `${chart} Dataset`,
            backgroundColor: "rgba(75, 192, 192, 0.2)", // Area fill color
            borderColor: "rgba(75, 192, 192, 1)", // Line color
            borderWidth: 2,
            pointBackgroundColor: "rgba(255, 99, 132, 1)", // Point color
            pointRadius: 5, // Point size
            pointHoverRadius: 7, // Hover point size
            data, // Y-axis data (counts of joyful moods)
            fill: true, // Fill the area under the line
          },
        ],
      },
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true, // Start Y-axis at zero
          },
        },
      },
    });

    return () => {
      JoyfulChart.destroy(); // Clean up chart when component unmounts
    };
  }, [labels, data]); // Add labels and data as dependencies

  return <canvas ref={chartRef} />;
};

export default EmotionChart;
