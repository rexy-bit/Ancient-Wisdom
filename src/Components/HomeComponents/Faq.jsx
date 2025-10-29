import { memo, useState } from "react"



  const faqs = [
  {
    question: "What is Ancient Wisdom?",
    answer: "Ancient Wisdom is an interactive platform that brings history to life. You can explore quotes, biographies, historical events, learning guides, and even chat with Hermes AI, our intelligent assistant.",
  },
  {
    question: "Is the platform free to use?",
    answer: "Yes! Most features on Ancient Wisdom are free. Some advanced options (like premium resources or personalized features) may be added in the future.",
  },
  {
    question: "What makes Ancient Wisdom unique?",
    answer: "Unlike other platforms, Ancient Wisdom combines multiple approaches: quotes + biographies + events + AI. This means you can connect an inspiring thought directly to the life and story of the person who said it.",
  },
  {
    question: "Who is Hermes AI?",
    answer: "Hermes AI is your personal learning companion. Ask him anything about history, civilizations, or famous figures, and he will provide clear, tailored answers.",
  },
  {
    question: "Can I use Ancient Wisdom on my phone?",
    answer: "Absolutely! The platform is fully responsive and works on both mobile and desktop devices.",
  },{
    question: "Do I need an account to use Ancient Wisdom?",
    answer: "No, you can explore freely. However, creating an account will allow you to save favorites, track your learning journey, and access quizzes.",
  },{
    question: "Is the information reliable?",
    answer: "Yes, the content is based on trusted sources (philosophers, historians, and historical documents). Hermes AI also enriches your research with relevant insights.",
  },{
    question: "Does Ancient Wisdom only offer quotes?",
    answer: "Not at all! While quotes are an important part of Ancient Wisdom, the platform goes far beyond that. You can also explore detailed biographies, historical events, visual slides, structured learning guides, and even interact with Hermes AI for personalized answers.",
  }
];

const Faq = () => {

    const [openIndex, setOpenIndex] = useState();

    return(
       <section className="flex flex-col items-center w-full bg-[#A8A8A8] font-sans" id="faq">
          <h1 className="text-gray-50 font-black text-[2.5em] mt-5">FAQ</h1>
 
            <p className="text-gray-50 mt-5 font-bold text-[1.1em]">Got Questions? We’ve Got Answers.</p>
            <p className="w-[500px] text-center mt-2 text-gray-50 font-bold max-[500px]:w-[300px]">Here are some of the most common questions we receive about Our Platform</p>


            <div className="flex flex-col mt-10 mb-15">
                  {faqs.map((faq, index) => (
            <div key={index} className=" bg-white w-[700px] shadow-2xl max-[750px]:w-[300px]">
              <button
                className="w-full text-left px-4 py-3 font-medium flex justify-between items-center"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                {faq.question}
                <span className="text-[2em] font-light cursor-pointer">{openIndex === index ? "−" : "+"}</span>
              </button>
               <div
              className={`overflow-hidden transition-all duration-500 ease-in-out ${
                openIndex === index ? "max-h-40 px-4 pb-3" : "max-h-0"
              }`}
            >
              <p className="text-gray-600">{faq.answer}</p>
            </div>
            </div>
          ))}
             </div>

       </section>
    )
}

export default memo(Faq);