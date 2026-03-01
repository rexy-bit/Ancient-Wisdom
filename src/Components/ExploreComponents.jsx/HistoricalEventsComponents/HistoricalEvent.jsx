import { memo } from "react";
import { useHistoricalContext } from "../../../Context/HistoricalContext";
import parcheminBg from "../../../assets/parchemin.jpg"
import { Link, useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import { useEffectEvent } from "react";
import { useEffect } from "react";
import historicalEvents from "./historicalEvents"

const HistoricalEvent = () => {

    const [currentEvent, setCurrentEvent] = useState(null);

    const {id} = useParams();

    useEffect(()=>{
        const find = historicalEvents.find((e)=>e.id === Number(id));

        if(find){
            setCurrentEvent(find);
        }
    }, [id]);
    
    const navigate = useNavigate();

   
    return(

        !currentEvent ? <h1 className="mt-20 text-[1.2em] text-center">No Historical event found</h1> :
        <section style={{backgroundImage : `url(${parcheminBg})`}} className="fade-in w-full min-h-screen object-cover flex flex-col items-center bg-cover bg-center">

       
           <div className="flex flex-col justify-center items-center mt-20">
               <h1 className="text-[1.7em] font-black mt-5 underline w-[300px] text-center">{currentEvent.name}</h1>

               <div className="flex flex-col bg-black/50 text-white w-[800px] p-5 rounded-xl gap-4 mt-5 mb-10 max-[850px]:w-[600px] max-[650px]:w-[300px]">
                {currentEvent.evenement.map((e,i)=>{
                    return(
                    <div key={i} className="flex flex-col gap-1">
                        <h1 className="text-[1.3em] font-bold font-sans">{e.title}</h1>
                        <div className="text-[17px] font-sans">
                            {e.content}
                        </div>
                    </div>
                    );
                })}
               </div>
           </div>

            <button className="bg-amber-800 text-white font-bold w-[80px] h-[30px] rounded-3xl cursor-pointer transition-opacity duration-200 hover:opacity-80 active:opacity-60 fixed top-30 left-2" onClick={()=>navigate(-1)}>Back</button>
        </section>
    )
}

export default memo(HistoricalEvent);