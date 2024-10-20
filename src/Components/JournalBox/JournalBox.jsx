import { useState } from "react";
import axios from "axios";
import "./JournalBox.scss";
import { useNavigate } from "react-router-dom";

function JournalBox({ addJournalEntry }) {
  const [title, setTitle] = useState("");
  const [journal, setJournal] = useState("");
  const navigate = useNavigate();
  const userId = "12345";

  const url = import.meta.env.VITE_URL;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (userId && title && journal) {
      const entry = {
        userId: userId,
        title: title,
        entryJournal: journal,
      };

      try {
        const response = await axios.post(`${url}/journal`, entry);
        console.log("Journal entry saved", response.data);
        addJournalEntry(response.data.newJournal);
      } catch (error) {
        console.error("Error saving journal entry:", error);
      }

      setTitle("");
      setJournal("");
      navigate("/journal");
    } else {
      //stoping from posting if form's empty
      console.log("please enter value for the form");
      return;
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit} className="journal__journalContainer">
        <p className="journal__journalHeader">How are you feeling today?</p>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="journal__title"
          type="text"
          placeholder="give the feelings a name?"
        ></input>
        <textarea
          value={journal}
          onChange={(e) => setJournal(e.target.value)}
          type="text"
          placeholder="enter your feelings!"
          className="journal__journal"
        ></textarea>

        <div className="journal__buttonContainer">
          <button type="submit" className="journal__preserve">
            preserve!
          </button>
          <button className="journal__cancel">cancel</button>
        </div>
      </form>
    </>
  );
}

export default JournalBox;
