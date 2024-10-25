import "./EditJournal.scss";
import backIcon from "../../assets/icons/back.svg";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function EditJournal({ onClose, journal, updateJournalEntry }) {
  const [title, setTitle] = useState(journal.title);
  const [entryJournal, setEntryJournal] = useState(journal.entryJournal);

  const navigate = useNavigate();

  const url = import.meta.env.VITE_URL;
  const handleSubmit = async (e) => {
    e.preventDefault();

    const entry = {
      title: title,
      entryJournal: entryJournal,
    };

    try {
      const response = await axios.put(
        `${url}/journal/${journal.entryId}`,
        entry
      );
      console.log("Journal entry saved", response.data);

      //passing new posted journal for UI update
      updateJournalEntry(response.data.updatedJournal);
    } catch (error) {
      console.error("Error saving journal entry:", error);
    }

    onClose();
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="editJournal ">
        <img
          onClick={onClose}
          className="editJournal__back"
          src={backIcon}
          alt="back-icon"
        />
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="editJournal__title"
          type="text"
          placeholder="Name your feelings?"
        ></input>
        <textarea
          value={entryJournal}
          onChange={(e) => setEntryJournal(e.target.value)}
          type="text"
          placeholder="enter your feelings!"
          className="editJournal__journal"
        ></textarea>

        <div className="editJournal__buttonContainer">
          <button type="submit" className="editJournal__preserve">
            update
          </button>
          <button
            // onClick={() => handleClose()}
            onClick={onClose}
            className="editJournal__cancel"
          >
            cancel
          </button>
        </div>
      </form>
    </>
  );
}

export default EditJournal;
