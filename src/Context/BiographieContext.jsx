import { useContext, useEffect } from "react";
import { createContext } from "react";
import { useState } from "react";

export const BiographieContext = createContext();
export const useBiographieContext =()=> useContext(BiographieContext);

export const BiographieProvider = ({children})=> {

     
    const [biographie, setBiographie] = useState(()=>{
        const saved = localStorage.getItem('biographie');

        return saved ? JSON.parse(saved) : 
           null
    });

    useEffect(()=>{
        localStorage.setItem('biographie', JSON.stringify(biographie));
    }, [biographie]);


    const value = {
        biographie,
        setBiographie
    }

    return(

        <BiographieContext.Provider value={value}>
            {children}
        </BiographieContext.Provider>
    );

}