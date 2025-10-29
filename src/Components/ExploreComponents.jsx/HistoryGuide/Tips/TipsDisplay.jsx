import { memo } from "react";
import tips from "./tips"
import GuideHeader from "../GuideHeader";
import { Link, useNavigate } from "react-router-dom";
const Tips = () => {

    const navigate = useNavigate();

    return(

        <>

        <GuideHeader/>
        <section className="bg-[#F5E6C8] min-h-screen w-full flex flex-col items-center mt-[50px]">

            <h1 className="mt-20 text-[1.3em] font-black underline">
                Learning Tips
            </h1>

            <p className="text-[1em] w-[500px] text-center mt-5 max-[540px]:w-[300px]">
                Learning history is not just about memorizing dates, it’s about understanding connections, causes, and consequences. Ancient Wisdom gives you the tools to explore history through inspiring quotes, detailed biographies, interactive maps, and key historical events.
            </p>

            <div className="flex flex-col justify-center items-center gap-5 mt-10">

                {tips.map((tip,i)=>{
                    return(
                        <div className="w-[700px] flex flex-col gap-2 max-[720px]:w-[500px] max-[520px]:w-[300px]">
                            <h1 className="text-[1em] font-bold font-sans">-{i+1} {tip.titre}:</h1>
                            <p>
                                <strong>Why?</strong> : {tip.why}
                            </p>

                            <p><strong>How in Ancient Wisdom? </strong>: {tip.how}</p>
                        </div>
                    )
                })}
            </div>

            <div className="mt-10 mb-10 w-[500px] text-center font-bold max-[520px]:w-[300px]">
                History is a journey, not a race. With Ancient Wisdom, every quote, biography, and map is a step toward seeing the world through the eyes of the past.
            </div>

                           <button className="bg-amber-800 text-white font-bold w-[80px] h-[30px] rounded-3xl cursor-pointer transition-opacity duration-200 hover:opacity-80 active:opacity-60 fixed top-43 left-2" onClick={()=>navigate(-1)}>Back</button>
        </section>

        </>
    );
}


export default memo(Tips);