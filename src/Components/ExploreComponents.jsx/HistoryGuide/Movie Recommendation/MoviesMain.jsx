import { memo } from "react"
import GuideHeader from "../GuideHeader"
import MovieCard from "./MovieCard"
import movies from "./movies"
import { Link, useNavigate } from "react-router-dom"

const MovieMain = () => {

    const navigate = useNavigate();

    return(

        <>
          <GuideHeader/>

          <section className="bg-[#F5E6C8] min-h-screen w-full flex flex-col items-center mt-[50px] fade-in">
              <h1 className="mt-20 text-[1.7em] font-bold underline">Movies as Windows to History</h1>

              <p className="w-[600px] text-center max-[650px]:w-[300px] mt-5">
                Movies are not just entertainment — they can also be powerful tools to explore history, philosophy, and the lives of great civilizations. Of course, Hollywood often adds fiction and drama, but when chosen carefully, films can spark curiosity, provide cultural context, and make learning history both engaging and enjoyable.
              </p>

              <p className="w-[300px] text-center mt-3 font-bold">
                After our study and careful selection, here are our recommendations:
              </p>

              <div className="flex flex-wrap gap-5 px-10 mt-10 mb-20 justify-center items-center">
                {movies.map((movie)=>{
                    return(
                        <MovieCard
                        movie={movie}
                        key={movie.id}
                        />
                    )
                })}
              </div>

              <button className="bg-amber-800 text-white font-bold w-[80px] h-[30px] rounded-3xl cursor-pointer transition-opacity duration-200 hover:opacity-80 active:opacity-60 fixed top-43 left-2" onClick={()=>navigate(-1)}>Back</button>
          </section>

        </>
    )
}

export default memo(MovieMain);