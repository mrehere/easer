import "./Journal.scss";
import axios from "axios";
import { useEffect, useState } from "react";
import Header from "../../Components/Header/Header.jsx";
import Footer from "../../Components/Footer/Footer.jsx";
import JournalBox from "../../Components/JournalBox/JournalBox.jsx";

import EditJournal from "../../Components/EditJournal/EditJournal.jsx";

import editIcon from "../../assets/icons/edit.svg";
import deleteIcon from "../../assets/icons/delete.svg";
import DeleteJournal from "../../Components/DeleteJournal/DeleteJournal.jsx";

function Journal() {
  const [journalEntries, setJournalEntries] = useState();
  const [journalLoading, setJournalLoading] = useState(false);

  const [modal, setModal] = useState(false);
  const [modalAction, setModalAction] = useState(null);
  const [currentJournal, setCurrentJournal] = useState(null);
  const url = import.meta.env.VITE_URL;

  const fetchJournals = async () => {
    try {
      const response = await axios.get(`${url}/journal`);
      setJournalEntries(response.data);
      setJournalLoading(true);
    } catch (error) {
      console.error(`Couldn't retrieve journal entries`, error);
      setJournalLoading(false);
    }
  };

  //updaing UI for new post and updates and deletes of journal entries
  const addJournalEntry = (newEntry) => {
    setJournalEntries((prevEntries) => [newEntry, ...prevEntries]);
  };

  const updateJournalEntry = (updatedEntry) => {
    setJournalEntries((prevEntries) => {
      return prevEntries.map((currentEntry) => {
        // If the entry ID matches, return the updated entry; otherwise, return the current entry
        return currentEntry.entryId === updatedEntry.entryId
          ? updatedEntry
          : currentEntry;
      });
    });
  };

  useEffect(() => {
    fetchJournals();
  }, []);

  //added right after call fetchJournals() for error handling
  if (!journalLoading) {
    <h1>Please stand by, Journal Entries are loading....</h1>;

    return;
  }

  const sortedJournal = journalEntries.sort((a, b) => {
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

  // modal opener and closers
  const openModal = (journal, action) => {
    setModal(true);
    setCurrentJournal(journal);
    setModalAction(action);
  };

  const closeModal = () => {
    setModal(false);
    setCurrentJournal(null);
  };

  const handleOverlayClick = (event) => {
    // Closes the modal when clicking on the overlay (outside the modal content)
    if (event.target.classList.contains("journal__modal")) {
      closeModal();
    }
  };
  return (
    <>
      <main className="journal">
        <Header title="Journal" subtitle="Unwind, Reflect, and Heal!" />
        <div className="journal__dateContainer">
          <p className="journal__date">{formatDate(Date.now())}</p>
        </div>

        <JournalBox addJournalEntry={addJournalEntry} />

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
                    <button
                      onClick={() => openModal(journal, "edit")}
                      className="journal__edit"
                    >
                      <img src={editIcon} alt="Edit" />
                    </button>
                    <button
                      onClick={() => openModal(journal, "delete")}
                      className="journal__delete"
                    >
                      <img src={deleteIcon} alt="Delete" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </section>
        <Footer />

        {modal && (
          <div onClick={handleOverlayClick} className="journal__modal">
            {modalAction === "edit" ? (
              <EditJournal
                updateJournalEntry={updateJournalEntry}
                journal={currentJournal}
                onClose={closeModal}
              />
            ) : (
              <DeleteJournal journal={currentJournal} onClose={closeModal} />
            )}
          </div>
        )}
      </main>
    </>
  );
}

export default Journal;
