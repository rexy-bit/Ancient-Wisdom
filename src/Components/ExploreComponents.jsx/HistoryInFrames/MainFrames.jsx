
import Slider from "./Slider"
import sliderData from "./sliderData"
import { memo } from "react"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
const MainFrames  = () => {


  const navigate = useNavigate();
    return(
        <section className="flex flex-col items-center justify-center">
            <div className="flex flex-col justify-center items-center mt-20">
                <h1 className="text-[1.5em] font-black max-[900px]:w-[300px] max-[900px]:text-center">Explore the Wonders of the Ancient World</h1>

                <p className="text-[1.1em] w-[600px] text-center mt-3 max-[650px]:w-[300px]">Journey through time and discover legendary monuments, timeless statues, and maps that shaped our understanding of the ancient civilizations.</p>

                <div className="flex flex-col justify-center items-center gap-15 mt-15 mb-15 fade-in">
                   {sliderData.map((data)=>{
                    return(
                      <Slider
                        data={data}
                        key={data.id}
                      />
                    )
                   })}
                </div>

                <div className="flex flex-col justify-center items-center mt-10 gap-5 mb-7">
                  <p className="text-[1.4em] font-bold underline">Dive deeper into history!</p>
                  <p className="text-[1.1em] text-center w-[300px]">
                    Explore our <span className="font-bold transition-opacity duration-200 hover:opacity-70 active:opacity-50 cursor-pointer" onClick={()=> navigate('/biographies')}>Biographies</span> to uncover the lives behind the statues, visit <span className="font-bold transition-opacity duration-200 hover:opacity-70 active:opacity-50 cursor-pointer" onClick={()=> navigate('/historicalEvents')}>Historical Events</span> to relive the moments that shaped civilizations, and discover Maps of ancient empires that once ruled the world. Your journey through time is just a click away
                  </p>
                </div>
            </div>
        </section>
    )
}

export default memo(MainFrames);