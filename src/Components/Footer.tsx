import { memo } from "react"

const Footer = () => {

    const date = new Date().getFullYear()

    return(
        <section className="flex flex-col justify-between w-full bg-gray-100 rounded-t-3xl">
            <div className="flex flex-row py-15 justify-between w-full px-10 max-[900px]:flex-col max-[900px]:items-center max-[900px]:gap-10">
            <div className="flex flex-col gap-3 max-[900px]:items-center">
                <p className="font-[poppins] text-[#001f54] font-black text-2xl">Polyglot Academy</p>

                <p className="text-[15px] text-gray-700 w-[250px] max-[900px]:text-center">
                    Polyglot Academy – Learn languages the smart way. Expert-led, tech-powered courses designed to help you speak confidently and connect globally.
                </p>
                <p className="font-[600] text-[17px]">Follow us: </p>
                <div className="flex flex-row items-center gap-5">
                   <i className="fa-brands fa-instagram text-[2em] transition-transform duration-200 hover:scale-110 cursor-pointer text-[#001f54]"></i>
                  <i className="fa-brands fa-linkedin text-[2em] transition-transform duration-200 hover:scale-110 cursor-pointer text-[#001f54]"></i>
                   <i className="fa-brands fa-youtube text-[2em] transition-transform duration-200 hover:scale-110 cursor-pointer text-[#001f54]"></i>
                </div>
            </div>

               <div className="flex flex-col items-center gap-5">

                  <h2 className="font-[600] text-[20px] text-[#001f54]">Quick Links</h2>
                   
                   <div className="flex flex-col items-center gap-1">
                      <a href="/#about" className="text-gray-800">About</a>
                      <a href="/#courses" className="text-gray-800">Courses</a>
                      <a href="/#why" className="text-gray-800">Why</a>
                      <a href="/#testimonials" className="text-gray-800">Testimonials</a>
                      <a href="/#faq" className="text-gray-800">FAQ</a>
                      <a href="/#contact" className="text-gray-800">Contact Us</a>
                   </div>
               </div>

               <div className="flex flex-col items-center gap-5">
                <h2 className="font-[600] text-[20px] text-[#001f54]">Languages</h2>

                <div className="flex flex-col items-center gap-1">
                    <p className="text-gray-800">English</p>
                    <p className="text-gray-800">French</p>
                    <p className="text-gray-800">German</p>
                    <p className="text-gray-800">Italian</p>
                    <p className="text-gray-800">Spanish</p>
                </div>
               </div>

               <div className="flex flex-col items-center gap-5">
                  <h2 className="font-[600] text-[20px] text-[#001f54]">Resources</h2>
                  <div className="flex flex-col items-center gap-1">
                    <a href="/#about" className="text-gray-800">About</a>
                    <a href="/hiring" className="text-gray-800">Hiring</a>
                     <a href="/terms" className="text-gray-800">Terms and Conditions</a>
                  </div>
               </div>
            </div>

            <div className="px-5 flex flex-row w-full items-center justify-between py-4 border-t border-t-gray-400">
               <p className="text-gray-700 text-[15px]">&copy; {date} Polyglot. All rights reserved</p>
               <p className="text-gray-900 text-[15px]">Crafted with ❤️ by  <strong className="underline cursor-pointer">Yanis Rezgui</strong></p>
            </div>
        </section>
    )
}

export default memo(Footer);