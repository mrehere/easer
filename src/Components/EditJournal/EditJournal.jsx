import "./EditJournal.scss";
import backIcon from "../../assets/icons/back.svg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function EditJournal({ onClose, journal }) {
  // // Dummy data for now, replace this later with dynamic data
  // const journal = {
  //   title: "A Day at the Beach",
  //   entryJournal:
  //     "It was a sunny day, and I enjoyed the fresh air and the calming waves of the ocean.",
  // };

  const [title, setTitle] = useState(journal.title);
  const [entryJournal, setEntryJournal] = useState(journal.entryJournal);
  const navigate = useNavigate();
  const onGoBack = () => {
    navigate("/journal");
  };

  return (
    <>
      <form className="editJournal">
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
          placeholder="Learning JavaScript"
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
          <button onClick={onClose} className="editJournal__cancel">
            cancel
          </button>
        </div>
      </form>
    </>
  );
}

export default EditJournal;
