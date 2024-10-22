import { useEffect, useState } from "react";
import axios from "axios";
import "./MoodAnalytics.scss";
import PieChart from "./PieChart";

function MoodAnalytics({ moodMap, isMoodUpdated }) {
  const [moods, setMoods] = useState();
  const [moodLoading, setMoodLoading] = useState(true);
  const url = import.meta.env.VITE_URL;

  useEffect(() => {
    const fetchMoods = async () => {
      try {
        const response = await axios.get(`${url}/mood`);

        setMoods(response.data);
        setMoodLoading(false);
      } catch (error) {
        console.error("could not fetch moods", error);
      }
    };
    fetchMoods();
  }, [isMoodUpdated]);
  if (moodLoading) {
    return <h1>Please wait mood is loading....</h1>;
  }

  const moodWithEmoji = moods.map((mood) => ({
    ...mood,
    emoji: moodMap[mood.moodName],
  }));

  return (
    <main className="analytics">
      <div className="analytics__titleContainer">
        <h2 className="analytics__title">Mood Analytics </h2>
      </div>
      <div className="analytics__chartContainer">
        <PieChart mood={moodWithEmoji} moodMap={moodMap} />
      </div>
    </main>
  );
}

export default MoodAnalytics;
