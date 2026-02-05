
import  { memo } from "react"
import {motion} from "framer-motion"

const HiringHero = () => {

    return(
        <section className="flex flex-row justify-center items-center w-full mt-10 gap-30 max-[1100px]:gap-15 max-[750px]:flex-col">

             <motion.div
    className="flex flex-col text-gray-100 max-[750px]:items-center"
    initial={{ opacity: 0, x: -50 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, delay: 0.2 }}>
                <h1 className="text-[2em] font-bold">We are Hiring</h1>
                <div className="w-[450px] max-[1100px]:w-[300px] text-[15px] max-[750px]:text-center">
                    We are hiring. We are looking for passionate talents who love languages, education, and cultural exchange. At Polyglot Academy, we believe language learning should be accessible, flexible, and enjoyable for everyone. As an innovative player in the language education space, we offer the freedom to work from anywhere, at your own pace, while contributing to a meaningful project that connects people through learning.
                </div>
             </motion.div>

              <motion.img
    className="w-[500px] max-[1100px]:w-[400px] max-[800px]:w-[300px]"
    src="https://res.cloudinary.com/dub4fhabm/image/upload/v1770302792/c948d4c3-fafb-43be-97d1-4a3938487fa8.png"
    alt=""
    initial={{ opacity: 0, x: 50 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, delay: 0.4 }}
  />
         
        </section>
    )
}

export default memo(HiringHero);