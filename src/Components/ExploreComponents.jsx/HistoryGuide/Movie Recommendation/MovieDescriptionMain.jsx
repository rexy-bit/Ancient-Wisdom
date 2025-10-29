import GuideHeader from "../GuideHeader"

import { useMovieContext } from "../../../../Context/MovieDescriptionContext"
import MovieDescription from "./MovieDescription";
import { memo } from "react";
import { Link, useNavigate } from "react-router-dom";
const MovieDescriptionMain = () => {

    const {movie} = useMovieContext();

    const navigate = useNavigate();
    return(
        <>
          <GuideHeader/>

          <section className="bg-[#F5E6C8] min-h-screen w-full flex flex-col items-center mt-[50px] fade-in">
  
            {movie === null ? <h1 className="mt-20">No movie found</h1> : 
               <>
                  <h1 className="mt-20 text-[1.5em] font-bold underline max-[600px]:w-[300px] text-center">Description of : {movie.title}</h1>

                  <MovieDescription/>

                  <button className="bg-amber-800 text-white font-bold w-[80px] h-[30px] rounded-3xl cursor-pointer transition-opacity duration-200 hover:opacity-80 active:opacity-60 fixed top-43 left-2" onClick={()=>navigate(-1)}>Back</button>
               </>
            }
            

          </section>
        </>
    )
}

export default memo(MovieDescriptionMain);