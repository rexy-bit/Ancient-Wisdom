import { createContext, useContext, useEffect, useState } from "react";


export const AiContext = createContext();
export const useAiContext = () => useContext(AiContext);

export const AiProvider = ({children}) => {

    const [response, setResponse] = useState(() => {
    try {
        const saved = localStorage.getItem("response");
        return saved ? JSON.parse(saved) : "";
    } catch {
        return "";
    }
});

    useEffect(()=>{
        localStorage.setItem('response', JSON.stringify(response));
    }, [response]);

    const [loading, setLoading] = useState(() => {
    try {
        const saved = localStorage.getItem("loading");
        return saved ? JSON.parse(saved) : false;
    } catch {
        return false;
    }
});

    useEffect(()=> {
        localStorage.setItem('loading', JSON.stringify(loading));
    }, [loading]);

    const value = {
        response,
        setResponse,
        loading,
        setLoading
    };

    return(
        <AiContext.Provider value={value}>
            {children}
        </AiContext.Provider>
    )
}