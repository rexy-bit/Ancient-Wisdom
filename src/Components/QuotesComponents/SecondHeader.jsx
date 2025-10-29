import React, { memo } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSearchContext } from "../../Context/SearchContext";

export const SecondHeader = () => {

    const {search, setSearch} = useSearchContext();

    const navigate = useNavigate();
    const saveSearch = (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const searchIn = formData.get("search");

        

        setSearch(searchIn);
        e.target.reset();
        navigate("/search")
        
    }
    return(

      <header className="fixed top-[60px] w-full flex flex-row justify-center items-center h-[50px] bg-[#3E3A39] z-50">
        <form onSubmit={saveSearch}>
        <input 
        type="text" 
        placeholder="Search..."
        className="bg-gray-100 px-5 rounded-3xl h-[30px] w-[400px] max-[550px]:w-[260px]"
        name="search"
        
        />

        
        <button
         aria-label="Search"
        className="bg-[#F4E4C1] w-[50px] h-[30px] rounded-r-3xl ml-[-20px]  font-black cursor-pointer z-50 transition-colors duration-300 hover:bg-gray-400 active:bg-gray-300" type="submit">
            <i className="fa-solid fa-magnifying-glass"></i>
        </button>
        </form>
      </header>
    )
}


