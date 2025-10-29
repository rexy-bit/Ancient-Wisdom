import { createContext, useContext, useEffect, useState } from "react";


export const MovieContext = createContext();
export const useMovieContext = () => useContext(MovieContext);

export const MovieProvider = ({children}) => {

    const [movie, setMovie] = useState(()=>{
        const saved = localStorage.getItem('movie');

        return saved ? JSON.parse(saved) : null;
    });

    useEffect(()=> {
        localStorage.setItem('movie', JSON.stringify(movie));
    }, [movie]);

    const value = {
        movie,
        setMovie
    }

    return(
        <MovieContext.Provider value={value}>
            {children}
        </MovieContext.Provider>
    )
}