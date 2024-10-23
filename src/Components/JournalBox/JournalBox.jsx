import { useState } from "react";
import axios from "axios";
import "./JournalBox.scss";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function JournalBox({ addJournalEntry }) {
  const [title, setTitle] = useState("");
  const [journal, setJournal] = useState("");
  const navigate = useNavigate();
  const userId = "12345";

  const url = import.meta.env.VITE_URL;

  const [inputError, setInputError] = useState(false);
  // toaster functions
  const handleSuccess = () => {
    toast.success(`Journal submitted 🤗`, {
      position: "top-center",
      autoClose: 1500,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
      className: "custom-toast",
      bodyClassName: "custom-toast-body",
    });
  };
  const handleError = () => {
    toast.error("Don’t submit your journal empty! 😬", {
      position: "top-center",
      autoClose: 1500,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
      className: "custom-toast-error",
      bodyClassName: "custom-toast-body-error",
    });
  };

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

        //passing new posted journal for UI update
        addJournalEntry(response.data.newJournal);
      } catch (error) {
        console.error("Error saving journal entry:", error);
      }

      setTitle("");
      setJournal("");
      navigate("/journal");

      handleSuccess();
      setInputError(false);
    } else {
      //stoping from posting if form's empty
      console.log("please enter value for the form");
      handleError();
      setInputError(true);
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
          className={`journal__title ${
            inputError ? "journal__title--error" : ""
          }`}
          type="text"
          placeholder="name your feelings?"
        ></input>
        <textarea
          value={journal}
          onChange={(e) => setJournal(e.target.value)}
          type="text"
          placeholder="enter your feelings!"
          className={`journal__journal ${
            inputError ? "journal__journal--error" : ""
          }`}
        ></textarea>

        <div className="journal__buttonContainer">
          <button type="submit" className="journal__preserve">
            preserve!
          </button>
          <button className="journal__cancel">cancel</button>
        </div>
        <ToastContainer />
      </form>
    </>
  );
}

export default JournalBox;
