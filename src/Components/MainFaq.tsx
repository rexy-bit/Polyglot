import { memo, useState } from "react";

const MainFaq = () => {

    const faqData = [
  {
    question: 'What is the difference between in-person and online classes?',
    answer: 'In-person classes take place at our training center with direct interaction, while online classes are delivered live via Zoom. Both formats follow the same curriculum, have the same qualified teachers, and maintain the same teaching quality.'
  },
  {
    question: 'How are Zoom classes conducted?',
    answer: 'Our Zoom classes are live, interactive sessions with screen sharing, virtual whiteboards, breakout rooms for group activities, and recorded sessions available for review. You participate actively just like in a physical classroom.'
  },
  {
    question: 'What is the maximum class size?',
    answer: 'All our classes, both in-person and online via Zoom, are limited to a maximum of 25 students to ensure personalized attention and effective learning for every participant.'
  },
  {
    question: 'Can I switch between in-person and online formats?',
    answer: 'Yes, absolutely! Our flexible system allows you to attend in-person classes when available and join via Zoom when you cannot come to the center, ensuring continuity in your language learning journey.'
  },
  {
    question: 'Do I receive a certificate after completing a course?',
    answer: 'Yes, upon successful completion of each course level, you will receive a Polyglot Academy certificate that validates your language proficiency and can be used for academic or professional purposes.'
  }
];

    const [openIndex, setOpenIndex] = useState<number | null>(null);


    return(
        <section className="flex flex-col justify-center items-center w-full bg-gray-100" id="faq">
            <h1 className="mt-15 text-blue-900 font-bold text-[2.5em]">FAQ</h1>

            <div className="flex flex-col mt-10 mb-15">
                  {faqData.map((faq, index) => (
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


export default memo(MainFaq);