import  { memo } from "react"
import type { Program } from "../../Contexts/Types"
import AOS from "aos";
const Why = ({program} : {program : Program}) => {


    return(

        <section className="bg-white w-full flex flex-col">
 
            <section  className="flex flex-row justify-center items-center bg-white gap-100 py-15 max-[1250px]:gap-70 max-[1100px]:gap-20 max-[900px]:gap-10 max-[760px]:flex-col">
               <div  className="w-[500px] flex flex-col gap-5 max-[1000px]:w-[400px] max-[900px]:w-[350px] max-[750px]:text-center">
                 <p className="text-[2.5em] leading-12 font-bold max-[750px]:text-[2em] max-[750px]:leading-10">{program.perfectText}</p>
                 <p className="text-gray-800">{program.longDescription}</p>
               </div>

               <img  src={program.perfectIcon} alt="" className="w-70 " />
            </section>        
        </section>

    )
}


export default memo(Why)