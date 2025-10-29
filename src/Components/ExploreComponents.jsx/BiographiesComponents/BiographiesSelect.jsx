import { Link, useNavigate } from "react-router-dom"
import Biographies from "./Biographies"
import { memo } from "react"
import { useBiographieContext } from "../../../Context/BiographieContext"

const BiographiesSelect = ()=>{

    const {setBiographie} = useBiographieContext();
    const navigate = useNavigate();

    return(

        <section className="flex flex-col mt-15 items-center min-h-screen relative fade-in">
            <h1 className="mt-10 text-[1.5em] font-black underline w-[300px]">Explore Biographies</h1>

            <div className="flex flex-wrap  justify-center items-center gap-10 mt-10 mb-10 px-7">
                {Biographies.map((b)=>{

                    return(

                        <Link onClick={()=> setBiographie(prev => b)} to="/biographie">
                        <div key={b.id} className="flex flex-col justify-center items-center gap-2 bg-gray-200 p-5 rounded-[50%] h-[200px] w-[200px] cursor-pointer transition-opacity duration-300 hover:opacity-70 active:opacity-50">

                          
                            <img src={b.image} alt={b.name} className="h-[100px] w-[100px] object-contain"/>

                            <p className="font-bold text-[0.9em] w-[80px] text-center leading-4">{b.name}</p>
                        </div>
                        </Link>
                    )
                })}
            </div>

            <button className="bg-amber-800 text-white font-bold w-[80px] h-[30px] rounded-3xl cursor-pointer transition-opacity duration-200 hover:opacity-80 active:opacity-60 absolute top-0 left-2" onClick={()=>navigate(-1)}>Back</button>
        </section>
    )

}

export default memo(BiographiesSelect);