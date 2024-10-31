import "./styles/partials/_global.scss";
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Journal from "./pages/Journal/Journal.jsx";
import Home from "./pages/Home/Home.jsx";
import Mood from "./pages/Mood/Mood.jsx";
import NotFound from "./pages/NotFound/NotFound.jsx";

import ProtectedRoute from "./Components/auth/ProtectedRoute";
import UserHandle from "./Components/auth/UserHandle/UserHandle.jsx";

// import useAuth from "./Components/auth/useAuth.js";

import { AuthProvider, useAuth } from "./Components/auth/AuthContext.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            {/* Public Route: Signin */}
            <Route path="/" element={<UserHandle />} />
            {/* Protected Routes */}
            <Route
              path="/home"
              element={
                <ProtectedRoute>
                  <Home />
                </ProtectedRoute>
              }
            />

            <Route
              path="/journal"
              element={
                <ProtectedRoute>
                  <Journal />
                </ProtectedRoute>
              }
            />

            <Route
              path="/mood"
              element={
                <ProtectedRoute>
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
        </AuthProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
