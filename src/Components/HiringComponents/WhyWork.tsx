import { memo } from "react"
import {motion} from "framer-motion"
const WhyWork = () => {

    const benefits = [
  {
    icon : "fa-solid fa-business-time",
    title: "Time Freedom",
    description:
      "Set your own working hours. What matters to us is impact and results, not rigid schedules."
  },
  {
    icon : "fa-solid fa-earth-americas",
    title: "Location Freedom",
    description:
      "Work from anywhere in the world. Our team is distributed across different countries and cultures."
  },
  {
    icon : "fa-regular fa-face-laugh-beam",
    title: "Fun & Supportive Culture",
    description:
      "Join a friendly, caring, and motivated team driven by a shared passion for education and innovation."
  },
  {
    icon: "fa-solid fa-chalkboard-user",
    title: "Continuous Learning",
    description:
      "Get access to internal training and learning resources to grow your skills in languages, tech, and digital education."
  },
  {
    icon: "fa-solid fa-comment-dollar",
    title: "Attractive Compensation",
    description:
      "Enjoy a competitive and fair compensation aligned with your skills and contribution."
  },
  {
    icon : "fa-solid fa-handshake" ,
    title: "Real-Life Meetups",
    description:
      "Take part in annual events and team gatherings to meet and connect with your teammates in real life."
  }
];

    return(
        <section className="flex flex-col justify-center items-center mt-30 mb-30">
              <h1 className="mt-10 text-[2em] font-bold text-gray-100">Why work at Polyglot Academy</h1>

              <div className="flex flex-wrap justify-center items-center gap-10 mt-15 px-15">
                {benefits.map((b,index)=>{
                    return(
                      <motion.div
                                  initial={{ opacity: 0, y: 40 }} // Commence invisible et en bas
              whileInView={{ opacity: 1, y: 0 }} // Devient visible et remonte quand dans le viewport
              transition={{ duration: 0.6, delay: index * 0.1 }} // Délai basé sur l'index pour un effet cascade
              viewport={{ once: true, amount: 0.3 }} key={b.title} className="w-[250px] flex flex-col bg-gray-100 p-5 border-5 border-[#001f54] h-[250px] rounded-[10px] gap-3 transition-transform duration-300 hover:scale-105 cursor-pointer">

                               <i className={`${b.icon} text-[2em]`}></i>
                                <h3 className="text-[1.2em] font-[600] text-gray-800">{b.title}</h3>
                                <p className="text-[14px] text-gray-700 leading-5">
                                    {b.description}
                                </p>
                            </motion.div>
                    );
                })}
              </div>
            
        </section>
    )
}

export default memo(WhyWork);