import "./styles/partials/_global.scss";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import Journal from "./pages/Journal/Journal.jsx";

import Mood from "./pages/Mood/Mood.jsx";
import NotFound from "./pages/NotFound/NotFound.jsx";

import DeleteJournal from "./Components/DeleteJournal/DeleteJournal.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/journal" element={<Journal />} />
          <Route path="/mood" element={<Mood />} />
          <Route path="/delete" element={<DeleteJournal />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
