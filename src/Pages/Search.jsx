import { SecondHeader } from "../Components/QuotesComponents/SecondHeader"
 import { Header } from '../Components/HomeComponents/Header'
import { SearchMain } from "../Components/SearchComponents/SearchMain"

export const Search = () => {

    return(

        <section className="min-h-screen">
            <Header/>

            <SecondHeader/>

            <SearchMain/>
        </section>
    )
}