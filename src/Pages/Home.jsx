import React from "react";
import { Header } from "../Components/HomeComponents/Header";
import { HomeMain } from "../Components/HomeComponents/HomeMain";
export const Home = () => {

    return(
        <>
          <section className="flex flex-col content-center items-center w-full">
            <Header/>
            <HomeMain/>
          </section>
        </>
    )
}