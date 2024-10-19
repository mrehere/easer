import "./Journal.scss";

import Header from "../../Components/Header/Header.jsx";
import Footer from "../../Components/Footer/Footer.jsx";
import JournalBox from "../../Components/JournalBox/JournalBox.jsx";

import editIcon from "../../assets/icons/edit.svg";
import deleteIcon from "../../assets/icons/delete.svg";

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
        <Header title="Journal" subtitle="Unwind, Reflect, and Heal!" />
        <div className="journal__dateContainer">
          <p className="journal__date">{formatDate(Date.now())}</p>
        </div>

        <JournalBox />

        <section className="journal__history">
          <p className="journal__historyTitle">Previous Journal Entries</p>
          <p className="journal__entryDate">
            {" "}
            Journaled on: Thursday, October 15, 2024
          </p>
          <div className="journal__cardContainer">
            <h4 className="journal__cardTitle">Journal Entry Title</h4>
            <p className="journal__text">
              This is a test journal to see if the text wraps around and it
              should.
            </p>
            <div className="journal__actions">
              <button className="journal__edit">
                <img src={editIcon} alt="Edit" />
              </button>
              <button className="journal__delete">
                <img src={deleteIcon} alt="Delete" />
              </button>
            </div>
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
}

export default Journal;
