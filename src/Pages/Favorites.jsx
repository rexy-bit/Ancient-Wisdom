import { Header } from "../Components/HomeComponents/Header";
import { QuoteCard } from "../Components/QuotesComponents/QuoteCard";
import { useFavoritesContext } from "../Context/FavoritesContext";
import { useQuotesContext } from "../Context/QuotesContext";
import { auth } from "../Config/fireBase";

export const Favorites = () => {

    const {favorites, loading} = useFavoritesContext();
       
    const {quotes} = useQuotesContext();

    const currentUser = auth.currentUser;

    const favoriteQuotes = quotes.filter(q => favorites.includes(q.id));
    return(

        <section className="flex flex-col min-h-screen w-full items-center fade-in">
            <Header/>
             {loading && <h1 className="mt-10 text-[1.2em]">Loading...</h1>}

            {!currentUser && <h1 className="mt-13 text-[1.2em] w-[250px] text-center">Sign up to Add and See favorites !</h1>}

            {favoriteQuotes.length === 0 ? 
             <h1 className="mt-10 text-[1.7em] font-black underline">No Favorites</h1> : 

                  <>
                              <h1 className="mt-10 text-[1.7em] font-black underline">Favorties</h1>

                            <div className="flex wrap justify-center items-center gap-10 mt-10 px-10">
                                {favoriteQuotes.map((f,i)=>{

                                    return(
                                        <QuoteCard
                                        Quote={f}
                                        index={i}
                                        key={f.id}
                                        />
                                    )
                                    
                                    
                                })}
                           </div>
                  </>
           }

        </section>
    )
}