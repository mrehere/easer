import "./Journal.scss";
import axios from "axios";
import { useEffect, useState } from "react";
import Header from "../../Components/Header/Header.jsx";
import Footer from "../../Components/Footer/Footer.jsx";
import JournalBox from "../../Components/JournalBox/JournalBox.jsx";

import editIcon from "../../assets/icons/edit.svg";
import deleteIcon from "../../assets/icons/delete.svg";

function Journal() {
  const journal = [
    {
      userId: "12345",
      entryId: "001",
      title: "Productive Day at Work",
      entryJournal:
        "Today, I felt extremely productive and was able to finish several tasks ahead of schedule. I feel accomplished and motivated for the rest of the week.",
      createdAt: 1729063500000,
    },
    {
      userId: "12345",
      entryId: "002",
      title: "Afternoon Walk in the Park",
      entryJournal:
        "Took a walk in the park today during my break. The fresh air and sunshine lifted my mood, and I feel more relaxed now.",
      createdAt: 1729150800000,
    },
  ];
  const [journalEntries, setJournalEntries] = useState();
  const [journalLoading, setJournalLoading] = useState(false);
  const url = import.meta.env.VITE_URL;

  const fetchJournals = async () => {
    setJournalLoading(true);
    try {
      const response = await axios.get(`${url}/journal`);
      setJournalEntries(response.data);
      setJournalLoading(false);
    } catch (error) {
      console.error(`Couldn't retrieve journal entries`, error);
      setJournalLoading(false);
    }
  };

  useEffect(() => {
    fetchJournals();
  }, []);

  // fetchJournals();

  const sortedJournal = journal.sort((a, b) => {
    return b.createdAt - a.createdAt;
  });

  // ------------------sort the journal entries--------------------
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

  // if (!journalLoading) {
  //   <h1>Please stand by, Journal Entries are loading....</h1>;

  //   return;
  // }
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
          {sortedJournal.map((journal) => {
            return (
              <div className="journal__cardContainer" key={journal.entryId}>
                <p className="journal__entryDate">
                  Journaled on: {formatDate(journal.createdAt)}
                </p>
                <div className="journal__card">
                  <h4 className="journal__cardTitle">{journal.title}</h4>
                  <p className="journal__text">{journal.entryJournal}</p>
                  <div className="journal__actions">
                    <button className="journal__edit">
                      <img src={editIcon} alt="Edit" />
                    </button>
                    <button className="journal__delete">
                      <img src={deleteIcon} alt="Delete" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </section>
        <Footer />
      </main>
    </>
  );
}

export default Journal;
