import { useState } from "react";
import "./JournalBox.scss";

function JournalBox() {
  const [title, setTitle] = useState("");
  const [journal, setJournal] = useState("");
  const userId = "12345";
  const handleSubmit = (e) => {
    e.preventDefault();
    const entry = {
      userId: userId,
      title: title,
      entryJournal: journal,
    };

    console.log(entry);
    setTitle("");
    setJournal("");
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
