import { memo } from "react"
import { useNavigate } from "react-router-dom";


const Hero = () => {

    const navigate = useNavigate();

    


    return(
        <section className="flex items-center justify-center  bg-cover h-[600px] bg-center w-full" style={{backgroundImage : "url('https://res.cloudinary.com/dub4fhabm/image/upload/v1761652830/a1c05f1c-b686-4186-9813-ae9d6b1910a9.png')"}} id="hero">
            
            <div className="flex flex-col  items-center bg-blue-950/80 h-full w-full">
            <div className="flex flex-col justify-center items-center mt-20">

                <h1 className="text-[2.5em] font-black text-white max-[700px]:text-[2.1em] text-center leading-9">
                    Welcom to <span className="font-[poppins] text-blue-500">Polyglot Academy</span>
                </h1>
                <p className="text-[1.2em] font-bold text-white mt-10">
                   Learn languages the <span className="text-blue-400">smart way.</span>
                </p>

                <p className="text-white text-[1.3em] text-center px-5 mt-5 font-bold ">
                    At Polyglot, we combine expert instructors with modern technology to help you reach fluency faster.
                </p>

                <p className="text-[1.1em] text-center text-white font-black mt-10 px-10">
                    Whether you’re studying for work, travel, or passion — we’ve got you covered.
                </p>

                <div className="flex flex-row justify-center items-center gap-5 mt-10">
                    <a className=" text-[14px] font-bold text-white bg-blue-700 px-5 py-2 border border-blue-500 cursor-pointer rounded-full shadow-[0_0_20px_3px_rgba(59,130,246,0.5)] hover:shadow-[0_0_25px_5px_rgba(59,130,246,0.8)] transition-all duration-300"
                    href="/#courses"
                    >
                        Explore our Programs
                    </a>

                    <a className="bg-gray-100 px-7 text-[14px] font-bold text-blue-950 py-2 border border-white rounded-full cursor-pointer transition-all duration-300 hover:bg-gray-300 active:bg-gray-200"
                    href="/#about"
                    >
                        About Us
                    </a>
                </div>
            </div>

            </div>
        </section>
    )

}

export default memo(Hero);