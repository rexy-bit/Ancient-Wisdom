import { memo } from "react"


const WhySection = () => {

    return(
        <section className="flex flex-col items-center w-full font-sans " id="why">
            <h1 className="text-center font-black text-[2em] mt-5">Why Choose Us</h1>

           
                <div className="flex flex-row gap-20 mt-10 w-full items-center justify-center px-10 max-[1000px]:flex-col max-[1000px]:gap-10">
                    <p className="text-[1.1em] w-[400px] text-gray-800 font-bold text-center max-[1000px]:w-[300px]">
                        At Ancient Wisdom, we go beyond traditional learning. Our platform is the only place where you can explore history through a wide variety of paths — from timeless quotes to in-depth biographies, from key events to visual journeys. What makes us unique is the way we connect knowledge: when you read a quote, you can also discover the life and story of the person who said it, creating a richer and more meaningful experience.
                    </p>
                    
                        
                        <img src="/icons/learning2.svg" alt="" className="w-[300px]"/>
                    

                </div>

                <div className="flex flex-row justify-center items-center gap-20 mt-10 mb-15 max-[1000px]:flex-col max-[1000px]:gap-10">
                    <img src="/icons/chatAi.svg" alt="" className="w-[300px]"/>
                    <p className="text-center w-[400px] text-gray-800 font-bold max-[1000px]:w-[300px]">And with Hermes AI, our intelligent assistant, you’ll never be alone in your learning journey. Ask questions, get personalized answers, and enjoy an engaging, interactive way to explore history like never before.</p>
                </div>

            
        </section>
    )

}
export default memo(WhySection);