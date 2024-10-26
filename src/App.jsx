import "./styles/partials/_global.scss";
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Journal from "./pages/Journal/Journal.jsx";
import Home from "./pages/Home/Home.jsx";
import Mood from "./pages/Mood/Mood.jsx";
import NotFound from "./pages/NotFound/NotFound.jsx";

import ProtectedRoute from "./Components/auth/ProtectedRoute";
import UserHandle from "./Components/auth/UserHandle/UserHandle.jsx";

import { auth } from "./Components/auth/firebase";

function App() {
  const [authUser, setAuthUser] = useState(null);
  useEffect(() => {
    const listen = auth.onAuthStateChanged((user) => {
      if (user) {
        setAuthUser(user);
        console.log(user.uid);
      } else {
        setAuthUser(null);
      }
    });
    return () => listen();
  }, []);

  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* Public Route: Signin */}
          <Route
            path="/"
            element={authUser ? <Navigate to="/home" /> : <UserHandle />}
          />
          {/* Protected Routes */}
          <Route
            path="/home"
            element={
              <ProtectedRoute authUser={authUser}>
                <Home />
              </ProtectedRoute>
            }
          />

          <Route
            path="/journal"
            element={
              <ProtectedRoute authUser={authUser}>
                <Journal />
              </ProtectedRoute>
            }
          />

          <Route
            path="/mood"
            element={
              <ProtectedRoute authUser={authUser}>
                <Mood />
              </ProtectedRoute>
            }
          />

          {/* guest mode */}

          <Route path="/guest/home" element={<Home />} />
          <Route path="/guest/journal" element={<Journal />} />
          <Route path="/guest/mood" element={<Mood />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
