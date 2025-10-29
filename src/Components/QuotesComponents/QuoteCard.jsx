import React, { useState } from "react";
import { useCardActiveContext } from "../../Context/CardActiveContext";
import { Link } from "react-router-dom";
import { useFavoritesContext } from "../../Context/FavoritesContext";
import { auth } from "../../Config/fireBase";
import { SignUpPop } from "./SignPopUp";
export const QuoteCard = ({Quote, index}) => {

     const {setCurrentCard} = useCardActiveContext();

     const {isFavorite, toggleFavorite} = useFavoritesContext();

     const [showPop, setShowPop] = useState(false);

     const user = auth.currentUser;

    return(
        <>
        <div className="flex flex-col items-center w-[180px] h-[360px] bg-[#F5F5F5] rounded-xl p-3 transition-transform duration-200 hover:scale-105 shadow-2xl overflow-hidden relative group">
            
               <Link to="/card" onClick={()=>setCurrentCard(Quote)}>
                <img src={Quote.image} alt={Quote.author} className="h-[150px] w-[100px] object-cover rounded-lg cursor-pointer "/>
                </Link>
           

            <div className="flex flex-col justify-center mt-2">
                <Link to="/card" onClick={()=> setCurrentCard(Quote)}><p className="text-center text-[0.7em] font-bold transition-opacity duretion-200 hover:opacity-70 active:opacity-50 cursor-pointer">{Quote.text}</p></Link>                <p className="text-red-800 underline font-bold text-right
                mt-1 text-[11px]">- {Quote.author}</p>
                <p className="text-[11px] font-bold mt-2">Source : {Quote.origin}</p>
                <p className="text-[11px] font-bold">Era : {Quote.era}</p>
            </div>

               <button style={{color : isFavorite(Quote.id) ? "red" : "gray"}} onClick={()=> {
                if(!user){
                    setShowPop(true);
                    return;
                }
                toggleFavorite(Quote.id)}
                } className="absolute right-3 cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <i class="fa-solid fa-heart"></i>
                </button>
            <p className="absolute bottom-1 text-[0.8em]">{index + 1}</p>
        </div>

        {showPop && 
          <SignUpPop
          setShowPop={setShowPop}
          />
        }
        </>
    );
    
}