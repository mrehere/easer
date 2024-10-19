import "./Journal.scss";

import Header from "../../Components/Header/Header.jsx";
import Footer from "../../Components/Footer/Footer.jsx";
import JournalBox from "../../Components/JournalBox/JournalBox.jsx";
function Journal() {
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
    <>
      <main className="journal">
        <Header title="journal" subtitle="Unwind, Reflect, and Heal!" />
        <div className="journal__dateContainer">
          <p className="journal__date">{formatDate(Date.now())}</p>
        </div>
        <JournalBox />
        <Footer />
      </main>
    </>
  );
}

export default Journal;
