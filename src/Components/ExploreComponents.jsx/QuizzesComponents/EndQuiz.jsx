import { memo } from "react";
import { useQuizContext } from "../../../Context/QuizContext"

const EndQuiz = () => {

    const {theme,setQuizState, quizState} = useQuizContext();
    
    const resetQuiz = () => {

        setQuizState(prev => ({
            ...prev,
           [theme] : {
               currentQuestion : 0,
               score : 0,
            }
        }));
    }

    let currentScore = quizState[theme].score;

    let scoreMsg;
    let motivationMsg;

    

        if(currentScore < 10){
                motivationMsg = "Keep practicing, you can do better";
                scoreMsg = `Your score is: ${currentScore}/20 😒`;
            } else if(currentScore <= 15){
                motivationMsg = "Very good! You can achieve excellence.";
                scoreMsg = `Your score is: ${currentScore}/20 😊`;
            } else {
                motivationMsg = "Congratulations, you are amazing!";
                scoreMsg = `Your score is: ${currentScore}/20 😁`;
            }



    return(

        <div className="flex flex-col justify-center items-center mt-30 bg-amber-800 p-5 rounded-xl text-white font-sans">

            <p className="font-black text-[1.5em]">Game Over !</p>
            <p className="text-[1.1em] font-bold mt-2">{scoreMsg}</p>
            <p className="w-[200px] text-center mt-3 font-bold">{motivationMsg}</p>

            <div className="flex flex-col justify-center items-center mt-7">
                <p className="text-[1.2em] font-bold">Replay</p>
                <button onClick={resetQuiz} className="text-[4em] cursor-pointer transition-transform duration-300 hover:scale-110 active:scale-105">&#8634;</button>
            </div>

        </div>
    )
}


export default memo(EndQuiz);