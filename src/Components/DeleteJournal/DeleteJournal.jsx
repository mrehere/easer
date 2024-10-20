import "./DeleteJournal.scss";

import React from "react";

function DeleteJournal({ journal, onClose }) {
  return (
    <>
      <section className="deleteJournal">
        <h2 className="deleteJournal__disclaimer">
          Are you sure you want to erase this entry?
        </h2>

        <div className="deleteJournal__buttonContainer">
          <button type="submit" className="deleteJournal__delete">
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
