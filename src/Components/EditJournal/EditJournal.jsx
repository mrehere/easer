import "./EditJournal.scss";
import backIcon from "../../assets/icons/back.svg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function EditJournal({ onClose, journal }) {
  const [title, setTitle] = useState(journal.title);
  const [entryJournal, setEntryJournal] = useState(journal.entryJournal);
  const navigate = useNavigate();
  const onGoBack = () => {
    navigate("/journal");
  };
  console.log(journal.entryId);

  const handleSubmit = (e) => {
    e.preventDefault();
    onGoBack();
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
          <button
            onSubmit={handleSubmit}
            type="submit"
            className="editJournal__preserve"
          >
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
