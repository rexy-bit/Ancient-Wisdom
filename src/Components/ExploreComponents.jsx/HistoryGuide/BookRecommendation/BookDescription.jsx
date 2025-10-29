
import { memo } from "react";
import { useBookContext } from "../../../../Context/BookContext"
const BookDescription = () => {

    const {book} = useBookContext();

    return(

        <div className="flex flex-col justify-center items-center mt-10 gap-7 fade-in mb-15">
            <div>
                <img src={book.image} alt={book.title} className="object-contain w-[350px] h-[500px] max-[500px]:w-[280px] max-[500px]:h-[400px]"/>
            </div>

            <div className="flex flex-col justify-center items-center gap-2 w-[600px] max-[650px]:w-[300px]">
                <h1 className="text-[1.3em] font-bold">{book.title}</h1>
                <p className="text-[1.1em]">by <strong className="text-[1.3em]">{book.author}</strong></p>

                <p className="text-center font-sans">- Description : {book.description}</p>
                <p>- Era : {book.era}</p>
            </div>
        </div>
    )
}


export default memo(BookDescription);