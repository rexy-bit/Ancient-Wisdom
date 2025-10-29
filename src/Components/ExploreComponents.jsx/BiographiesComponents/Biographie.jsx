import { memo } from "react";
import { useBiographieContext } from "../../../Context/BiographieContext";
import { Link, useNavigate } from "react-router-dom";
const Biographie = () => {

    const {biographie} = useBiographieContext();
    const navigate = useNavigate();

    return(
     biographie === null ? <h1 className="mt-20 text-[1.5em] text-center">No biographie found</h1> : 

        <section className="flex flex-col justify-center items-center mt-20 relative fade-in">
            <h1 className="text-[1.5em] font-bold underline w-[300px] text-center mt-5">Biographie of {biographie.name}</h1>

              <img src={biographie.image} alt={biographie.name} className="w-[200px] h-[300px] object-cover rounded-[5px] mt-10"/>
            <div className="flex flex-col justify-center items-center w-[800px] gap-5 mt-10 mb-20 max-[900px]:w-[500px] max-[550px]:w-[300px]">
                {biographie.biographie.map((section)=>{
                    return(
                        <div>
                        <h2 className="text-[1.2em] font-black max-[550px]:text-[0.9em]">{section.title}</h2>
                        <div className="max-[550px]:text-[0.8em]">{section.content}</div>
                        </div>
                    )
                })}
            </div>

                        <button className="bg-amber-800 text-white font-bold w-[80px] h-[30px] rounded-3xl cursor-pointer transition-opacity duration-200 hover:opacity-80 active:opacity-60 fixed top-30 left-2" onClick={()=>navigate(-1)}>Back</button>
        </section>
    )
}

export default memo(Biographie);