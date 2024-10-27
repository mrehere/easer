// this file holds the authentication state of the user

import { useState, useEffect } from "react";
import { auth } from "./firebase";

const useAuth = () => {
  const [authUser, setAuthUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [authId, setAuthId] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setAuthUser(user);
      setAuthId(user ? user.uid : null);
      setLoading(false);
    });
    return () => unsubscribe(); // Clean up the listener on unmount
  }, []);

  return { authUser, loading, authId };
};

export default useAuth;
