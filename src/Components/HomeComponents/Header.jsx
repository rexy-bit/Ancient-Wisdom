import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useUser } from "../../Context/UserContext";
export const Header = () => {

    const [showHam, setShowHam] = useState(()=>{
        const saved = localStorage.getItem('showHam');

        return saved ? JSON.parse(saved) : 
           false
    });

    const {user} = useUser();
  
    
    
    useEffect(()=>{
        localStorage.setItem('showHam', JSON.stringify(showHam));
    }, [showHam]);

    return(

        <header className="w-full flex flex-row justify-between bg-[#A8A8A8] h-[60px] items-center z-50 fixed top-0 px-2 shadow-2xl">
           <Link to="/"><h1 className="text-[1.5em] font-black color-black  transition-opacity duration-200 hover:opacity-70 active:opacity-50 cursor-pointer max-[700px]:text-[1.2em]"><i class="fa-solid fa-feather"></i> Ancient Wisdom</h1>
          </Link>
            <nav className="flex flex-row font-sans justify-center items-center gap-4 text-[1.1em] text-white max-[750px]:text-[1em] max-[680px]:hidden"> 
                <Link to="/"  className="linkNav">Home</Link>
                <Link to="/Quotes" className="linkNav">Quotes</Link>
                <Link className="linkNav" to="/favorites">Favorites</Link>
                
                <Link className="linkNav" to="/explore">Explore</Link>
                {user &&<Link className="linkNav" to="/AI">Ask HermesAI</Link>}
                <Link className="linkNav ml-4 mr-2" to="/user"><i className="fa-solid fa-user"></i></Link>
            </nav>

            <div className="hidden max-[680px]:block text-[1.8em] mr-2 font-black cursor-pointer transition-opacity duration-200 hover:opacity-70 active:opacity-50" onClick={()=> setShowHam(prev => !prev)}>
                <i class="fa-solid fa-bars"></i>
            </div>

            {showHam && <nav className="min-[680px]:hidden font-sans flex flex-col absolute top-43 bg-[#A8A8A8] w-[100px] p-2 rounded-lg gap-1 text-white right-2 z-50"> 
                <Link to="/" onClick={()=> setShowHam(false)} className="linkNav">Home</Link>
                <Link to="/Quotes" onClick={()=> setShowHam(false)} className="linkNav">Quotes</Link>
                <Link className="linkNav" onClick={()=> setShowHam(false)} to="/favorites">Favorites</Link>
                <Link className="linkNav" onClick={()=> setShowHam(false)} to="/explore">Explore</Link>
                {user &&<Link className="linkNav" onClick={()=> setShowHam(false)} to="/AI">Ask HermesAI</Link>}
                <Link className="linkNav mt-2 ml-2" to="/user"><i className="fa-solid fa-user"></i></Link>
            </nav>}
        </header>
    );
}