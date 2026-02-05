import  { memo, useState } from "react";
import {motion} from "framer-motion"
import type { Position } from "../../Contexts/Types";
import PositionPop from "./PositionPop";

const teachingPositions: Position[] = [
  {
    id: 1,
    title: "English Language Teacher",
    format: "Online",
    schedule: "Flexible",
    description:
      "Help learners improve their communication skills through interactive and engaging lessons.",
    longDescription:
      "As an English Language Teacher at Polyglot Academy, you will design and deliver engaging lessons to learners of all levels, from beginners to advanced. You will focus on improving students’ reading, writing, speaking, and listening skills while creating a supportive and motivating learning environment. You will adapt lessons to individual student needs, provide constructive feedback, and incorporate cultural insights to enhance understanding. This role offers flexibility to work online from anywhere, allowing you to connect with a diverse, international student base."
  },
  {
    id: 2,
    title: "French Language Teacher",
    format: "Online",
    schedule: "Flexible",
    description:
      "Support students in developing confidence and fluency in French.",
    longDescription:
      "As a French Language Teacher, you will guide learners in mastering French through interactive lessons tailored to their proficiency level. Your responsibilities include improving students’ grammar, vocabulary, pronunciation, and conversation skills, while fostering a positive and immersive learning experience. You will design lesson plans, provide regular feedback, and encourage students to engage with French culture through language. The position is fully online and flexible, connecting you with students from different parts of the world."
  },
  {
    id: 3,
    title: "Spanish Language Teacher",
    format: "Online",
    schedule: "Flexible",
    description:
      "Create dynamic lessons that make learning Spanish enjoyable and practical.",
    longDescription:
      "In this role, you will teach Spanish to students of various ages and proficiency levels. You will create dynamic and interactive lesson plans that focus on practical language use, conversation, and cultural understanding. Your goal is to make learning Spanish enjoyable, engaging, and effective. You will also monitor student progress, adapt your teaching methods as needed, and provide guidance to help learners achieve fluency. This online position allows you to work remotely and interact with a multicultural student base."
  },
  {
    id: 4,
    title: "Arabic Language Teacher",
    format: "Online",
    schedule: "Flexible",
    description:
      "Guide learners in mastering Arabic through structured and culturally rich lessons.",
    longDescription:
      "As an Arabic Language Teacher, you will deliver structured lessons that enhance students’ reading, writing, speaking, and listening skills. You will integrate cultural elements to provide context and deepen understanding. Responsibilities include preparing lesson materials, providing feedback, and adapting lessons to student needs. This fully online role allows you to teach students globally while fostering a positive, supportive, and immersive learning environment."
  },
  {
    id: 5,
    title: "German Language Teacher",
    format: "Online",
    schedule: "Flexible",
    description:
      "Teach German with a focus on real-life communication and language fundamentals.",
    longDescription:
      "As a German Language Teacher at Polyglot Academy, you will help students build strong foundations in German grammar, vocabulary, and conversation. You will design lessons that emphasize real-life communication, cultural understanding, and practical language use. Your role includes assessing student progress, providing guidance, and creating an engaging online classroom experience. This position is flexible and remote, offering the opportunity to connect with students worldwide."
  },
  {
    id: 6,
    title: "Online Conversation Coach",
    format: "Online",
    schedule: "Flexible",
    description:
      "Help students gain confidence and fluency through guided conversation sessions.",
    longDescription:
      "As an Online Conversation Coach, your primary responsibility is to help learners improve their spoken language skills and gain confidence in real-life communication. You will conduct guided conversation sessions, correct pronunciation and grammar, and encourage active participation. You will adapt discussions to students’ interests and levels while creating a friendly and motivating environment. This fully online role provides flexibility and the chance to work with students from diverse backgrounds."
  }
];

const Positions = () => {

    const [showPop, setShowPop] = useState<boolean>(false);
    const [position, setPosition] = useState<Position>({id : 0, title : "", format : '', schedule : "", description :"", longDescription : ""});

    return(
        <section className="flex flex-col justify-center items-center w-full bg-gray-100">

            <h1 className="text-[#001f54] font-bold text-[2em] mt-20">Join Our Teaching Team</h1>

            <p className="w-[300px] text-center text-gray-700 mt-5">
                We are always looking for passionate language teachers who want to inspire learners and share cultures through language education.
            </p>

            <div className="flex flex-wrap justify-center items-center gap-10 mt-10 mb-20 px-10">
             {teachingPositions.map((d, index)=>{
                return(
                    <motion.div
                                  initial={{ opacity: 0, y: 40 }} // Commence invisible et en bas
              whileInView={{ opacity: 1, y: 0 }} // Devient visible et remonte quand dans le viewport
              transition={{ duration: 0.6, delay: index * 0.1 }} // Délai basé sur l'index pour un effet cascade
              viewport={{ once: true, amount: 0.3 }} // Se déclenche une seule fois quand 30% de l'élément est visible
      key={d.title}

                    className="bg-[#001f54] w-[300px] flex flex-col h-[250px] p-5 rounded-[10px] gap-3 cursor-pointer transition-transform duration-300 hover:scale-105 relative"
                    
                    >
                        
                          <div className="absolute bg-gray-100 text-[13px] left-2 font-bold top-2 w-[60px] rounded-full flex justify-center items-center h-[25px]">{d.format}</div>
                       
                        <p className="text-gray-200 font-bold text-[1.2em] mt-5">{d.title}</p>
                        <p className="text-[17px] font-[600] text-gray-100">Shedule: {d.schedule}</p>
                        <p className="text-gray-200 text-[15px] leading-5">{d.description}</p>

                        <button className="w-[100px] h-[35px] text-[15px] font-[600] cursor-pointer transition-opacity duration-300 hover:opacity-80 active:opacity-60 bg-gray-100 text-[#001f54] rounded-[5px] mt-2"
                        onClick={()=>{
                             setPosition(d);
                            setShowPop(true);
                           
                        }}
                        >Apply now</button>
                    </motion.div>
                ) 
             })}
            </div>

            {showPop && <PositionPop setShowPop={setShowPop} position={position}/>}

        </section>
    )
}

export default memo(Positions);