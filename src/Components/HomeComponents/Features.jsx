import { memo } from "react"
import { useNavigate } from "react-router-dom"


const features = [
    {
        icon : "/icons/parchment.png",
        name : "Quotes",
        description : "Explore powerful quotes from philosophers, leaders, and thinkers that continue to inspire today.",
        link : "/quotes"
    },{
        icon : "/icons/biography.png",
        name : "Biographies",
        description : "Discover the stories of great figures who changed the course of civilizations.",
        link : "/biographies"
    },{
        icon : "/icons/historical.png",
        name : "Historical Events",
        description : "Learn about key events through engaging explanations and context.",
        link : "/historicalEvents"
    },{
        icon : "/icons/quizzes.png",
        name : "Interactive Quizzes",
        description : "Challenge yourself with quizzes designed to make learning fun and memorable.",
        link : "/quizzes"
    },{
        icon : "/icons/slides.png",
        name : "Slides & Images",
        description : "Explore statues, monuments, maps, and artifacts that bring the past to life visually.",
        link : "/frames"
    },{
        icon : "/icons/history.png",
        name : "History Learning Guide",
        description : "Follow structured guides that help you learn step by step, from basics to deeper insights.",
        link : "/guide"
    },{
        icon : "/icons/ai.png",
        name : "Hermes AI",
        description : "Ask questions, get tailored guidance, and enjoy a personalized learning journey.",
        link : "/AI"
    }
]
const Features = () => {

    const navigate = useNavigate();

   return(
    <section className="flex flex-col w-full items-center bg-[#A8A8A8]" id="offer">
        <h1 className="text-[2em] font-bold font-sans mt-5 text-white">What We Offer</h1>
        <p className="text-center w-[500px] font-sans leading-6 font-bold text-white mt-5 max-[550px]:w-[300px]"> 
            At Ancient Wisdom, we bring history to life through interactive and engaging features designed to inspire curiosity and deepen understanding. From timeless quotes to powerful biographies, from detailed guides to AI-powered conversations, our platform offers you unique ways to explore the past and connect it with the present.
        </p>

        <div className="flex flex-wrap justify-center items-center gap-10 px-10 mt-10 mb-15">
            {features.map((f)=>{
                return(
                   <div className="bg-gray-100 w-[250px] flex flex-col  items-center font-sans p-2 shadow-2xl rounded-lg h-[250px] relative transition-all duration-300 hover:scale-105 " key={f.name}> 
                      <h1 className="text-[1.1em] font-bold text-center">{f.name}</h1>
                      <img src={f.icon} alt={f.name} className="w-[55px] mt-2"/>
                    <p className="text-center mt-2 leading-5 font-[500] text-[14px]">{f.description}</p>
                      <button onClick={()=> navigate(`${f.link}`)} className="p-2 bg-gray-800 text-gray-50 font-bold rounded-lg absolute bottom-5 transition-transform duration-300 hover:scale-95 active:scale-90 cursor-pointer">View More</button>
                   </div>
                )
            })}
        </div>
    </section>
   )
}

export default memo(Features);