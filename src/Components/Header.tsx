import  { memo, useEffect } from "react"
import React from "react";



const Header = () => {

    const [showNav, setShowNav] = React.useState<boolean>(()=>{
        const saved = localStorage.getItem("showNav");

         return saved ? JSON.parse(saved) : false;
    });

    useEffect(()=>{
        localStorage.setItem('showNav', JSON.stringify(showNav));

    }, [showNav]);
    return(
        <header className="flex flex-row justify-between items-center px-5 text-white bg-blue-900 h-[60px] w-full max-[620px]:px-10 fixed top-0 shadow-2xl z-50">
            <div className="text-[1.4em] font-[poppins] font-black max-[800px]:text-[1.2em]">
                <a href="/#hero">
                Polyglot Academy
                </a>
            </div>

         <div className="hidden max-[620px]:block cursor-pointer text-[2em] font-black"
          onClick={()=>setShowNav(prev => !prev)}
         >&#9776;</div>

            <nav className="flex flex-row gap-5 justify-center items-center max-[900px]:gap-4 max-[620px]:hidden">
                <a href="/#about" className="linkNav">About</a>
                <a href="/#courses" className="linkNav">Our Courses</a>
                <a href="/#choose" className="linkNav">Why Choose Us?</a>
                <a href="/#testimonials" className="linkNav">Testimonials</a>
                <a href="/#contact" className="linkNav">Contact Us</a>
            </nav>

            {showNav  &&
               <nav className="flex flex-col absolute top-[65px] bg-blue-900 w-[150px] gap-2 p-2 px-3 right-5 rounded-lg">
                <a href="/#about" className="linkNav" onClick={()=>setShowNav(false)}>About</a>
                <a href="/#courses" className="linkNav" onClick={()=>setShowNav(false)}>Our Courses</a>
                <a href="/#choose" className="linkNav" onClick={()=>setShowNav(false)}>Why Choose Us?</a>
                <a href="/#testimonials" className="linkNav" onClick={()=>setShowNav(false)}>Testimonials</a>
                <a href="/#contact" className="linkNav" onClick={()=>setShowNav(false)}>Contact Us</a>

            <div className="absolute top-1 right-2 text-[1em] font-bold cursor-pointer transition-opacity duration-200 hover:opacity-80 active:opacity-60" onClick={()=>setShowNav(false)}>
                    &#10005;
                </div>
               </nav>
            }
        </header>
    )
}

export default memo(Header);