import { useSearchContext } from "../../Context/SearchContext";
import { useQuotesContext } from "../../Context/QuotesContext";
import { QuoteCard } from "../QuotesComponents/QuoteCard";

export const SearchMain = () => {
    const { search } = useSearchContext();
    const { quotes } = useQuotesContext();

    if (!search) return <h1 className="mt-20 text-center text-[1.5em]">Not found..</h1>;

    const s = search.toLowerCase();

    // Filtrer les quotes qui correspondent à la recherche
    const filteredQuotes = quotes.filter(q =>
        q.author?.toLowerCase().includes(s) ||
        q.era?.toLowerCase().includes(s) ||
        q.origin?.toLowerCase().includes(s) ||
        q.text?.toLowerCase().includes(s)
    );

    return (
        <div className="flex flex-wrap px-10 gap-10 justify-center items-center mt-25 mb-20">
            {filteredQuotes.length > 0 ? (
                filteredQuotes.map((q, i) => (
                    <QuoteCard Quote={q} index={i} key={i} />
                ))
            ) : (
                <h1 className="mt-20 text-center text-[1.5em]">Not found ...</h1>
            )}
        </div>
    );
};
