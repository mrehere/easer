import { useEffect, useState } from "react";
import "./MoodHistory.scss";
import axios from "axios";

function MoodHistory() {
  const [mood, setMood] = useState([]);
  const [moodLoading, setMoodLoading] = useState(false);
  const url = import.meta.env.VITE_URL;

  const fetchMoods = async () => {
    try {
      const response = await axios.get(`${url}/mood`);
      setMood(response.data);
      setMoodLoading(true);
    } catch (error) {
      console.error("Error fetching moods", error);
    }
  };
  useEffect(() => {
    fetchMoods();
  }, []);

  if (!moodLoading) {
    return <h1>Please standby, mood is Loading....</h1>;
  }

  const moody = [
    {
      userId: "12345",
      moodId: "m2",
      moodName: "content",
      createdAt: 1727962226189,
    },
    {
      userId: "12345",
      moodId: "m1",
      moodName: "joyful",
      createdAt: 1729171826189,
    },
    {
      userId: "12345",
      moodId: "m5",
      moodName: "crying",
      createdAt: 1727357426189,
    },
  ];

  const moodMap = {
    joyful: "😊",
    content: "🙂",
    confused: "😕",
    angry: "😠",
    crying: "😢",
  };

  const moodEmoji = mood.map((mood) => ({
    ...mood,
    emoji: moodMap[mood.moodName] || "❓",
  }));

  const formatDate = (timestamp) => {
    const date = new Date(timestamp);
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    };

    return new Intl.DateTimeFormat("en-US", options).format(date);
  };
  const sortedMood = moodEmoji.sort((a, b) => {
    return b.createdAt - a.createdAt;
  });

  return (
    <section className="moodHistory">
      <h4 className="moodHistory__title">Mood History</h4>

      {sortedMood.map((mood) => {
        return (
          <div className="moodHistory__container" key={mood.createdAt}>
            <p className="moodHistory__date">
              Logged on: {formatDate(mood.createdAt)}
            </p>
            <p className="moodHistory__mood">{mood.emoji}</p>
            <p className="moodHistory__name">{mood.moodName}</p>
          </div>
        );
      })}
    </section>
  );
}

export default MoodHistory;
