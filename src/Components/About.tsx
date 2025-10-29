
import { memo } from "react"
import Counter from "./Counter";



const About = () => {

    const stats = [
        {
            num : 200,
            stat : 'QUIZZES AND EXERCICES PER COURSE'
        },{
             num : 5000,
             stat : 'Students at Polyglot Academy'
        },{
            num : 10,
            stat : 'LANGUAGES AND PROGRAMS'
        }
    ]
    

    return(
        <section className="flex flex-col justify-center items-center bg-[#001f54] py-15" id="about">
            
            <h1 className="text-white font-bold text-[3em]">About <span className="text-blue-600 font-[poppins]">Polyglot</span></h1>

            <div className="flex flex-row justify-center items-center gap-50 px-10 mt-10 max-[1281px]:gap-30 max-[1050px]:gap-20 max-[900px]:flex-col max-[950px]:gap-10">
                <div className="flex flex-col gap-3 max-[950px]:items-center max-[950px]:gap-5">
                    <p className="text-blue-500 font-black text-[2em] leading-8 max-[950px]:text-center">The Story Behind <span className="font-[poppins]">Polyglot Academy</span></p>
                    <div className="text-gray-200 text-[16px] w-[550px] max-[1200px]:w-[400px] max-[900px]:w-[300px]">
                       <strong className="text-blue-500 font-[poppins]">Polyglot Academy</strong> was born from a simple yet powerful idea, that <strong>learning languages</strong> can open doors to new <strong>opportunities, cultures,</strong> and <strong>ways of thinking</strong>. Founded by <strong>passionate educators</strong> and <strong>lifelong learners</strong>, Polyglot began as a small project dedicated to helping people <strong>communicate beyond borders</strong>. Over time, it evolved into a <strong>global learning space</strong> where <strong>curiosity</strong> and <strong>connection</strong> come together. At Polyglot, we believe that every language tells a story, of <strong>people, traditions, and dreams</strong>. That’s why our programs are designed not just to teach, but to <strong>inspire</strong>. Each lesson is a step toward <strong>confidence</strong>, <strong>cultural understanding</strong>, and a deeper appreciation of the world’s <strong>diversity</strong>. <strong>Join Polyglot Academy today</strong> and become part of a community that celebrates <strong>communication, growth,</strong> and <strong>discovery</strong>.
                    </div>
                </div>

                <img src="https://res.cloudinary.com/dub4fhabm/image/upload/v1761652558/5f4db0c9-7dbc-4ded-ade1-5dcb2c4b2600.png" className="w-[500px] rounded-xl max-[1050px]:w-[400px] max-[450px]:w-[300px]" />
            </div>


            <div className="flex flex-row justify-center items-center gap-30 px-10 mt-20 max-[1050px]:gap-20 max-[855px]:flex-col">
                <img src="/online.svg" className="w-[400px] max-[1050px]:w-[300px]" alt="" />
                <div className="flex flex-col gap-2">
                    <p className="text-white font-bold text-[2.2em] max-[855px]:text-center">Our Mission</p>
                    <p className="text-gray-200 w-[500px] max-[1000px]:w-[400px] max-[450px]:w-[300px]">
                          At <strong className="text-blue-500 font-[poppins]">Polyglot Academy</strong>, our mission is to make <strong>language learning</strong> an experience that is <strong>accessible, engaging,</strong> and truly <strong>transformative</strong>.  
  We aim to <strong>bridge cultures</strong> and bring people together by offering <strong>high-quality, personalized courses</strong> designed for learners of all backgrounds and levels.  
  Through <strong>innovative methods</strong> and <strong>interactive learning experiences</strong>, we empower our students to build confidence, achieve fluency, and explore the endless opportunities that come with mastering a new language.  
  <strong>Join Polyglot Academy today</strong> and let your journey toward global communication begin.
                    </p>
                </div>
            </div>


                        <div className="flex flex-row justify-center items-center gap-30 px-10 mt-20 max-[1050px]:gap-20 max-[855px]:flex-col">
                
                <div className="flex flex-col gap-2">
                    <p className="text-white font-bold text-[2.2em] max-[855px]:text-center">Our Teaching</p>
                    <p className="text-gray-200 w-[500px] max-[1000px]:w-[400px] max-[450px]:w-[300px]">
                            At <strong className="text-blue-500 font-[poppins]">Polyglot Academy</strong>, we believe that effective teaching goes beyond textbooks.  
  Our approach blends <strong>interactive learning</strong>, <strong>real-world communication</strong>, and <strong>cultural immersion</strong> to create a dynamic environment where every student can thrive.  
  Each course is guided by <strong>experienced instructors</strong> who combine linguistic expertise with innovative teaching methods to make every lesson meaningful and engaging.  
  Whether in group sessions or one-on-one classes, we focus on <strong>practical skills</strong>, speaking, listening, and understanding, to help our learners use the language with confidence in real-life situations.  
  <strong>Learn with us</strong>, and experience a smarter, more human way to master languages.
                    </p>
                </div>

                <img src="/teach.svg" className="w-[400px] max-[1050px]:w-[300px]" alt="" />
            </div>

            <div className="flex flex-row justify-center  gap-10 mt-15 max-[650px]:flex-col">
                {
                    stats.map((s)=>{
                        return(
                            <div className="flex flex-col items-baseline max-[650px]:items-center">
                               <div><Counter end={s.num}/></div>  
                               <p className="w-[170px] text-gray-200 font-bold max-[650px]:text-center">{s.stat.toLocaleUpperCase()}</p>
                            </div>
                        )
                    })
                }

            </div>

                                <div className="flex flex-row justify-center items-center gap-5 mt-15">
                    <a className=" text-[14px] font-bold text-white bg-blue-700 px-5 py-2 border border-blue-500 cursor-pointer rounded-full shadow-[0_0_20px_3px_rgba(59,130,246,0.5)] hover:shadow-[0_0_25px_5px_rgba(59,130,246,0.8)] transition-all duration-300"
                    href="/#courses"
                    >
                        Explore our Programs
                    </a>

                    <a className="bg-gray-100 px-7 text-[14px] font-bold text-blue-950 py-2 border border-white rounded-full cursor-pointer transition-all duration-300 hover:bg-gray-300 active:bg-gray-200"
                    href="/#contact"
                    >
                        Contact Us
                    </a>
                </div>


            
        </section>
    )

}

export default memo(About);