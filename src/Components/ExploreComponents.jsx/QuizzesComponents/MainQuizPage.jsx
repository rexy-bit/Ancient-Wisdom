import { Link, useNavigate } from "react-router-dom"
import quizData from "./quizData"
import { memo } from "react"
import { useQuizContext } from "../../../Context/QuizContext"
const MainQuizPage = () => {

    const {setTheme} = useQuizContext();
    const navigate = useNavigate();
    return(

        <section className="flex flex-col content-center items-center mt-20 fade-in">
            <h1 className="text-[1.5em] font-black underline">Quizzes</h1>

               <p className="text-[1.3em] w-[300px] text-center mt-8">Test your knowledge, explore the past, and challenge your mind!</p>

               <p className="text-[1.1em] w-[800px] text-center mt-5 max-[850px]:w-[350px] max-[400px]:w-[310px]">Choose a quiz theme and dive into epic battles, legendary rulers, and fascinating facts from history.
                Every question brings you closer to becoming a true master of ancient wisdom — are you ready to begin?</p>
              
            <div className="flex flex-col justify-center items-center gap-3 mt-10 mb-20">
 
                {Object.entries(quizData).map(([key,theme],i)=>{
                    return(
                        <Link key={i} onClick={()=> setTheme(key)} to='/playQuiz'>
                        <button className="h-[35px] bg-gray-500 text-white px-2 transition-transform duration-300 hover:scale-110 active:scale-105 text-[1em] font-bold rounded-lg cursor-pointer max-[400px]:text-[0.9em]">
                            {theme.title}
                        </button>
                        </Link>
                    )
                })}
            </div>

         <button className="bg-amber-800 text-white font-bold w-[80px] h-[30px] rounded-3xl cursor-pointer transition-opacity duration-200 hover:opacity-80 active:opacity-60 fixed top-30 left-2" onClick={()=>navigate(-1)}>Back</button>
        </section>
    )
}

export default memo(MainQuizPage);