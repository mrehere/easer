import "./Footer.scss";
import journalIcon from "../../assets/icons/journal.svg";
import moodIcon from "../../assets/icons/mood.svg";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__journalContainer">
        <img
          className="footer__journalIcon"
          src={journalIcon}
          alt="journal-icon"
        />
        <p className="footer__journal">Journal</p>
      </div>
      <div className="footer__moodContainer">
        <img className="footer__moodIcon" src={moodIcon} alt="mood-icon" />
        <p className="footer__mood">Mood</p>
      </div>
    </footer>
  );
}

export default Footer;
