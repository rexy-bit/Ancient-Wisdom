import { memo } from "react";
import { useBookContext } from "../../../../Context/BookContext"
import GuideHeader from "../GuideHeader";
import BookDescription from "./BookDescription";
import { Link, useNavigate } from "react-router-dom";
const DescriptionMain = () => {

    const {book} = useBookContext();
    const navigate = useNavigate();
    return(
        <>
          <GuideHeader/>

          <section className="bg-[#F5E6C8] min-h-screen w-full flex flex-col items-center mt-[50px]">
            {book === null ? <h1 className="mt-20 text-center text-[1.2em]">Description not found</h1> : 
               <>
                  <h1 className="mt-20 text-[1.3em] font-bold text-center underline max-[500px]:w-[300px]">Description of : {book.title}</h1>

                  <BookDescription/>
               </>
            }

            <button className="bg-amber-800 text-white font-bold w-[80px] h-[30px] rounded-3xl cursor-pointer transition-opacity duration-200 hover:opacity-80 active:opacity-60 fixed top-43 left-2" onClick={()=>navigate(-1)}>Back</button>
          </section>
        </>
    )
    
}

export default memo(DescriptionMain);