import { memo } from "react";
import { useBookContext } from "../../../../Context/BookContext";
import { useNavigate } from "react-router-dom";

const BookCard = ({book}) => {

    const {setBook} = useBookContext();
    const navigate = useNavigate();
    return(

        <div className="flex flex-col justify-center items-center p-5 bg-white rounded-lg  w-[230px] h-[400px] cursor-pointer transition-transform duration-300 hover:scale-105 shadow-2xl" onClick={()=>{
            setBook(book);
            navigate('/bookDescription');

        }}> 

            <img src={book.image} alt={book.title} className="w-[150px] h-[250px] object-contain"/>

            <div className="flex flex-col w-full mt-5 gap-2">
                <p className="text-[1em] font-bold leading-4">{book.title}</p>
                <p>by {book.author}</p>
                <p>Era : {book.era}</p>
            </div>
        </div>

    );
}

export default memo(BookCard);