import { useEffect, useState } from "react";
import "./MoodHistory.scss";
import axios from "axios";

import { useAuth } from "../../Components/auth/AuthContext";

function MoodHistory({ isMoodUpdated, moodMap }) {
  const [mood, setMood] = useState([]);
  const [moodLoading, setMoodLoading] = useState(false);

  // ----------- authentication ------------
  const { loggedUser, loggedId } = useAuth();
  let authUser = loggedUser;
  let authId = loggedId;

  const url = import.meta.env.VITE_URL;
  const guestId = "12345";
  let activeId = authId ? authId : guestId;

  const fetchMoods = async () => {
    try {
      const response = await axios.get(`${url}/mood/${activeId}`);
      setMood(response.data);
      setMoodLoading(true);
    } catch (error) {
      console.error("Error fetching moods", error);
    }
  };
  useEffect(() => {
    if (activeId) {
      fetchMoods();
    }
  }, [isMoodUpdated, authId, authUser]);

  if (!moodLoading) {
    return <h1>Please standby, mood is Loading....</h1>;
  }

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
