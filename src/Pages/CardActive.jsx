import React, { useState } from "react";
import { useCardActiveContext } from "../Context/CardActiveContext";
import { useFavoritesContext } from "../Context/FavoritesContext";
import { Link, useNavigate } from "react-router-dom";

export const CardActive = () =>{

    const {isFavorite, toggleFavorite} = useFavoritesContext();
    const {currentCard} = useCardActiveContext();
    const navigate = useNavigate();

    const [showPop, setShowPop] = useState(false);

    if(!currentCard) return <h1>No Quote found</h1>


    return(
        <section className="flex justify-center items-center fade-in flex-col">

                 <h1 className=" mt-15 text-[1.5em] font-black underline w-[250px] text-center">Quote of : {currentCard.author}</h1>
                <div className="flex flex-row items-center w-[600px] h-[350px] bg-[#F5F5F5] rounded-xl p-5 transition-transform duration-200 hover:scale-105 cursor-pointer shadow-2xl overflow-hidden relative mt-10 max-[700px]:flex-col max-[700px]:w-[300px] max-[700px]:h-[550px] mb-10">
            
              <div className="w-[40%] max-[700px]:w-[180px]">
                <img src={currentCard.image} alt={currentCard.author} className="h-[250px] w-[200px] object-cover rounded-lg"/>
              </div>

            <div className="flex flex-col justify-center mt-2 w-[60%] max-[700px]:w-full">
                <p className="text-center text-[1.1em] font-bold">{currentCard.text}</p>
                <p className="text-red-800 underline font-bold text-right
                mt-1 text-[14px]">- {currentCard.author}</p>
                <p className="text-[14px] font-bold mt-2">Source : {currentCard.origin}</p>
                <p className="text-[14px] font-bold">Era : {currentCard.era}</p>
            </div>
               <button style={{color : isFavorite(currentCard.id) ? "red" : "gray"}} onClick={()=>{
                
               
                toggleFavorite(currentCard.id);
                
            
            }
                } className="absolute right-3 cursor-pointer top-6">
                <i class="fa-solid fa-heart"></i>
                </button>
            
        </div>

        <button className="bg-amber-800 text-white font-bold w-[80px] h-[30px] rounded-3xl cursor-pointer transition-opacity duration-200 hover:opacity-80 active:opacity-60 fixed top-18 left-2" onClick={()=>navigate(-1)}>Back</button>
        </section>
    )
}