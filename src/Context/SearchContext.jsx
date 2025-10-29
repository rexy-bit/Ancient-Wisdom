import React, { Children, createContext, useContext, useEffect, useState } from "react";


export const SearchContext = createContext();
export const useSearchContext = ()=> useContext(SearchContext);

export const SearchProvier = ({children}) => {

    const [search, setSearch] = useState(()=>{
        const saved = localStorage.getItem('search');

        return saved ? JSON.parse(saved) : 

          ""
    });

    useEffect(()=>{
        localStorage.setItem("search", JSON.stringify(search));
    }, [search]);


    const value = {
        search,
        setSearch
    }

    return(

        <SearchContext.Provider value={value}>
              {children}
        </SearchContext.Provider>
    )
}