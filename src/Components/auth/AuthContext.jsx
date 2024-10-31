import React, { createContext, useContext, useState, useEffect } from "react";
import { auth } from "./firebase";
import { onAuthStateChanged } from "firebase/auth";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [loggedUser, setLoggedUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Listen for changes in authentication status
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setLoggedUser(currentUser);
      setLoading(false);
    });

    return unsubscribe; // Cleanup on unmount
  }, []);
  const loggedId = loggedUser ? loggedUser.uid : null;
  return (
    <AuthContext.Provider value={{ loggedUser, loggedId }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
