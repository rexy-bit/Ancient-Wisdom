import { memo } from "react"
import AiInputs from "./AiInputs"
import { useAiContext } from "../../Context/AiContext"
import ReactMarkdown from 'react-markdown'
import { useUser } from "../../Context/UserContext"
import { Link } from "react-router-dom"
const AiMain = () => {

    const {response, loading} = useAiContext();
    const {user} =useUser();
    
     
    return(

      user ?
        <section className="flex flex-col items-center mt-10 min-h-screen">
            <h1 className="text-[1.5em] font-bold underline">Ask HermesAI</h1>

            <div className="mt-5 w-[600px] text-center max-[650px]:w-[300px]">
                Welcome to HermesAI, your personal guide to the wisdom of history. Whether you’re curious about ancient civilizations, famous historical figures, legendary books, or iconic movies, HermesAI provides insights, explanations, and meaningful quotes that reveal the lessons and wisdom behind each story. Ask any question and explore history interactively, discovering the knowledge and timeless wisdom that shaped our world. Let HermesAI help you uncover not just facts, but the deeper truths and insights of the past!
            </div>

            <AiInputs/>
            
            {loading && <h1 className="mt-10 font-bold">Loading...</h1>}

            {response && <div className="w-[700px] mt-15 mb-15 max-[750px]:w-[500px] max-[550px]:w-[300px]">
                <ReactMarkdown>{response}</ReactMarkdown>
                </div>}
        </section>
        : 
           <>
             <section className="flex flex-col items-center min-h-screen">
                 <h1 className="text-black font-bold text-[1.5em] mt-10 text-center">Want to know more about Hermes AI and use it ?</h1>
                 <p className="text-gray-700 text-center mt-5 w-[300px]">Hermes AI is more than just an artificial intelligence — it’s your personal guide to knowledge. Inspired by the messenger of the gods in Greek mythology, Hermes AI helps you navigate through history by answering questions, explaining complex concepts with clarity, and offering instant access to universal wisdom.
                With Hermes AI, every visit becomes an interactive and engaging journey through the events, ideas, and great figures that shaped our world.</p>

                  <button className="p-2 bg-gray-800 text-white font-bold rounded-lg cursor-pointer mt-5"><Link to="/user">Sign In to Use the AI</Link></button>
                 
             </section>
           </>
    )
}

export default memo(AiMain);