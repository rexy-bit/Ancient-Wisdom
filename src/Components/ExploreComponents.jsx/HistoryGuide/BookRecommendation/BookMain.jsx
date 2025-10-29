import { memo } from "react";
import GuideHeader from "../GuideHeader";
import BookCard from "./BookCard"
import books from "./books"
import { Link, useNavigate } from "react-router-dom";

const BookMain = ()=> {

    const navigate = useNavigate();

    return(

        <>

        <GuideHeader/>

        <section className="bg-[#F5E6C8] min-h-screen w-full flex flex-col items-center mt-[50px] fade-in">

            <h1 className="mt-20 text-[1.7em] font-bold underline">Book Recommendation</h1>

            <div className="flex flex-col justify-center items-center mt-7">
                <h2 className="text-[1.3em] font-bold max-[600px]:w-[300px] text-center">Discover the Wisdom of the Ages</h2>

                <div className="w-[600px] text-center mt-3 font-sans max-[650px]:w-[300px]">
                    Books are windows into the past, they preserve the voices, stories, and ideas of those who shaped history. Here, you’ll find a collection of classic works and modern studies that will guide you through the triumphs, struggles, and transformations of ancient civilizations.
                </div>

                 <div className="flex flex-wrap justify-center items-center gap-10 px-10 mt-15 mb-20">
                    {books.map((book) => {
                        return(
                            <BookCard
                            book={book}
                            key={book.id}
                            />
                        );
                    })}
                 </div>

            </div>

            <button className="bg-amber-800 text-white font-bold w-[80px] h-[30px] rounded-3xl cursor-pointer transition-opacity duration-200 hover:opacity-80 active:opacity-60 fixed top-43 left-2" onClick={()=>navigate(-1)}>Back</button>
        </section>

        </>
    )
}

export default memo(BookMain);