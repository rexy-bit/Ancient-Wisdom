
import { memo, useEffect, useState } from "react"
import { Link } from "react-router-dom"

const ExploreHeader = () => {

    const [showNav, setShowNav] = useState(()=>{
        const saved = localStorage.getItem('showNav');

        return saved ? JSON.parse(saved) : false;
    });

    useEffect(()=>{
        localStorage.setItem('showNav', JSON.stringify(showNav));
    }, [showNav]);

    return(

        <header className="fixed top-[60px] font-sans z-50 w-full bg-yellow-100 flex flex-row px-5 justify-center text-[1.1em] h-[40px] items-center font-black max-[700px]:text-[0.7em] max-[700px]:px-1 max-[700px]:font-normal">
           <nav className="w-full flex flex-row justify-between max-[850px]:hidden">
            <Link className="transition-opacity duraration-200 hover:opacity-80 active:opacity-60 cursor-pointer" to="/biographies">Biographies</Link>
            <Link className="transition-opacity duraration-200 hover:opacity-80 active:opacity-60 cursor-pointer" to="/quizzes">Quizzes</Link>
            <Link className="transition-opacity duraration-200 hover:opacity-80 active:opacity-60 cursor-pointer" to="/historicalEvents">Historical Events</Link>
            <Link className="transition-opacity duraration-200 hover:opacity-80 active:opacity-60 cursor-pointer" to="/frames">History in frames</Link>
            <Link to="/guide" className="transition-opacity duraration-200 hover:opacity-80 active:opacity-60 cursor-pointer">History Guide</Link>
            </nav>

            <div className="min-[850px]:hidden text-[1.9em] font-black cursor-pointer transition-opacity duration-300 hover:opacity-70 active:opacity-50" onClick={()=> setShowNav(prev => !prev)}>&#9776;</div>


            {showNav && <nav className="min-[850px]:hidden flex flex-col absolute top-30 bg-amber-200 rounded-lg p-3 text-[1.1em] gap-2 font-bold z-50">
            <Link className="transition-opacity duraration-200 hover:opacity-80 active:opacity-60 cursor-pointer" onClick={()=> setShowNav(false)} to="/biographies">Biographies</Link>
            <Link className="transition-opacity duraration-200 hover:opacity-80 active:opacity-60 cursor-pointer" onClick={()=> setShowNav(false)} to="/quizzes">Quizzes</Link>
            <Link className="transition-opacity duraration-200 hover:opacity-80 active:opacity-60 cursor-pointer" onClick={()=> setShowNav(false)} to="/historicalEvents">Historical Events</Link>
            <Link className="transition-opacity duraration-200 hover:opacity-80 active:opacity-60 cursor-pointer" onClick={()=> setShowNav(false)} to="/frames">History in frames</Link>
            <Link to="/guide" onClick={()=> setShowNav(false)} className="transition-opacity duraration-200 hover:opacity-80 active:opacity-60 cursor-pointer">History Guide</Link>
            </nav>}
        </header>
    )
}

export default memo(ExploreHeader);