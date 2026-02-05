import { memo } from "react";



const MainTestimonials = () => {

    const testimonialsData = [
  {
    name: "Léa Martin",
    testimonial: "Polyglot helped me build confidence in speaking English from day one. The lessons are clear, interactive, and fun! I can now hold simple conversations without fear."
  },
  {
    name: "Thomas Dubois",
    testimonial: "The 'English for Beginners' course was the perfect start for me. The platform made learning easy and enjoyable, and I improved faster than I expected."
  },
  {
    name: "Sophie Chen",
    testimonial: "As a Chinese speaker, French pronunciation was challenging. Polyglot's pronunciation exercises and native speaker recordings made all the difference. Je parle français maintenant!"
  },
  {
    name: "Marco Rossi",
    testimonial: "I needed Spanish for my job in tourism. Polyglot's business Spanish course was exactly what I needed. My clients now compliment me on my fluency!"
  }
];

    return(
        <section className="flex flex-col justify-center items-center w-full" id="testimonials">

             <h1 className="mt-15 text-gray-100 font-bold text-[2em] text-center">Testimonials</h1>
              <h3 className="mt-5 text-gray-100 font-bold text-[1.3em] text-center">They Reached their objectives</h3>

                 <div className="flex flex-col justify-center items-center gap-10 mt-10 mb-10">
                {testimonialsData.map((t)=>{
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

export default memo(MainTestimonials);