import { createContext, useContext, useEffect, useState } from "react";


export const HistoricalContext = createContext();
export const useHistoricalContext = () => useContext(HistoricalContext);

export const HistoricalProvider = ({children}) => {

    const [event, setEvent] = useState(()=>{
        const saved = localStorage.getItem('event');

        return saved ? JSON.parse(saved) : null;
    });

    useEffect(()=>{
        localStorage.setItem('event', JSON.stringify(event));

    }, [event]);


    const value = {
        event,
        setEvent
    };

    return(

        <HistoricalContext.Provider value={value}>
            {children}
        </HistoricalContext.Provider>
        
    );
}