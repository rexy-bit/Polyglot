import { memo } from "react";
import {motion} from "framer-motion"


const WhyChoose = () => {

   const whyChooseData = [
  {
    icon: "fa-solid fa-flag-checkered",
    title: "From Beginner to Advanced",
    description: "Our courses are structured to take you from complete beginner to confident language user with a step-by-step approach."
  },
  {
    icon: "fa-solid fa-laptop",
    title: "100% Online & Flexible",
    description: "Learn at your own pace anytime, anywhere, with our interactive online platform."
  },
  {
    icon: "fa-solid fa-list-check",
    title: "Practice-Oriented",
    description: "We focus on practical exercises, real-life conversations, and interactive activities to help you actually use the language."
  },
  {
    icon: "fa-solid fa-clipboard-question",
    title: "Interactive Quizzes",
    description: "Over 1000 quizzes and games are available to test your skills and reinforce your learning."
  },
  {
    icon: "fa-solid fa-people-line",
    title: "Private Community",
    description: "Join our student community to practice, share progress, and get support from peers and mentors."
  },
  {
    icon: "fa-solid fa-graduation-cap",
    title: "Science-Backed Methods",
    description: "Our teaching methods are based on language acquisition science and effective learning strategies."
  }
];


    return(
        <section className="flex flex-col justify-center items-center w-full bg-gray-100" id="why">
             <h1 className="text-[#001f54] font-black text-[2.2em] mt-15 text-center">Why Choose Polyglot Academy</h1>

           <div className="flex flex-wrap justify-center items-center gap-10 mt-10 mb-10 px-10">
             {whyChooseData.map((d, index)=>{
                return(
                    <motion.div
                                  initial={{ opacity: 0, y: 40 }} // Commence invisible et en bas
              whileInView={{ opacity: 1, y: 0 }} // Devient visible et remonte quand dans le viewport
              transition={{ duration: 0.6, delay: index * 0.1 }} // Délai basé sur l'index pour un effet cascade
              viewport={{ once: true, amount: 0.3 }} // Se déclenche une seule fois quand 30% de l'élément est visible
      key={d.title}
                    className="bg-[#001f54] w-[300px] flex flex-col h-[250px] p-5 rounded-[10px] gap-3 cursor-pointer transition-transform duration-300 hover:scale-105">

                        <i className={`${d.icon} text-[2em] text-gray-200`}></i>
                        <p className="text-gray-200 font-bold text-[1.2em]">{d.title}</p>
                        <p className="text-gray-200 text-[15px] leading-5">{d.description}</p>
                    </motion.div>
                )
             })}
            </div>

            <a className=" text-[14px] font-bold text-white bg-blue-700 px-5 py-2 border border-blue-500 cursor-pointer rounded-full shadow-[0_0_20px_3px_rgba(59,130,246,0.5)] hover:shadow-[0_0_25px_5px_rgba(59,130,246,0.8)] transition-all duration-300 mb-10"
            href="/#courses"
            >
                 Explore Our Programs
            </a>

        </section>
    )
}

export default memo(WhyChoose);