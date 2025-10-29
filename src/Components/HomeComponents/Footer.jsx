import { memo } from "react"
import { Link } from "react-router-dom";

const Footer = () => {

    return(
        <section className="flex flex-row px-10 w-full items-center bg-gray-800 text-gray-100 font-sans pt-10 pb-10 justify-between max-[900px]:flex-col max-[900px]:justify-center max-[900px]:gap-15">

            <div className="flex flex-col items-center gap-2">
                <h1 className="font-bold text-[1.5em]">Ancient Wisdom</h1>
                <img src="/ancientWisdomLogo.png" alt="" className="w-[200px]"/>
                <p className="text-[0.9em] font-bold text-center w-[200px]">Your Gateway to Ancient Knowledge</p>
            </div>

            <div className="flex flex-col items-center gap-1">
                <h1 className="text-[1.2em] font-bold">Quick Links</h1>
                <a href="/" className="mt-3">Home</a>
                <a href="#about">About</a>
                <a href="#offer">What We Offer</a>
                <a href="#why">Why Choose Us</a>
                <a href="#faq">FAQ</a>
            </div>

            <div className="flex flex-col items-center gap-1">
                <h1 className="text-[1.2em] font-bold">Navigation</h1>
                <Link to="/quotes" className="mt-3">Quotes</Link>
                <Link to="/favorites">Favorites</Link>
                <Link to="/explore">Explore</Link>
                <Link to="/quizzes">Quizzes</Link>
                <Link to="/biographies">Biographies</Link>
                <Link to="/historicalEvents">Historical Events</Link>
                <Link to="/guide">Guide</Link>
                <Link to="AI">Hermes AI</Link>
            </div>

            <div className="flex flex-col items-center gap-1">
               <h1 className="text-[1.2em] font-bold">Contact Us</h1>
               <div className="mt-3 flex flex-row items-center gap-2 justify-center"><i className="fa-solid fa-envelope text-[1.2em]"></i> <p>ancientwisd@gmail.com</p></div>
               <a href="https://www.linkedin.com/company/ancient-wisdom" className="text-[3em] transition-all duration-200 hover:scale-95 active:scale-90"><i className="fa-brands fa-linkedin"></i></a>
            </div>

           
        </section>
    )

}

export default memo(Footer);