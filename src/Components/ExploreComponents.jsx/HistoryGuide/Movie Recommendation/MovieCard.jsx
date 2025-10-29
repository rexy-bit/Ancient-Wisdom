import { memo } from "react"
import { useNavigate } from "react-router-dom";
import { useMovieContext } from "../../../../Context/MovieDescriptionContext";

const MovieCard = ({movie}) => {

    const navigate = useNavigate();
    const {setMovie} = useMovieContext();
    return(

        <div className="flex flex-col justify-center items-center p-5 bg-white rounded-lg  w-[200px] h-[380px] cursor-pointer transition-transform duration-300 hover:scale-105 shadow-2xl" onClick={()=>{
            setMovie(movie);
            navigate('/movieDescription');
        }}>

            <img src={movie.image} alt={movie.title} className="w-[150px] h-[250px] object-contain"/>

            <div className="flex flex-col w-full mt-5 gap-2">
                <p className="text-[1em] font-bold leading-4">{movie.title}</p>
                <p>Theme : <strong>{movie.theme}</strong></p>
            </div>
        </div>

    )
}

export default memo(MovieCard);