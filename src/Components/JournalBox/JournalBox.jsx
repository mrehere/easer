import "./JournalBox.scss";
function JournalBox() {
  return (
    <>
      <form className="journal__journalContainer">
        <p className="journal__journalHeader">How are you feeling today?</p>
        <textarea
          type="text"
          placeholder="enter your feelings!"
          className="journal__journal"
        ></textarea>

        <div className="journal__buttonContainer">
          <button className="journal__preserve">preserve!</button>
          <button className="journal__cancel">cancel</button>
        </div>
      </form>
    </>
  );
}

export default JournalBox;
