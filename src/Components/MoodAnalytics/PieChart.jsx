import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

function PieChart({ mood, moodMap }) {
  // ----------------- CHART -----------------
  const moodCounts = mood.reduce((acc, { moodName }) => {
    acc[moodName] = (acc[moodName] || 0) + 1;
    return acc;
  }, {});

  const totalMoods = Object.values(moodCounts).reduce(
    (sum, count) => sum + count,
    0
  );

  const data = {
    labels: Object.keys(moodCounts).map((mood) => `${mood} ${moodMap[mood]}`),
    datasets: [
      {
        label: "Mood Frequency",
        data: Object.values(moodCounts),
        backgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#FF9F40",
          "#4BC0C0",
        ],
        hoverBackgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#FF9F40",
          "#4BC0C0",
        ],
        borderColor: "#fff",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    // maintainAspectRatio: false, // Disable aspect ratio to allow dynamic resizing
    plugins: {
      legend: {
        position: "top",
        labels: {
          font: {
            size: (ctx) => {
              const width = ctx.chart.width;
              return width < 768 ? 16 : 32; // Adjust based on chart width
            },
          },
        },
      },
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            const moodLabel = tooltipItem.label;
            const moodValue = tooltipItem.raw;
            const percentage = ((moodValue / totalMoods) * 100).toFixed(2); // Calculate percentage
            return `${moodLabel}: ${moodValue} (${percentage}%)`;
          },
        },
      },
    },
  };

  return (
    <div>
      <Pie data={data} options={options} />
    </div>
  );
}

export default PieChart;
