import "./Mood.scss";
import Header from "../../Components/Header/Header";
import MoodBox from "../../Components/MoodBox/MoodBox";
import MoodHistory from "../../Components/MoodHistory/MoodHistory";
import MoodAnalytics from "../../Components/MoodAnalytics/MoodAnalytics";
import Footer from "../../Components/Footer/Footer";
import { useState } from "react";

function Mood() {
  const [moodSelection, setMoodSelection] = useState("history");

  const handleMoodSelect = (activeMood) => {
    setMoodSelection(activeMood);
  };

  // date formatting
  const formatDate = (timestamp) => {
    const date = new Date(timestamp);
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return new Intl.DateTimeFormat("en-us", options).format(date);
  };
  return (
    <main className="mood">
      <Header title="Mood" subtitle="Dive into your emotions!" />
      <div className="mood__dateContainer">
        <p className="mood__date">{formatDate(Date.now())}</p>
      </div>
      <MoodBox />
      <div className="mood__selector">
        <button
          onClick={() => handleMoodSelect("history")}
          className={`mood__history ${
            moodSelection === "history" ? "mood__history--selected" : ""
          }`}
        >
          History
        </button>
        <button
          onClick={() => handleMoodSelect("analytics")}
          className={`mood__analytics ${
            moodSelection === "analytics" ? "mood__analytics--selected" : ""
          }`}
        >
          Analytics
        </button>
      </div>
      {moodSelection === "analytics" ? <MoodAnalytics /> : <MoodHistory />}
      <Footer />
    </main>
  );
}

export default Mood;
