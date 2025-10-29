import React from "react";
import { QuoteCard } from "./QuoteCard";
export const QuotesDisplay = ({Quotes}) => {

    return(
        <div className="flex flex-wrap gap-10 px-5 justify-center items-center mb-15 mt-10 max-[600px]:px-5">
            {Quotes.map((q,i)=>{

               return(
                <QuoteCard
                Quote={q}
                index={i}
                key={q.id}
                />
               )
            })}
        </div>
    )
    
}