import { memo, useEffect, useState } from "react"
import sliderData from "./sliderData"



const Slider = ({data}) => {

   const [index, setIndex] = useState(0);
    



    function getNextImage(){

        if(index + 1 >= data.images.length){
            setIndex(0);
        }else{
            setIndex(prev => prev + 1);
        }
    }

    const getPreviousImage = () => {

        if(index - 1 < 0){

            setIndex(data.images.length - 1);
        }else{
            setIndex(prev => prev - 1);
        }
    }
    return(

        <div className="flex flex-col justify-center items-center gap-5">
            <h1 className="text-[1.3em] font-bold underline">{data.theme} Slider</h1>

            
                <div className="flex flex-row content-center items-center gap-1">
                <button onClick={getPreviousImage} className="text-[4em] font-black cursor-pointer transition-opacity duration-200 hover:opacity-70 active:opacity-50 max-[700px]:text-[2em]">
                    &#10094;
                </button>

                <img src={data.images[index].image} alt={data.images[index].description} className="h-[350px] w-[650px] object-contain max-[700px]:h-[150px] max-[700px]:w-[250px] fade-iin"/>

                <button onClick={getNextImage} className="text-[4em] font-black cursor-pointer transition-opacity duration-200 hover:opacity-70 active:opacity-50 max-[700px]:text-[2em]">
                   &#10095;
                </button>
                </div>

                <p className="text-[1.1em] w-[250px] text-center">{data.images[index].description}</p>

            
        </div>
    )
    
}


export default memo(Slider);