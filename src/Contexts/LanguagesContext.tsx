import { createContext, useContext } from "react";
import type { Program } from "./Types";





interface LanguagesContextType{
    programs : Program[]
}

const LanguagesContext = createContext<LanguagesContextType | null>(null);


export const LanguagesProvider = ({children} : {children : React.ReactNode}) => {


    const programs : Program[] = [
        {
            code : 0,
            name : 'English for beginners',
            level : 'Beginner',
            shortDescrition : 'English for beginners is a complete programm for anyone who\'s interested in learning English, regardless of their background or prior experience.',
            longDescription : "In our English for Beginners course, you'll learn important language skills like grammar, new words, speaking, listening, and understanding what you read. Each part of the course focuses on a different skill. You'll follow clear lessons, do activities, and practice to improve. This course is made especially for people who are just starting to learn English. We start with the basics and gradually move to harder things, so it's easy to follow along.",
            attractiveText : "Start your journey to English fluency with our Beginner's English Course. Perfect for new learners, this course focuses on building a strong foundation. Gain confidence with our lessons, interactive quizzes, and games. Join us and master English today!",
            duration : '5 Weeks',
            type : 'Online',
            students : 25,
            purchasePrice : 5500,
            why : [
                {
                icon : '',
                title : 'From the beginning to the end!',
                description : "From understanding basic sentence structures to mastering verb tenses and building vocabulary, our English for Beginners Grammar Course covers all the essentials to kickstart your language learning journey and build a solid foundation for fluency!"
                },{
                    icon : '',
                    title : '100% online content',
                    description : "The English for Begginers program is 100% online, available 24/7 and designed to be completed in 1 week (or less, the choice is yours)."
                },{
                    icon : '',
                    title : 'Get into practice!',
                    description : "English for Begginers is not only theoretical training, it is also practical and concrete application of the lessons taught."
                },{
                    icon : '',
                    title : 'Interactive quizzes',
                    description : "You'll gain access to a comprehensive library of over 1000 quizzes meticulously crafted by your instructor, designed to reinforce your grasp of the lessons covered in this course."
                },{
                    icon : '',
                    title : 'A private community',
                    description : "Through the private community, you will be able to share, exchange and network with thousands of determined students."
                },{
                    icon : '',
                    title : 'Advanced method',
                    description : "You'll not only go through some english lessons, but you'll discover the science behind learning the language and aquiring it."
                }

            ],
            faq : [
                {
                    question : 'What Will I learn in this course?',
                    answer : "In this course, you will learn essential English language skills, especially the grammar and vocabulary part since they're one of the most important foundations for beginners. We'll cover topics tailored for beginners to help you build a strong foundation in English proficiency."
                }, {
                    question : 'How is this course structured?',
                    answer : "The course is divided into modules, each focusing on a specific aspect of English language learning. You'll progress through structured lessons, interactive activities, and practice exercises designed to reinforce your understanding and skills."
                }, {
                    question : 'Is this course suitable for absolute beginners?',
                    answer : "Yes, this course is specifically designed for absolute beginners with little to no prior knowledge of English. Our curriculum starts from the basics and gradually progresses to more advanced concepts, ensuring a smooth learning experience for beginners."
                }, {
                    question : 'How often will the live Zoom sessions be held?',
                    answer : "Our programm will have 2 regular Zoom sessions per week."
                }, {
                    question : 'Will there be interactive exercices or quizzes?',
                    answer : "Yes, the course includes interactive exercises and quizzes to reinforce your learning and assess your progress. These activities are designed to engage you actively in the learning process and provide immediate feedback on your understanding."
                }, {
                    question : 'What makes this course different from other English courses available online?',
                    answer : "Our course stands out for its comprehensive curriculum, interactive learning approach, personalized feedback, and experienced instructors. We prioritize student engagement and success, ensuring a rewarding learning experience that equips you with practical language skills for real-world communication."
                }, {
                    question : 'Will I recieve a certificate upon completion?',
                    answer : "Upon completing the course requirements, you will receive a certificate of achievement, recognizing your accomplishment and proficiency in learning the English language."
                }
               
            ],

            testomonials : [
                {
                    name : "Sarah Ahmed",
                    testimonial : "Polyglot helped me build confidence in speaking English from day one. The lessons are clear, interactive, and fun! I can now hold simple conversations without fear"
                },{
                    name : "Amina Benali",
                    testimonial : "The ‘English for Beginners’ course was the perfect start for me. The platform made learning easy and enjoyable, and I improved faster than I expected."
                },{
                    name : "Sahi Said",
                    testimonial : "Before joining Polyglot, I couldn’t understand basic English sentences. Now I can read, write, and even chat online in English! The teachers are patient and motivating."
                }
            ]

        }

    ];


    return(
       <LanguagesContext.Provider value={{programs}}>
        {children}
       </LanguagesContext.Provider>
    )
}


export const useLanguagesContext = () => {

    const context = useContext(LanguagesContext);

    if(!context){

        throw new Error("Use the LanguagesContext inside the LanguagesProvider");
    }

    return context;
}