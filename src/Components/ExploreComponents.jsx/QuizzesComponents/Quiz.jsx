import quizData from "./quizData";
import { useQuizContext } from "../../../Context/QuizContext";
import { memo, useState } from "react";
import EndQuiz from "./EndQuiz";
import { Link, useNavigate } from "react-router-dom";

const Quiz = () => {

    const {theme, quizState, setQuizState} = useQuizContext();
    const [selectedOption, setSelectedOption] = useState(null);
    const navigate = useNavigate();

    const [msg, setMsg] = useState({color : "red", text : "", show : false})
    let currentTheme = quizState[theme];
    let currentScore = quizState[theme].score;
    let currentQuestion = quizState[theme].currentQuestion;
    const questions = quizData[theme].quiz;
        let q = questions[currentQuestion];

        if (!theme || !quizData[theme]) {
  return <p className="text-center mt-10">Please select a quiz first!</p>;
}

    const handleAnswer = (option)=>{

        if(!option){
            return;
        }
           
        if(option === q.correctAnswer){
            setMsg(prev => ({
                color : "green",
                text : "Correct",
                show : true
            }));

            setTimeout(()=>{
                setMsg(prev => ({
                    ...prev,
                    show : false
                }))
            }, 1500);
        }else{

              setMsg(prev => ({
                color : "red",
                text : `Wrong , the correct answer was : ${q.correctAnswer}`,
                show : true
            }));

            setTimeout(()=>{
                setMsg(prev => ({
                    ...prev,
                    show : false
                }))
            }, 1500);
        }
        setQuizState(prev => ({
            ...prev,
            [theme] : {
                currentQuestion: prev[theme].currentQuestion + 1,
                score : prev[theme].score + (option === q.correctAnswer ? 1 : 0)
            }
        }));

        setSelectedOption(null);

        

    }

        const resetQuiz = () => {

        setQuizState(prev => ({
            ...prev,
           [theme] : {
               currentQuestion : 0,
               score : 0,
            }
        }));
    }

    return(
        currentQuestion >= questions.length ? <section className="w-full flex justify-center items-center"><EndQuiz/></section> : 

          <section className="flex flex-col  items-center mt-20 fade-in min-h-screen">
            <h1 className="text-[1.5em] font-black underline">{quizData[theme].title}</h1>
   
              <p className="mt-10 text-[1.2em] mb-2">Score : {currentScore}/{questions.length}</p>
            <div className="flex flex-col content-center items-center p-3 bg-amber-900 rounded-xl text-white">
                <h1 className="font-bold w-[250px] text-center">{q.question}</h1>

                <div className="flex flex-col justify-center items-center gap-2 mt-5">
                    {q.options.map((option,i)=>{
                        return(
                            <button key={i} className="bg-amber-400 w-[210px] text-black h-[40px] text-[0.9em] rounded-3xl cursor-pointer transiton-opacity duration-200 hover:opacity-80 active:opacity-60 leading-4" onClick={()=> setSelectedOption(option)} style={{backgroundColor : selectedOption === option ? "#b45309" : "#f59e0b"}} >
                                {option}
                            </button>
                        );
                    })}
                </div>

                <button className="mt-5 bg-green-600 text-white w-[90px] h-[35px] font-bold rounded-3xl cursor-pointer transition-opacity duration-200 hover:opacity-80 active:opacity-60" onClick={()=> handleAnswer(selectedOption)}>Choose</button>

                <p className="mt-4 font-bold">{currentQuestion + 1}/{questions.length}</p>
            </div>

            <button onClick={resetQuiz} className="px-3 h-[35px] bg-[#A8A8A8] mt-3 rounded-lg font-bold cursor-pointer transition-opacity duration-300 hover:opacity-70 active:opacity-50">Restart</button>

            {msg.show && <p style={{color : msg.color}} className="fixed top-[150px] bg-gray-200 shadow-2xl rounded-[5px] p-3 font-bold">{msg.text}</p>}

              <button className="bg-amber-800 text-white font-bold w-[80px] h-[30px] rounded-3xl cursor-pointer transition-opacity duration-200 hover:opacity-80 active:opacity-60 fixed top-30 left-2" onClick={()=>navigate(-1)}>Back</button>
          </section>
    )
}

export default memo(Quiz);