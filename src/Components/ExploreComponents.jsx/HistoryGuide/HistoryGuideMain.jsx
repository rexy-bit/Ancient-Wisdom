import { memo } from "react"
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
const HistoryGuideMain = () => {

    const navigate = useNavigate();
    

    return(

        <section className="bg-[#F5E6C8] min-h-screen w-full flex flex-col items-center mt-[50px]">

            <h1 className="mt-25 text-[1.3em] font-bold max-[600px]:w-[300px] text-center underline">Master History with Ancient Wisdom</h1>

            <p className="text-[1.1em] w-[600px] text-center mt-5 max-[650px]:w-[300px]">
                History is not just a list of dates and names, it’s the story of humanity, filled with lessons, triumphs, and turning points. In this section, we guide you step-by-step to truly understand the past, connect the dots, and see the bigger picture.
            </p>

               <div className="flex flex-col justify-center items-center mt-12 gap-7">
                  <h1 className="text-[1.1em] font-bold">Subsection Previews : </h1>

                  <div className="w-[500px] flex flex-col gap-2 max-[550px]:w-[300px]">
                    <h2 className="text-[1.1em] font-bold">1. Tips for Learning History</h2>
                    <p className="font-sans">
                        Practical, easy-to-follow strategies to make history stick, and how to use Ancient Wisdom’s tools (Biographies, Historical Events, Maps) to apply them.
                    </p>

                     <button onClick={()=> navigate('/learningTips')} className="bg-black/70 w-[130px] h-[40px] rounded-lg cursor-pointer text-white transition-opacity duration-200 hover:opacity-80 active:opacity-60">Explore Tips &#8594;</button>
                  </div>

                  <div className="w-[500px] flex flex-col gap-2 max-[550px]:w-[300px]">
                   
                    <h2 className="text-[1.1em] font-bold">2. Recommended Books</h2>
                        <p className="font-sans">
                            A curated list of must-read books to expand your historical knowledge, from ancient civilizations to modern revolutions.
                        </p>

                        <button className="bg-black/70 w-[150px] h-[40px] rounded-lg cursor-pointer text-white transition-opacity duration-200 hover:opacity-80 active:opacity-60" onClick={()=> navigate('/books')}>Discover Books &#8594;</button>
                  </div>


                  <div className="w-[500px] flex flex-col gap-2 max-[550px]:w-[300px]">
                   
                    <h2 className="text-[1.1em] font-bold">3. Movie Recommendations</h2>
                        <p className="font-sans">
                            Engaging films and series that bring history to life, personally handpicked and reviewed for accuracy and storytelling.
                        </p>

                        <button className="bg-black/70 w-[150px] h-[40px] rounded-lg cursor-pointer text-white transition-opacity duration-200 hover:opacity-80 active:opacity-60" onClick={()=>{
                            navigate('/movies');
                        }}>Watch & Learn &#8594;</button>
                  </div>
                  
               </div>

               <p className="text-[1.1em] w-[300px] mt-17 text-center mb-10">
                Whether you’re a casual learner or a history enthusiast, this guide will take your understanding of the past to a whole new level. Choose where to start and let the journey begin.
               </p>

               <button className="bg-amber-800 text-white font-bold w-[80px] h-[30px] rounded-3xl cursor-pointer transition-opacity duration-200 hover:opacity-80 active:opacity-60 fixed top-43 left-2" onClick={()=>navigate(-1)}>Back</button>
        </section>
    )
}

export default memo(HistoryGuideMain);