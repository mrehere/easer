import { act, useEffect, useState } from "react";
import axios from "axios";
import "./MoodBox.scss";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import useAuth from "../../Components/auth/useAuth.js";

function MoodBox({ onMoodPost }) {
  // ----------- authentication ------------
  const { authUser, authId } = useAuth();
  const url = import.meta.env.VITE_URL;
  const guestId = "12345";
  let userId = authUser ? authId : guestId;
  const moodRef = [
    {
      moodId: "m1",
      moodName: "joyful",
    },
    {
      moodId: "m2",
      moodName: "content",
    },
    {
      moodId: "m3",
      moodName: "angry",
    },
    {
      moodId: "m4",
      moodName: "confused",
    },
    {
      moodId: "m5",
      moodName: "crying",
    },
  ];

  const [currentMood, setCurrentMood] = useState("");
  const [postCurrentMood, setPostCurrentMood] = useState("");

  // -------handling the mood selection-------
  const handleMoodSelect = (mood) => {
    setCurrentMood(mood);
  };

  const handleSuccess = () => {
    toast.success(`Mood submitted 🤗`, {
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
    toast.error(`Please select an emoji 🥹`, {
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
  useEffect(() => {
    if (currentMood) {
      //using find (returns object) instead of filter (returns array)
      const moodData = moodRef.find((mood) => mood.moodName === currentMood);
      setPostCurrentMood(moodData);
    }
  }, [currentMood]);

  // ------- handle submit -------

  // -- inserting the userId in the post object
  const postMoodWithId = Object.assign({}, postCurrentMood, { userId });

  const handlePreserve = async () => {
    if (postMoodWithId && currentMood) {
      try {
        const response = await axios.post(`${url}/mood`, postMoodWithId);
        console.log("Mood posted successfully");

        // -------- update mood list UI --------
        onMoodPost();
      } catch (error) {
        console.error("Failed to post moods", error);
      }

      setCurrentMood("");
      setPostCurrentMood("");
      handleSuccess();
    } else {
      handleError();
      // alert(`please click an emoji to submit`);
    }
  };

  const handleCancel = () => {
    setCurrentMood("");
    setPostCurrentMood("");
  };

  return (
    <>
      <section className="mood__moodContainer">
        <p className="mood__moodHeader">Rate your mood today!</p>
        <div className="mood__moodSelector">
          <div
            onClick={() => handleMoodSelect("joyful")}
            className={`mood__joyful ${
              currentMood === "joyful" ? "mood__joyful--selected" : ""
            }`}
          >
            😊
            <span className="mood__joyfulText">joyful</span>
          </div>

          <div
            onClick={() => handleMoodSelect("content")}
            className={`mood__content ${
              currentMood === "content" ? "mood__content--selected" : ""
            }`}
          >
            🙂
            <span className="mood__contentText">content</span>
          </div>

          <div
            onClick={() => handleMoodSelect("confused")}
            className={`mood__confused ${
              currentMood === "confused" ? "mood__confused--selected" : ""
            }`}
          >
            😕
            <span className="mood__confusedText">confused</span>
          </div>

          <div
            onClick={() => handleMoodSelect("angry")}
            className={`mood__angry ${
              currentMood === "angry" ? "mood__angry--selected" : ""
            }`}
          >
            😠
            <span className="mood__angryText">angry</span>
          </div>
          <div
            onClick={() => handleMoodSelect("crying")}
            className={`mood__crying ${
              currentMood === "crying" ? "mood__crying--selected" : ""
            }`}
          >
            😢
            <span className="mood__cryingText">crying</span>
          </div>
        </div>

        <div className="mood__buttonContainer">
          <button
            onClick={() => {
              handlePreserve();
            }}
            className="mood__preserve"
          >
            preserve!
          </button>
          <button
            onClick={() => {
              handleCancel();
            }}
            className="mood__cancel"
          >
            cancel
          </button>
        </div>
        <ToastContainer />
      </section>
    </>
  );
}

export default MoodBox;
