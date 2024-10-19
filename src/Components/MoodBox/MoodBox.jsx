import "./MoodBox.scss";

function MoodBox() {
  return (
    <>
      <section className="mood__moodContainer">
        <p className="mood__moodHeader">How's you mood right now?</p>
        <div className="mood__moodSelector">
          <div className="mood__joyful">
            😊
            <span className="mood__joyfulText">joyful</span>
          </div>
          <div className="mood__content">
            🙂
            <span className="mood__contentText">content</span>
          </div>
          <div className="mood__confused">
            😕
            <span className="mood__confusedText">confused</span>
          </div>
          <div className="mood__angry">
            😠
            <span className="mood__angryText">angry</span>
          </div>
          <div className="mood__crying">
            😢
            <span className="mood__cryingText">crying</span>
          </div>
        </div>

        <div className="mood__buttonContainer">
          <button className="mood__preserve">preserve!</button>
          <button className="mood__cancel">cancel</button>
        </div>
      </section>
    </>
  );
}

export default MoodBox;
