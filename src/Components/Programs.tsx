import { memo } from "react"
import { useLanguagesContext } from "../Contexts/LanguagesContext";
import { useNavigate } from "react-router-dom";

const Programs  = () => {

    const {programs} = useLanguagesContext();
    const navigate = useNavigate();

    return(

        <section className="bg-[#001f54] flex flex-col justify-center items-center w-full py-10 h-full" id="courses">

             <h1 data-aos="fade-up" className="text-gray-100 text-[2.5em] w-[600px] text-center leading-10 mt-15 font-black max-[700px]:w-[400px] max-[700px]:text-[2em] max-[450px]:w-[300px]">Language Courses Designed for Your Success</h1>

             <div className="flex flex-wrap justify-center items-center gap-10 mt-15 mb-10" data-aos="fade-up">
                {programs.map((p)=>{
                    return(
                        <div className="w-[300px] bg-gray-200 h-[350px] flex flex-col items-center relative rounded-xl transition-transform duration-300 hover:scale-105">
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
                        </div>
                    )
                })}
             </div>

             
        </section>
    )
}

export default memo(Programs);