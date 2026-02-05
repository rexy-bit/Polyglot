import  { memo } from "react"
import type { Program } from "../../Contexts/Types"
import {motion} from "framer-motion"

const Why = ({program} : {program : Program}) => {


    return(

        <section className="bg-white w-full flex flex-col" id="details">
 
            <section  className="flex flex-row justify-center items-center bg-white gap-100 py-15 max-[1250px]:gap-70 max-[1100px]:gap-20 max-[900px]:gap-10 max-[760px]:flex-col">
               <div  className="w-[500px] flex flex-col gap-5 max-[1000px]:w-[400px] max-[900px]:w-[350px] max-[750px]:text-center">
                 <p className="text-[2.5em] leading-12 font-bold max-[750px]:text-[2em] max-[750px]:leading-10">{program.perfectText}</p>
                 <p className="text-gray-800">{program.longDescription}</p>
               </div>

               <img  src={program.perfectIcon} alt="" className="w-70 " />
            </section>        

            <div className="flex flex-row justify-center items-center gap-7 max-[600px]:flex-col mt-10 mb-10">
                <div className=" bg-[#001f54] px-3 py-2 rounded-[10px] text-white text-[15px] font-[600] transition-transform duration-300 hover:scale-110 cursor-pointer">Duration: {program.duration}</div>
                <div className=" bg-[#001f54] px-3 py-2 rounded-[10px] text-white text-[15px] font-[600] transition-transform duration-300 hover:scale-110 cursor-pointer">{program.students} Students per group</div>
                <div className=" bg-[#001f54] px-3 py-2 rounded-[10px] text-white text-[15px] font-[600] transition-transform duration-300 hover:scale-110 cursor-pointer">{program.type}</div>
            </div>

            <div className="flex flex-col justify-center items-center w-full mt-5">
                <h1 className="font-bold text-[2em] text-center">Why Choose {program.name}</h1>

                <div className="flex flex-wrap justify-center gap-10 mt-15 items-center px-10 mb-10">
                    {program.why.map((w, index)=>{
                        return(
                            <motion.div
                                  initial={{ opacity: 0, y: 40 }} // Commence invisible et en bas
              whileInView={{ opacity: 1, y: 0 }} // Devient visible et remonte quand dans le viewport
              transition={{ duration: 0.6, delay: index * 0.1 }} // Délai basé sur l'index pour un effet cascade
              viewport={{ once: true, amount: 0.3 }} key={w.title} className="w-[280px] flex flex-col bg-gray-100 p-5 border-5 border-[#001f54] h-[330px] rounded-[10px] gap-3 transition-transform duration-300 hover:scale-105 cursor-pointer">

                               <i className={`${w.icon} text-[2em]`}></i>
                                <h3 className="text-[1.2em] font-[600] text-gray-800">{w.title}</h3>
                                <p className="text-[14px] text-gray-700 leading-5">
                                    {w.description}
                                </p>
                            </motion.div>
                        )
                    })}
                </div>
            </div>
        </section>

    )
}


export default memo(Why)