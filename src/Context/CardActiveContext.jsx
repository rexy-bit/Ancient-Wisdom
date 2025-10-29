import React, { useEffect, useState } from "react";

export const CardActiveContext = React.createContext();
export const useCardActiveContext = ()=> React.useContext(CardActiveContext);


export const CardProvider = ({children}) =>{

    const [currentCard, setCurrentCard] = useState(()=>{
        const saved = localStorage.getItem("currentCard");

        return saved ? JSON.parse(saved) : 
           null
    });

    useEffect(()=>{
        localStorage.setItem("currentCard", JSON.stringify(currentCard));
    }, [currentCard]);

    const value = {
        currentCard,
        setCurrentCard
    }

    return(

        <CardActiveContext.Provider value={value}>
            {children}
        </CardActiveContext.Provider>
    );
}