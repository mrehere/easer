import { useEffect, useState } from "react";
import axios from "axios";
import "./MoodBox.scss";

function MoodBox() {
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

  useEffect(() => {
    if (currentMood) {
      //using find (returns object) instead of filter (returns array)
      const moodData = moodRef.find((mood) => mood.moodName === currentMood);
      setPostCurrentMood(moodData);
    }
  }, [currentMood]);

  // ------- handle submit -------

  const handlePreserve = () => {
    if (postCurrentMood) {
      console.log(postCurrentMood);
      setCurrentMood("");
      setPostCurrentMood("");
    }
  };
  return (
    <>
      <section className="mood__moodContainer">
        <p className="mood__moodHeader">Rate your mood today!</p>
        <div className="mood__moodSelector">
          <div
            onClick={() => handleMoodSelect("joyful")}
            className="mood__joyful"
          >
            😊
            <span className="mood__joyfulText">joyful</span>
          </div>

          <div
            onClick={() => handleMoodSelect("content")}
            className="mood__content"
          >
            🙂
            <span className="mood__contentText">content</span>
          </div>
          <div
            onClick={() => handleMoodSelect("confused")}
            className="mood__confused"
          >
            😕
            <span className="mood__confusedText">confused</span>
          </div>

          <div
            onClick={() => handleMoodSelect("angry")}
            className="mood__angry"
          >
            😠
            <span className="mood__angryText">angry</span>
          </div>
          <div
            onClick={() => handleMoodSelect("crying")}
            className="mood__crying"
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
          <button className="mood__cancel">cancel</button>
        </div>
      </section>
    </>
  );
}

export default MoodBox;
