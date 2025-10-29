import { Children, createContext, useContext, useEffect, useState } from "react";
import { auth, db } from "../Config/fireBase";
import {getDoc, doc, updateDoc, arrayUnion, arrayRemove} from "firebase/firestore"


export const FavoritesContext = createContext();
export const useFavoritesContext = ()=> useContext(FavoritesContext);


export const FavoritesProvider = ({children})=> {

    const [favorites, setFavorites] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        const currentUser =  auth.onAuthStateChanged(async (user)=>{
            if(user){
                const userRef = doc(db, "users", user.uid);
                const docSnap = await getDoc(userRef);

                if(docSnap.exists()){
                    setFavorites(docSnap.data().favorites || []);
                }
            }else{
                setFavorites([]);
            }

            setLoading(false);

        });

      return () => currentUser();
        
    }, []);


    const toggleFavorite = async (quoteId) => {

        const currentUser = auth.currentUser;

        if(!currentUser) return;

        const userRef = doc(db, "users", currentUser.uid);

        if(favorites.includes(quoteId)){
            try{
                await updateDoc(userRef, {
                     favorites : arrayRemove(quoteId)
                });

                setFavorites(prev => prev.filter((id)=> id !== quoteId));
            }catch(err){
                console.log(err);
            }
        }else{

            try{
                await updateDoc(userRef, {
                    favorites : arrayUnion(quoteId)
                });

                setFavorites(prev => [...prev, quoteId]);
            }catch(err){
                console.log(err);
            }
        }
    }

    const isFavorite = (quoteId)=>{
        return favorites.includes(quoteId);
    }

    const value = {
        favorites,
        setFavorites,
        toggleFavorite,
        isFavorite,
        loading
    }

    return(
        <FavoritesContext.Provider value={value}>
            {children}
        </FavoritesContext.Provider>
    )
}



