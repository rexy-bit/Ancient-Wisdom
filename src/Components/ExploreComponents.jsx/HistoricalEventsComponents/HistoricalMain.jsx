import { Link, useNavigate } from "react-router-dom"
import historicalEvents from "./historicalEvents"
import { memo } from "react"
import parcheminBg from "../../../assets/parchemin.jpg"
import { useHistoricalContext } from "../../../Context/HistoricalContext"
const HistoricalMain = () => {


    const {setEvent} = useHistoricalContext();
    const naviagte = useNavigate();
    return(

        <section style={{backgroundImage : `url(${parcheminBg})`}} className="fade-in w-full min-h-screen object-cover flex flex-col items-center bg-cover bg-center">

            <div className="flex flex-col justify-center items-center mt-23">
                <h1 className="text-[1.5em] font-bold max-[550px]:w-[300px] max-[550px]:text-center">Welcome to the Historical Events Archive!</h1>

                <p className="text-[1.1em] mt-5 w-[800px] text-center max-[900px]:w-[500px] max-[900px]:text-[1em] max-[550px]:w-[300px]">Step into the corridors of time and explore the turning points that shaped our world. From legendary battles and groundbreaking discoveries to the rise and fall of great civilizations, each event tells a story worth remembering. Whether you’re here to learn, reflect, or be inspired, you’ll find a rich collection of moments that defined history.</p>

                <p className="mt-5 text-[1.1em] w-[600px] text-center max-[900px]:w-[500px] max-[550px]:w-[300px]">Let the past guide your curiosity and spark your imagination—your journey through time begins now!</p>

            </div>

            <div className="flex flex-col justify-center items-center mt-7">
                <p className="text-[1.2em] font-bold">Choose a topic and dive into it</p>

                <div className="flex flex-col justify-center items-center gap-3 mt-4 mb-15">
                    {historicalEvents.map((event)=>{
                        return(
                            <Link key={event.id} to={`/event/${event.id}`}>
                               <button className="w-[300px] px-1 h-[55px] bg-[#A8A8A8] rounded-lg shadow-amber-900 cursor-pointer transition-transform duration-300 hover:scale-110 active:scale-105 leading-4">
                                  {event.name}
                               </button>
                            </Link>
                        );
                    })}
                </div>
            </div>

              <button className="bg-amber-800 text-white font-bold w-[80px] h-[30px] rounded-3xl cursor-pointer transition-opacity duration-200 hover:opacity-80 active:opacity-60 fixed top-30 left-2" onClick={()=>naviagte(-1)}>Back</button>
        </section>
    )
}


export default memo(HistoricalMain);