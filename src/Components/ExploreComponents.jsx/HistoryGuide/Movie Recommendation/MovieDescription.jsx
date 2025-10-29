
import { memo } from "react";
import { useMovieContext } from "../../../../Context/MovieDescriptionContext"

const MovieDescription = () => {

    const {movie} = useMovieContext();
   
    return(
        <div className="flex flex-col justify-center items-center mt-10 gap-7 fade-in mb-15">
            <img src={movie.image} alt={movie.title} className="object-contain w-[350px] h-[500px] max-[500px]:w-[280px] max-[500px]:h-[400px]"/>

            <div className="flex flex-col justify-center items-center gap-2 w-[600px] max-[650px]:w-[300px]">
                <p className="text-[1.3em] font-bold">{movie.title}</p>
                <p className="text-[1.1em]">-Theme : {movie.theme}</p>
                <p className="text-center font-sans">-Description : {movie.description}</p>
            </div>
        </div>
    )
}

export default memo(MovieDescription);