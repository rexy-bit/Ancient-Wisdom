// UserContext.jsx
import React, { createContext, useContext, useEffect, useState } from "react";
import { auth, db, googleProvider } from "../Config/fireBase";
import { signInWithPopup } from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";

const UserContext = createContext();

export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  const signInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const signedInUser = result.user;

      const userRef = doc(db, "users", signedInUser.uid);
      const docSnap = await getDoc(userRef);

      if (!docSnap.exists()) {
        await setDoc(userRef, {
          uid : signedInUser.uid,
          nom: signedInUser.displayName || "",
          email: signedInUser.email,
          bio: "",
          favorites: [],
          role: "user",
          dateCreation: new Date().toLocaleDateString(),
        });

          const newUserData = {
    uid: signedInUser.uid,
    nom: signedInUser.displayName || "",
    email: signedInUser.email,
    bio: "",
    favorites: [],
    role: "user",
    dateCreation: new Date().toLocaleDateString(),
  };

  setUserData(newUserData);
        console.log("Nouvel utilisateur ajouté a Firestore");
      }
    } catch (err) {
      console.error(err);
    }
  };

  const signOut = async () => {
    await auth.signOut();
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (currentUser) => {
      if (currentUser) {
        setUser(currentUser);

        const userRef = doc(db, "users", currentUser.uid);
        const docSnap = await getDoc(userRef);
        if (docSnap.exists()) {
          setUserData(docSnap.data());
        } else {
          setUserData(null);
          console.log("Utilisateur non trouvé dans Firestore");
        }
      } else {
        setUser(null);
        setUserData(null);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  return (
    <UserContext.Provider
      value={{ user, userData, loading, signInWithGoogle, signOut }}
    >
      {children}
    </UserContext.Provider>
  );
};
