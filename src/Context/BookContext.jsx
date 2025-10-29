import { createContext, useContext, useEffect, useState } from "react";


export const BookContext = createContext();
export const useBookContext = ()=> useContext(BookContext);

export const BookProvider = ({children}) => {

    const [book, setBook] = useState(()=>{
        const saved = localStorage.getItem('book');

        return saved ? JSON.parse(saved) : null
    });

    useEffect(()=>{
        localStorage.setItem('book', JSON.stringify(book));
    }, [book]);

    const value = {
        book,
        setBook
    };

    return(
        <BookContext.Provider value={value}>
            {children}
        </BookContext.Provider>
    )
}
