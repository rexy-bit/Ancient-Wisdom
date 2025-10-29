import React from "react";
import bgImage from "../../assets/bgGreece.jpg"
import { Link, useNavigate } from "react-router-dom";
import { Home } from "../../Pages/Home";
import Features from "./Features";
import WhySection from "./WhySection";
import Faq from "./Faq";
import Footer from "./Footer";
export const HomeMain = () => {

    const navigate = useNavigate();

    return(
       <section className="flex flex-col justify-center items-center w-full">
        <div className="h-[500px] w-full bg-cover bg-center flex justify-center fade-in" style={{backgroundImage : `url(${bgImage})`}}>
            <div className="w-full bg-black/50 flex flex-col items-center">
                <h1 className="text-white font-black text-[2.5em] mt-10 max-[700px]:text-[1.7em] text-center">Welcome to Ancient Wisdom</h1>
                <p className="text-white text-[1.5em] font-bold w-[500px] text-center leading-7 mt-5 font-sans max-[700px]:text-[1.2em] max-[700px]:w-[300px]">Discover timeless wisdom from the greatest minds in history.</p>
                <p className="text-[1.5em] text-white font-black max-[500px]:w-[300px] max-[500px]:text-[1.2em] font-sans mt-2 text-center">Your #1 Companion in Learning from the Past.</p>
                <p className="text-white w-[600px] text-center mt-5 font-sans max-[700px]:w-[300px]">Ancient Wisdom brings together history’s greatest quotes and stories to inspire your daily life.</p>

                 <div className="flex flex-row justify-center items-center gap-2 mt-10">
                    <button onClick={()=>navigate("/quotes")} className="p-2 bg-gray-900 text-white font-bold rounded-lg font-sans cursor-pointer transition-all hover:bg-gray-700 active:bg-gray-600">Explore Quotes</button>

                    <a href="#about" className="p-2 bg-gray-100 text-black font-bold rounded-lg font-sans transition-transform duration-300 hover:scale-95 active:scale-90 cursor-pointer">Learn More</a>
                 </div>
            </div>
        </div>

        <section className="flex flex-col w-full items-center" id="about">

              <h1 className="font-black text-gray-900 mt-5 text-[2em] font-sans text-center">About Ancient Wisdom</h1>
              <p className="text-[1.2em] text-gray-700 w-[600px] text-center font-bold font-sans leading-6 mt-5 max-[650px]:w-[300px]">Ancient Wisdom is more than a platform, it’s your gateway to history, knowledge, and inspiration.</p>
               <div className="flex flex-row justify-center items-center gap-20 w-full px-15 mt-10 mb-15 max-[850px]:flex-col max-[850px]:gap-10">
                   <p className="text-gray-800 font-sans font-bold text-center w-[400px] max-[500px]:w-[300px]">Ancient Wisdom is your gateway to history, knowledge, and inspiration — offering timeless quotes, detailed biographies, major historical events, and structured learning guides to make history engaging. You’ll also find interactive quizzes to test your knowledge, rich image collections, maps and timelines to visualize the past, and progress tracking to follow your journey. For members with an account, Ancient Wisdom unlocks Hermes AI, your personal assistant designed to answer questions, provide guidance, and make learning more personalized and interactive.</p>
                   <img src="/images/marcus4.jpg" alt="" className="w-[300px] h-[300px] object-cover rounded-[5px]"/>

               </div>

               <div className="flex flex-row justify-center items-center gap-2 mb-15">
                <button onClick={()=>navigate("/quotes")} className="p-2 bg-gray-900 text-white font-bold rounded-lg font-sans cursor-pointer transition-all hover:bg-gray-700 active:bg-gray-600">Explore Quotes</button>
                <button onClick={()=>navigate("/explore")} className="p-2 bg-gray-100 text-black font-bold rounded-lg font-sans transition-transform duration-300 hover:scale-95 active:scale-90 cursor-pointer">Learn History</button>
               </div>
        </section>
        <Features/>
        <WhySection/>
        <Faq/>
        <Footer/>
        </section>
    )
}