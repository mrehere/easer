import "./MoodAnalytics.scss";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

function MoodAnalytics() {
  const randomMoodData = [
    {
      userId: "1001",
      moodId: "m1",
      moodName: "joyful",
      createdAt: 1727962226000,
    },
    {
      userId: "1002",
      moodId: "m3",
      moodName: "angry",
      createdAt: 1728062227000,
    },
    {
      userId: "1003",
      moodId: "m2",
      moodName: "content",
      createdAt: 1728162228000,
    },
    {
      userId: "1004",
      moodId: "m5",
      moodName: "crying",
      createdAt: 1728262229000,
    },
    {
      userId: "1001",
      moodId: "m4",
      moodName: "confused",
      createdAt: 1728362230000,
    },
    {
      userId: "1005",
      moodId: "m1",
      moodName: "joyful",
      createdAt: 1728462231000,
    },
    {
      userId: "1003",
      moodId: "m2",
      moodName: "content",
      createdAt: 1728562232000,
    },
    {
      userId: "1002",
      moodId: "m3",
      moodName: "angry",
      createdAt: 1728662233000,
    },
    {
      userId: "1004",
      moodId: "m5",
      moodName: "crying",
      createdAt: 1728762234000,
    },
    {
      userId: "1005",
      moodId: "m4",
      moodName: "confused",
      createdAt: 1728862235000,
    },
    {
      userId: "1001",
      moodId: "m1",
      moodName: "joyful",
      createdAt: 1728962236000,
    },
    {
      userId: "1002",
      moodId: "m3",
      moodName: "angry",
      createdAt: 1729062237000,
    },
    {
      userId: "1003",
      moodId: "m2",
      moodName: "content",
      createdAt: 1729162238000,
    },
    {
      userId: "1004",
      moodId: "m5",
      moodName: "crying",
      createdAt: 1729262239000,
    },
    {
      userId: "1005",
      moodId: "m4",
      moodName: "confused",
      createdAt: 1729362240000,
    },
  ];
  const moodMap = {
    joyful: "😊",
    content: "🙂",
    confused: "😕",
    angry: "😠",
    crying: "😢",
  };

  const moodsWithEmojis = randomMoodData.map((mood) => ({
    ...mood,
    emoji: moodMap[mood.moodName],
  }));
  console.log(moodsWithEmojis);

  // ----------------- CHART -----------------
  const moodCounts = moodsWithEmojis.reduce((acc, { moodName }) => {
    acc[moodName] = (acc[moodName] || 0) + 1;
    return acc;
  }, {});

  const data = {
    labels: Object.keys(moodCounts), // Mood names (e.g., joyful, angry, etc.)
    datasets: [
      {
        label: "Mood Frequency",
        data: Object.values(moodCounts), // Number of occurrences of each mood
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
    plugins: {
      legend: {
        position: "top",
      },
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            return `${tooltipItem.label}: ${tooltipItem.raw}`;
          },
        },
      },
    },
  };

  return (
    <div>
      <h2>Mood Analytics (Pie Chart)</h2>
      <Pie data={data} options={options} />
    </div>
  );
}

export default MoodAnalytics;
