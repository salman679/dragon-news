import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { AuthContext } from "../context/AllContext";
import PropTypes from "prop-types";
import { auth } from "../services/firebase.config";
import { useEffect, useState } from "react";

export default function AuthProvider({ children }) {
  const [user, setUser] = useState();
  console.log(user);

  function createUser(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
  }

  function signInUser(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  function signOutUser() {
    return signOut(auth);
  }
  useEffect(() => {
    const subscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => {
      subscribe();
    };
  }, []);

  return (
    <AuthContext.Provider
      value={{ createUser, signInUser, user, setUser, signOutUser }}
    >
      {children}
    </AuthContext.Provider>
  );
}

AuthProvider.propTypes = {
  children: PropTypes.element,
};
