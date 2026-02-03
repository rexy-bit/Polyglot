import  { memo } from "react"
import type { Program } from "../../Contexts/Types"


const CourseTestimonials = ({course} : {course : Program}) => {

    return(
        <section className="flex flex-col justify-center items-center">
           <h1 className="mt-15 text-gray-100 font-bold text-[2em] text-center">They Reached their objectives</h1>

            <p className="text-gray-100 text-center mt-5 font-[600] text-[18px]">Take a look at some of our student’s feedbacks</p>

            <div className="flex flex-col justify-center items-center gap-10 mt-10 mb-10">
                {course.testomonials.map((t)=>{
                    return(
                        <div key={t.name} className="w-[900px] max-[950px]:w-[600px] max-[650px]:w-[400px] max-[450px]:w-[300px] flex flex-col gap-2 p-5 rounded-[10px] bg-gray-100 shadow-xl cursor-pointer transition-transform duration-300 hover:scale-105">
                            <p className="text-blue-900 text-[1.1em] font-bold">{t.name}</p>
                            <p className="text-[15px] text-gray-700 leading-5">{t.testimonial}</p>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default memo(CourseTestimonials);