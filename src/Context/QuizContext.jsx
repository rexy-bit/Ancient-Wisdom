import { createContext, useContext, useEffect, useState } from "react";


export const QuizContext = createContext();
export const useQuizContext = () => useContext(QuizContext);

export const QuizProvider = ({children}) => {

    const [theme, setTheme] = useState(()=>{
        const saved = localStorage.getItem('theme');

        return saved ? JSON.parse(saved) : "Greece"
    });
     
    useEffect(()=>{
        localStorage.setItem('theme', JSON.stringify(theme));
    }, [theme]);

        const defaultState = {
  Greece: { currentQuestion: 0, score: 0 },
  Rome: { currentQuestion: 0, score: 0 },
  History: { currentQuestion: 0, score: 0 },
  Crusades : {currentQuestion : 0, score : 0},
  Egypt : {currentQuestion : 0,score : 0},
  Vikings : {currentQuestion : 0, score : 0},
  OttomanEmpire : {currentQuestion : 0,score : 0},
  MedievalEurope : {currentQuestion : 0, score : 0},
  RenaissanceEurope : {currentQuestion : 0,score : 0}, 
  FrenchRevolution : {currentQuestion : 0,score : 0},
  WorldWars : {currentQuestion : 0, score : 0},
  MongolEmpire : {currentQuestion : 0, score : 0},
  PrecolumbianCivilizations : {currentQuestion : 0, score : 0},
  ExplorersDiscoveries : {currentQuestion : 0, score : 0},
  AncientMiddleEast : {currentQuestion : 0, score : 0},
  ImperialChina : {currentQuestion : 0, score : 0},
  AncientNumidia : {currentQuestion : 0, score : 0},
  PhoeniciansCarthage : {currentQuestion : 0, score : 0},
  MediterraneanAntique : {currentQuestion : 0, score: 0}

};

   const [quizState, setQuizState] = useState(()=>{
    const saved = localStorage.getItem('quizState');
        const parsed = saved ? JSON.parse(saved) : {};
      return { ...defaultState, ...parsed };
   });

   useEffect(()=>{
    localStorage.setItem('quizState', JSON.stringify(quizState));
   }, [quizState]);

   const value = {
      theme,
      setTheme, 
      quizState,
      setQuizState
   }

   return(
    <QuizContext.Provider value={value}>
        {children}
    </QuizContext.Provider>
   )
}