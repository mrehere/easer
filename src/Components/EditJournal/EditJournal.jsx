import "./EditJournal.scss";
import backIcon from "../../assets/icons/back.svg";

function EditJournal() {
  // Dummy data for now, replace this later with dynamic data
  const journal = {
    title: "A Day at the Beach",
    entryJournal:
      "It was a sunny day, and I enjoyed the fresh air and the calming waves of the ocean.",
  };
  return (
    <>
      <form className="editJournal">
        <img className="editJournal__back" src={backIcon} alt="back-icon" />
        <input
          className="editJournal__title"
          type="text"
          placeholder="Learning JavaScript"
        ></input>
        <textarea
          type="text"
          placeholder="enter your feelings!"
          className="editJournal__journal"
        ></textarea>
      </form>
    </>
  );
}

export default EditJournal;
