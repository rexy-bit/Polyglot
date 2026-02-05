import { memo } from "react"
import { useLanguagesContext } from "../Contexts/LanguagesContext"
import { useNavigate } from "react-router-dom";
import {motion} from "framer-motion"




const All = () => {

    const {programs} = useLanguagesContext();
    const navigate = useNavigate();

    return(
        <section className="flex flex-wrap justify-center items-center gap-15 min-h-screen">

            <h1 className="text-[2em] font-bold text-gray-100 mt-15">All Courses</h1>


             <div className="flex flex-wrap justify-center items-center gap-10 mt-10 mb-15">
                {programs.map((p, index)=>{
                    return(
                        <motion.div
                                  initial={{ opacity: 0, y: 40 }} // Commence invisible et en bas
              whileInView={{ opacity: 1, y: 0 }} // Devient visible et remonte quand dans le viewport
              transition={{ duration: 0.6, delay: index * 0.1 }} // Délai basé sur l'index pour un effet cascade
              viewport={{ once: true, amount: 0.3 }} className="w-[300px] bg-gray-200 h-[350px] flex flex-col items-center relative rounded-xl transition-transform duration-300 hover:scale-105">
                            <div className="absolute left-3 top-2 bg-[#001f54] text-gray-50 px-2 py-1 rounded-full text-[14px] font-bold">{p.level} ({p.type})</div>
                            <h1 className="absolute top-11 text-blue-950 text-[1.3em] font-bold">{p.name}</h1>
                            <img src={p.icon} alt="" className="w-22 mt-20"/>
                            <p className="text-gray-700 text-center text-[15px] px-5 leading-4.5">
                                {p.shortDescrition}
                            </p>

                            <button 
                            className="bg-[#001f54] text-gray-100 absolute bottom-5 px-5 py-2 font-bold text-[15px] rounded-xl cursor-pointer transition-transform duration-300 hover:scale-105 active:scale-90" 
                            onClick={()=>navigate(`/course/${p.code}`)}
                            >Learn More</button>
                        </motion.div>
                    )
                })}
             </div>
        </section>
    )
}

export default memo(All);