import { useEffect, useState } from "react";
import axios from "axios";
import "./MoodAnalytics.scss";
import PieChart from "./PieChart";
import EmotionChart from "./EmotionChart";
import { auth } from "../../Components/auth/firebase";

function MoodAnalytics({ moodMap, isMoodUpdated }) {
  const [moods, setMoods] = useState();
  const [moodLoading, setMoodLoading] = useState(true);
  const [chartSelector, setChartSelector] = useState("pie");

  // ----------- authentication ------------

  const [authUser, setAuthUser] = useState(null);
  const [userId, setUserId] = useState(null);
  useEffect(() => {
    const listen = auth.onAuthStateChanged((user) => {
      if (user) {
        setAuthUser(user);
        setUserId(user.uid);
      } else {
        setAuthUser(null);
      }
    });
    return () => listen();
  }, []);

  const url = import.meta.env.VITE_URL;
  const guestId = "12345";
  const activeId = userId ? userId : guestId;
  useEffect(() => {
    const fetchMoods = async () => {
      try {
        const response = await axios.get(`${url}/mood/${activeId}`);

        setMoods(response.data);
        setMoodLoading(false);
      } catch (error) {
        console.error("could not fetch moods", error);
      }
    };
    if (userId || guestId) {
      fetchMoods();
    }
  }, [isMoodUpdated, userId]);
  if (moodLoading) {
    return <h1>Please wait mood is loading....</h1>;
  }

  const moodWithEmoji = moods.map((mood) => ({
    ...mood,
    emoji: moodMap[mood.moodName],
  }));

  const chartHandler = (chart) => {
    setChartSelector(chart);
  };
  return (
    <main className="analytics">
      <div className="analytics__titleContainer">
        <h2 className="analytics__title">Mood Analytics </h2>
      </div>
      <div className="analytics__buttonContainer">
        <button
          onClick={() => chartHandler("pie")}
          className={`analytics__content ${
            chartSelector === "pie" ? "analytics__content--active" : ""
          } `}
        >
          🥧
        </button>
        <button
          onClick={() => chartHandler("joyful")}
          className={`analytics__content ${
            chartSelector === "joyful" ? "analytics__content--active" : ""
          } `}
        >
          😊
        </button>

        <button
          onClick={() => chartHandler("content")}
          className={`analytics__content ${
            chartSelector === "content" ? "analytics__content--active" : ""
          } `}
        >
          🙂
        </button>

        <button
          onClick={() => chartHandler("confused")}
          className={`analytics__content ${
            chartSelector === "confused" ? "analytics__content--active" : ""
          } `}
        >
          {" "}
          😕{" "}
        </button>

        <button
          onClick={() => chartHandler("angry")}
          className={`analytics__content ${
            chartSelector === "angry" ? "analytics__content--active" : ""
          } `}
        >
          😠
        </button>

        <button
          onClick={() => chartHandler("crying")}
          className={`analytics__content ${
            chartSelector === "crying" ? "analytics__content--active" : ""
          } `}
        >
          😢
        </button>
      </div>

      {chartSelector === "pie" ? (
        <div className="analytics__pieContainer">
          <PieChart mood={moodWithEmoji} moodMap={moodMap} />
        </div>
      ) : (
        <div className="analytics__lineContainer">
          <EmotionChart
            mood={moodWithEmoji}
            chart={chartSelector}
            moodMap={moodMap}
          />
        </div>
      )}
    </main>
  );
}

export default MoodAnalytics;
