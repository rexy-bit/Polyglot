import { memo } from "react"
import type { Program } from "../../Contexts/Types"
import AOS from "aos";
import Why from "./Why";
const CourseHero = ({program} : {program : Program}) => {

    return(

        <>
        <section className="flex flex-col w-full justify-center items-center py-10">
          <div className="flex flex-row justify-between w-full items-center px-30 max-[1200px]:px-10 max-[600px]:flex-col max-[600px]:gap-10">
            <div className="flex flex-col max-[600px]:items-center">
                <h1 className="text-white text-[3em] font-black max-[850px]:text-[2em] max-[600px]:text-center">{program.name}</h1>
                <p className="text-gray-100 w-[700px] text-[17px] max-[1200px]:w-[500px] max-[850px]:w-[300px] max-[600px]:text-center max-[600px]:mt-5">{program.shortDescrition}</p>
                <div className="flex flex-row mt-10 gap-10 max-[850px]:gap-5 max-[500px]:flex-col">
                    <button 
                    className=" text-[14px] font-bold text-white bg-blue-700 px-10 py-2 border border-blue-500 cursor-pointer rounded-full shadow-[0_0_20px_3px_rgba(59,130,246,0.5)] hover:shadow-[0_0_25px_5px_rgba(59,130,246,0.8)] transition-all duration-300"
                    >Join The Training</button>
                    <button className="bg-gray-200 px-10 py-2 border border-gray-700 rounded-full text-[14px] font-bold cursor-pointer transition-opacity duration-300 hover:opacity-70 active:opacity-50">Details</button>
                </div>
            </div>

            <img src={program.icon} className="w-80 max-[1200px]:w-60" alt="" />
          </div>

          <div className="mt-40 mb-50 flex flex-row justify-center items-center gap-50 max-[1050px]:gap-30 max-[920px]:gap-20 max-[820px]:gap-10 max-[750px]:flex-col">
            {program.advantages.map((ad)=>{
              return(
                <div  className="w-[200px] text-center text-[1.3em] text-gray-100 font-black leading-5  h-[100px] flex items-center rounded-lg border-2 border-gray-100 justify-center transition-transform duration-300 hover:scale-105">
                  <p className="w-[120px]">{ad}</p>
                  </div>
              )
            })}
          </div>
        </section>


          <Why program={program}/>
        </>
    )
}


export default memo(CourseHero);