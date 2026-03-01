// User.jsx
import React, { useState, useEffect } from "react";
import { auth, db, googleProvider } from "../Config/fireBase";
import { signInWithPopup } from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { Header } from "../Components/HomeComponents/Header";
import { UserInfo } from "../Components/userComponents/UserInfo";
import { useUser } from "../Context/UserContext";
export const User = () => {

  const {user, signInWithGoogle, signOut, loading, userData} = useUser();

  if (loading) return <p>Chargement...</p>;

  return user ? (
    <section className="flex flex-col w-full  items-center fade-in min-h-screen">
      <Header />
        {userData && <h1 className="text-[1.3em] font-bold text-center mt-10">Welcome {userData.nom}</h1>}
        {userData ? (
      <UserInfo userData={userData} />
    ) : (
      <p>Loading User Data...</p>
    )}
    </section>
  ) : (
    <section className="min-h-screen">
      <Header />
      <div className="flex flex-col items-center mt-10">
        <h1 className="text-[1.5em] font-bold">Welcome !</h1>

        <p className="w-[300px] text-center mt-8">Unlock the wisdom of thousands of quotes. Sign up now to save your favorites, discover daily inspiration, and make wisdom your own.</p>
      <button onClick={signInWithGoogle} className="h-[40px] w-[200px] bg-gray-300 rounded-xl cursor-pointer mt-3 transition-opacity duration-200 hover:opacity-80 active:opacity-60 mb-20">
        Sign in with Google <i className="fa-brands fa-google"></i>
      </button>
      </div>
    </section>
  );
};
