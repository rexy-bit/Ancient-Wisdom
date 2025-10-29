
import { memo } from "react"
import bg2 from "../../assets/bg5.jpg"
import bgImage from "../../assets/bgImage.jpg"
import { Link } from "react-router-dom"
const ExploreMain = () => {

    return(
        <div className="min-h-screen w-full bg-cover bg-center flex flex-col items-center fade-in pt-[50px]" style={{backgroundImage : `url(${bgImage})`}}>
            <div className=" flex flex-col items-center mt-20 w-[600px] bg-black/70 text-white h-[400px] p-5 rounded-2xl max-[700px]:w-[300px] max-[700px]:h-[500px] max-[700px]:mt-10">
                <h1 className="text-[1.5em] font-bold max-[700px]:text-[1.2em]">
                    Explore Ancient Wisdom
                </h1>

                <div className="text-[1.1em] text-center mt-4 max-[700px]:text-[0.9em]">
                 Ancient Wisdom is more than just quotes — it’s an immersive cultural platform that expands your knowledge and sharpens your intellect by revealing how the greatest minds of history thought, lived, and acted. Discover inspiring biographies, challenge yourself with interactive quizzes, and relive key historical events that shaped the course of civilizations. Through their journeys and decisive actions, you’ll uncover timeless principles and profound wisdom that continue to inspire our lives today.
                </div>

                <p className="text-[1.1em] text-center mt-3 font-bold max-[700px]:text-[0.9em]">
                    Every click is a doorway to another century — step through and let history speak to you
                </p>
            </div>


            <div className="flex flex-col justify-center items-center gap-3 mt-4 mb-10">
                <Link to="/biographies">
                    <button className="w-[180px] h-[40px] bg-[#A8A8A8] rounded-lg cursor-pointer transition-opacity duration-200 hover:opacity-80 active:opacity-60">Explore Biographies</button>
                </Link>

                <Link to="/quizzes">
                   <button  className="w-[180px] h-[40px] bg-[#A8A8A8] rounded-lg cursor-pointer transition-opacity duration-200 hover:opacity-80 active:opacity-60">Quizzes</button>
                </Link>

                <Link to="/historicalEvents">
                   <button className="w-[180px] h-[40px] bg-[#A8A8A8] rounded-lg cursor-pointer transition-opacity duration-200 hover:opacity-80 active:opacity-60">Historical Events</button>
                </Link>

                <Link to="/frames">
                   <button className="w-[180px] h-[40px] bg-[#A8A8A8] rounded-lg cursor-pointer transition-opacity duration-200 hover:opacity-80 active:opacity-60">History in frames</button>
                </Link>

                <Link to="/guide">
                   <button className="w-[180px] h-[40px] bg-[#A8A8A8] rounded-lg cursor-pointer transition-opacity duration-200 hover:opacity-80 active:opacity-60">History Guide</button>
                </Link>
            </div>
        </div>
    )
}

export default memo(ExploreMain);