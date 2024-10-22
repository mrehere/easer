// JoyfulChart.jsx
import React, { useEffect, useRef } from "react";
import { Chart, registerables } from "chart.js";

Chart.register(...registerables); // Register the required components

const JoyfulChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext("2d");

    const JoyfulChart = new Chart(ctx, {
      type: "line",
      data: {
        labels: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
        ], // X-axis labels
        datasets: [
          {
            label: "My First dataset",
            backgroundColor: "rgba(75, 192, 192, 0.2)", // Area fill color
            borderColor: "rgba(75, 192, 192, 1)", // Line color
            borderWidth: 2,
            pointBackgroundColor: "rgba(255, 99, 132, 1)", // Point color
            pointRadius: 5, // Point size
            pointHoverRadius: 7, // Hover point size
            data: [0, 10, 5, 2, 20, 30, 45], // Y-axis data
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
  }, []);

  return <canvas ref={chartRef} />;
};

export default JoyfulChart;
