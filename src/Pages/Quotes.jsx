import { useQuotesContext } from "../Context/QuotesContext";
import { QuotesDisplay } from "../Components/QuotesComponents/QuotesDisplay";
import { SecondHeader } from "../Components/QuotesComponents/SecondHeader";
export const Quotes = () => {

    const {quotes, loading} = useQuotesContext();
    
    return(
        <section className="fade-in flex flex-col justify-center items-center ">

            <SecondHeader/>
            <h1 className="text-[2em] mt-15 font-black underline">Quotes</h1>

             {loading && <h1 className="mt-5 text-[1.2em] font-bold">loading...</h1>}
            <QuotesDisplay
            Quotes = {quotes}
            />
        </section>
    )
}