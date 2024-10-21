import "./Mood.scss";
import Header from "../../Components/Header/Header";
import MoodBox from "../../Components/MoodBox/MoodBox";
import Footer from "../../Components/Footer/Footer";

function Mood() {
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
      <Footer />
    </main>
  );
}

export default Mood;
