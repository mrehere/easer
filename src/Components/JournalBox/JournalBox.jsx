import { useState, useEffect } from "react";
import axios from "axios";
import "./JournalBox.scss";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { auth } from "../../Components/auth/firebase";

function JournalBox({ addJournalEntry }) {
  const [title, setTitle] = useState("");
  const [journal, setJournal] = useState("");
  const navigate = useNavigate();
  const [inputError, setInputError] = useState(false);

  // ----------- authentication ------------
  const [authUser, setAuthUser] = useState(null);
  const [userId, setUserId] = useState(null);
  useEffect(() => {
    const listen = auth.onAuthStateChanged((user) => {
      if (user) {
        setAuthUser(user);
        setUserId(user.uid);
      } else {
        setAuthUser(null);
      }
    });
    return () => listen();
  }, []);
  const url = import.meta.env.VITE_URL;
  const guestId = "12345";
  const activeId = userId ? userId : guestId;
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
    if (activeId && title && journal) {
      const entry = {
        userId: activeId,
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
      authUser ? navigate("/journal") : navigate("/guest/journal");

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

  const handleCancel = () => {
    setTitle("");
    setJournal("");
    setInputError(false);
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
          <button
            type="button"
            onClick={() => handleCancel()}
            className="journal__cancel"
          >
            cancel
          </button>
        </div>
        <ToastContainer />
      </form>
    </>
  );
}

export default JournalBox;
