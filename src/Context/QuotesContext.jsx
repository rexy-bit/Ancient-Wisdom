import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../Config/fireBase";

export const QuotesContext = React.createContext();

export const useQuotesContext = ()=> React.useContext(QuotesContext);

export const QuotesProvider = ({children}) => {

    const [quotes, setQuotes] = useState([]);
    const [loading, setLoading] = useState(true);

    const quotesCollectionRef = collection(db, "Quotes");

    const getQuotesFromFireBase = async()=>{
        try{
            const data = await getDocs(quotesCollectionRef);
            const filteredData = data.docs.map((doc)=>({
                ...doc.data(),
                id : doc.id
            }));
            
            setQuotes(filteredData);

        }catch(err){
            console.error('Error : ', err);
        }

        setLoading(false);

    }

    useEffect(()=>{
        getQuotesFromFireBase();
    }, []);


    const value = {
        quotes,
        loading
    }
    return(
        <QuotesContext.Provider value={value}>
            {children}
        </QuotesContext.Provider>
    );

}