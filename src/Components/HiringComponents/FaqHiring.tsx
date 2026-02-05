import  { memo, useState } from "react"


const FaqHiring = () => {


    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const hiringFAQ = [
  {
    question: "Do I need prior teaching experience?",
    answer: "No prior teaching experience is required, but having experience or a background in languages or education is a plus."
  },
  {
    question: "Can I work part-time or remotely?",
    answer: "Yes! We offer flexible schedules and fully remote positions so you can teach from anywhere."
  },
  {
    question: "Which platforms do I use to teach?",
    answer: "We use a combination of our internal Polyglot Academy platform and widely-used video conferencing tools like Zoom."
  },
  {
    question: "What languages can I teach?",
    answer: "We offer courses in multiple languages, including English, French, Spanish, German, and more. You can teach the languages you are fluent in."
  },
  {
    question: "How long is the application process?",
    answer: "The process typically takes 1–2 weeks, including CV submission, interview, and a short teaching demo."
  },
  {
    question: "Do I get support or training as a new teacher?",
    answer: "Absolutely! We provide onboarding, training materials, and mentorship to help you succeed."
  },
];

    return(

        <section className="flex flex-col justify-center items-center bg-[#001f54]">

             <h1 className="text-gray-100 font-black text-[3em] mt-20">FAQ</h1>
             <h2 className="text-[1.1em] text-gray-100 font-[600] mt-4">Have Questions? We’ve Got Answers!</h2>
             <h3 className="mt-4 w-[400px] text-center text-gray-100 text-[15px] max-[500px]:w-[300px]">
                We know that applying for a new teaching position can raise many questions. Here you’ll find answers to the most common inquiries about working at Polyglot Academy, our teaching process, and what it’s like to be part of our team. If you don’t find your question here, feel free to reach out to us directly—we’re always happy to help!
             </h3>

             <div className="flex flex-col mt-10 mb-25">
                  {hiringFAQ.map((faq, index) => (
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


export default memo(FaqHiring);