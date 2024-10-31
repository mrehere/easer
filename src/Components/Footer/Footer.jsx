import { useNavigate } from "react-router-dom";

import "./Footer.scss";
import { useEffect, useState } from "react";
import { auth } from "../auth/firebase";
function Footer() {
  const routeStatus = location.pathname;
  const navigate = useNavigate();

  const [iconSize, setIconSize] = useState(24);
  const [authUser, setAuthUser] = useState(null);

  // ------- authentication check ----------
  useEffect(() => {
    const listen = auth.onAuthStateChanged((user) => {
      if (user) {
        setAuthUser(user);
      } else {
        setAuthUser(null);
      }
    });
    return () => listen();
  }, []);

  useEffect(() => {
    const handleIcon = () => {
      if (window.innerWidth <= 767) {
        setIconSize(24);
      } else if (window.innerWidth >= 768 && window.innerWidth <= 1280) {
        setIconSize(30);
      } else {
        setIconSize(48);
      }
    };
    handleIcon();

    window.addEventListener("resize", handleIcon); // Add resize event listener
    return () => {
      window.removeEventListener("resize", handleIcon); // Cleanup listener on unmount
    };
  }, []);

  const clickHome = () => {
    authUser ? navigate("/home") : navigate("/guest/home");
  };

  const clickJournal = () => {
    authUser ? navigate("/journal") : navigate("/guest/journal");
  };

  const clickMood = () => {
    authUser ? navigate("/mood") : navigate("/guest/mood");
  };

  return (
    <footer className="footer">
      {routeStatus !== "/home" && routeStatus !== "/guest/home" && (
        <div
          onClick={() => clickHome()}
          className={`footer__homeContainer ${
            routeStatus === "/home" ? "footer__homeContainer--active" : ""
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height={`${iconSize}px`}
            viewBox="0 -960 960 960"
            width={`${iconSize}px`}
            fill={
              routeStatus === "/home" || routeStatus === "/guest/home"
                ? "#a5d6a7"
                : "#FFFFFF"
            }
          >
            <path d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z" />
          </svg>

          <p
            className={`footer__home ${
              routeStatus === "/home" || routeStatus === "/guest/home"
                ? "footer__home--active"
                : ""
            }`}
          >
            Home
          </p>
        </div>
      )}
      <div onClick={() => clickJournal()} className="footer__journalContainer">
        <svg
          className="footer__journalIcon"
          xmlns="http://www.w3.org/2000/svg"
          height={`${iconSize}px`}
          viewBox="0 -960 960 960"
          width={`${iconSize}px`}
          fill={
            routeStatus === "/journal" || routeStatus === "/guest/journal"
              ? "#a5d6a7"
              : "#FFFFFF"
          }
        >
          <path d="M560-564v-68q33-14 67.5-21t72.5-7q26 0 51 4t49 10v64q-24-9-48.5-13.5T700-600q-38 0-73 9.5T560-564Zm0 220v-68q33-14 67.5-21t72.5-7q26 0 51 4t49 10v64q-24-9-48.5-13.5T700-380q-38 0-73 9t-67 27Zm0-110v-68q33-14 67.5-21t72.5-7q26 0 51 4t49 10v64q-24-9-48.5-13.5T700-490q-38 0-73 9.5T560-454ZM260-320q47 0 91.5 10.5T440-278v-394q-41-24-87-36t-93-12q-36 0-71.5 7T120-692v396q35-12 69.5-18t70.5-6Zm260 42q44-21 88.5-31.5T700-320q36 0 70.5 6t69.5 18v-396q-33-14-68.5-21t-71.5-7q-47 0-93 12t-87 36v394Zm-40 118q-48-38-104-59t-116-21q-42 0-82.5 11T100-198q-21 11-40.5-1T40-234v-482q0-11 5.5-21T62-752q46-24 96-36t102-12q58 0 113.5 15T480-740q51-30 106.5-45T700-800q52 0 102 12t96 36q11 5 16.5 15t5.5 21v482q0 23-19.5 35t-40.5 1q-37-20-77.5-31T700-240q-60 0-116 21t-104 59ZM280-494Z" />
        </svg>

        <p
          className={`footer__journal ${
            routeStatus === "/journal" || routeStatus === "/guest/journal"
              ? "footer__journal--active"
              : ""
          }`}
        >
          Journal
        </p>
      </div>

      <div onClick={() => clickMood()} className="footer__moodContainer">
        <svg
          className="footer__moodIcon"
          xmlns="http://www.w3.org/2000/svg"
          height={`${iconSize}px`}
          viewBox="0 -960 960 960"
          width={`${iconSize}px`}
          fill={
            routeStatus === "/mood" || routeStatus === "/guest/mood"
              ? "#a5d6a7"
              : "#FFFFFF"
          }
        >
          <path d="M620-520q25 0 42.5-17.5T680-580q0-25-17.5-42.5T620-640q-25 0-42.5 17.5T560-580q0 25 17.5 42.5T620-520Zm-280 0q25 0 42.5-17.5T400-580q0-25-17.5-42.5T340-640q-25 0-42.5 17.5T280-580q0 25 17.5 42.5T340-520Zm140 260q68 0 123.5-38.5T684-400H276q25 63 80.5 101.5T480-260Zm0 180q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-400Zm0 320q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Z" />
        </svg>

        <p
          className={`footer__mood ${
            routeStatus === "/mood" || routeStatus === "/guest/mood"
              ? "footer__mood--active"
              : ""
          }`}
        >
          Mood
        </p>
      </div>
    </footer>
  );
}

export default Footer;
