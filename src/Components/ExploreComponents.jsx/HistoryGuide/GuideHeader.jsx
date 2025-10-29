import React, { memo } from "react";
import { Link } from "react-router-dom";

const GuideHeader = () => {

    return(
        <header className="fixed top-[100px] bg-amber-800 w-full flex flex-row justify-between items-center px-2 font-sans font-bold h-[40px] text-white text-[1.1em] max-[910px]:text-[0.8em] max-[800px]:text-[0.7em] max-[800px]:px-1 z-[50]">
            <Link to='/learningTips' className="transition-opacity duration-200 hover:opacity-70 active:opacity-50">Learning Tips</Link>
            <Link className="transition-opacity duration-200 hover:opacity-70 active:opacity-50" to="/books">Book recommendation</Link>
            <Link to='/movies' className="transition-opacity duration-200 hover:opacity-70 active:opacity-50">Movie recommendation</Link>
        </header>
    )
}

export default memo(GuideHeader);