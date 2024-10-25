import "./DeleteJournal.scss";
import axios from "axios";

function DeleteJournal({ journal, onClose, deletedJournalEntry }) {
  const url = import.meta.env.VITE_URL;
  const handleDelete = async () => {
    try {
      const response = await axios.delete(`${url}/journal/${journal.entryId}`);
      console.log("Journal entry saved", response.data);

      //passing new posted journal for UI update
      deletedJournalEntry(journal.entryId);
    } catch (error) {
      console.error("Error saving journal entry:", error);
    }

    onClose();
  };

  return (
    <>
      <section className="deleteJournal">
        <h2 className="deleteJournal__disclaimer">
          Are you sure you want to erase this entry?
        </h2>

        <div className="deleteJournal__buttonContainer">
          <button
            onClick={() => handleDelete()}
            type="submit"
            className="deleteJournal__delete"
          >
            delete!
          </button>
          <button onClick={onClose} className="deleteJournal__cancel">
            cancel
          </button>
        </div>
      </section>
    </>
  );
}

export default DeleteJournal;
