import { memo, useState } from "react";
import type { Program } from "../../Contexts/Types";

const Faq = ({course} : {course : Program}) => {

    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return(
        <section className="flex flex-col justify-center items-center w-full ">
            <h1 className="mt-15 text-white font-bold text-[2.5em]">FAQ</h1>
            <p className="text-gray-200 font-bold text-[1em] mt-2 text-center">Got Questions? We’ve Got Answers.</p>

            <div className="flex flex-col mt-10 mb-15">
                  {course.faq.map((faq, index) => (
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