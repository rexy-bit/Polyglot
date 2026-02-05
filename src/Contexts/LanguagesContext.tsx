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
            name : 'English For Beginners',
            icon : 'https://res.cloudinary.com/dub4fhabm/image/upload/v1761947140/edf8d658-d770-4b58-9054-aca1ee0c7c86.png',
            level : 'Beginner',
            perfectText : "The perfect English course for beginners",
            shortDescrition : 'English for beginners is a complete programm for anyone who\'s interested in learning English, regardless of their background or prior experience.',
            longDescription : "In our English for Beginners course, you'll learn important language skills like grammar, new words, speaking, listening, and understanding what you read. Each part of the course focuses on a different skill. You'll follow clear lessons, do activities, and practice to improve. This course is made especially for people who are just starting to learn English. We start with the basics and gradually move to harder things, so it's easy to follow along.",
            attractiveText : "Start your journey to English fluency with our Beginner's English Course. Perfect for new learners, this course focuses on building a strong foundation. Gain confidence with our lessons, interactive quizzes, and games. Join us and master English today!",
            duration : '5 Weeks',
            advantages : ["30+ Lessons on video", "Unlimited access and immediate", "1000+ Quizzes and games"],
            type : 'Online',
            students : 25,
            perfectIcon : 'https://res.cloudinary.com/dub4fhabm/image/upload/v1762638659/undraw_destination_fkst_yqpapr.png',
            purchasePrice : 5500,
            why : [
                {
                icon : "fa-solid fa-flag-checkered",
                title : 'From the beginning to the end!',
                description : "From understanding basic sentence structures to mastering verb tenses and building vocabulary, our English for Beginners Grammar Course covers all the essentials to kickstart your language learning journey and build a solid foundation for fluency!"
                },{
                    icon : "fa-solid fa-laptop",
                    title : '100% online content',
                    description : "The English for Begginers program is 100% online, available 24/7 and designed to be completed in 1 week (or less, the choice is yours)."
                },{
                    icon : "fa-solid fa-list-check",
                    title : 'Get into practice!',
                    description : "English for Begginers is not only theoretical training, it is also practical and concrete application of the lessons taught."
                },{
                    icon : "fa-solid fa-clipboard-question",
                    title : 'Interactive quizzes',
                    description : "You'll gain access to a comprehensive library of over 1000 quizzes meticulously crafted by your instructor, designed to reinforce your grasp of the lessons covered in this course."
                },{
                    icon : "fa-solid fa-people-line",
                    title : 'A private community',
                    description : "Through the private community, you will be able to share, exchange and network with thousands of determined students."
                },{
                    icon : "fa-solid fa-graduation-cap",
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

        },{
    code : 1,
    name : 'English Speaking',
    icon : 'https://res.cloudinary.com/dub4fhabm/image/upload/v1761947268/3cf510aa-8a98-41d1-a899-aaa9aa0b0b7d.png',
    perfectText : 'The perfect program to Speak English Fluently',
    level : 'Intermediate',
     perfectIcon : 'https://res.cloudinary.com/dub4fhabm/image/upload/v1762638659/undraw_destination_fkst_yqpapr.png',
    shortDescrition : "English Speaking is designed for learners who already know the basics and want to improve their fluency, pronunciation, and communication skills in real-life situations.",
    longDescription : "Our English Speaking Intermediate program focuses on helping you speak naturally and confidently. Through real-life dialogues, role-plays, and interactive sessions, you’ll learn how to express yourself clearly, use idiomatic expressions, and improve your pronunciation. You’ll also practice listening and responding quickly, preparing you for both casual and professional conversations. This course is ideal for learners who already have basic English knowledge and wish to reach the next level in their speaking journey.",
    attractiveText : "Take your English to the next level with our Intermediate Speaking Course! Gain real confidence in conversations, discussions, and presentations. Learn from real-world examples and interactive speaking sessions that make practice engaging and effective!",
    duration : '6 Weeks',
    type : 'On site',
    students : 20,
    purchasePrice : 6500,
    advantages : ["5 Weeks of Studying", "On-site Classes", "25 Students per group"],
    why : [
        {
            icon : "fa-solid fa-list-check",
            title : 'Fluency through practice!',
            description : "Through guided conversation sessions, pronunciation drills, and role-play exercises, our English Speaking program helps you speak more fluently and naturally. You’ll learn to think in English and communicate with ease in various everyday and professional situations."
        },{
            icon : "fa-solid fa-person-arrow-down-to-line",
            title : 'In-person learning advantage',
            description : "Experience dynamic classroom interactions where you can practice English face-to-face, receive instant feedback, and develop your speaking confidence in a supportive learning environment."
        },{
            icon : "fa-solid fa-volume-high",
            title : 'Speak with confidence!',
            description : "This program focuses on real-world communication rather than memorization. You’ll engage in practical discussions and real scenarios designed to help you use English effectively and naturally."
        },{
            icon : "fa-solid fa-users-rays",
            title : 'Interactive group activities',
            description : "Participate in group discussions, debates, and storytelling sessions that enhance teamwork, confidence, and critical thinking—all in English!"
        },{
            icon : "fa-solid fa-users-between-lines",
            title : 'Supportive speaking community',
            description : "Join a motivated community of English learners where you can practice daily, share your progress, and receive encouragement from peers and mentors."
        },{
            icon : "fa-solid fa-graduation-cap",
            title : 'Science-backed learning method',
            description : "Our approach combines neuroscience and language acquisition science to help you speak more naturally, remember longer, and express yourself more accurately."
        }
    ],
    faq : [
        {
            question : 'What will I learn in this course?',
            answer : "You’ll learn to speak English with greater fluency and accuracy, use idioms and expressions naturally, and improve pronunciation and listening comprehension. The course focuses heavily on real-world communication and confidence building."
        }, {
            question : 'Who is this course for?',
            answer : "This course is ideal for learners who already have a basic understanding of English grammar and vocabulary and now want to improve their speaking and listening skills for personal or professional use."
        }, {
            question : 'How is the course structured?',
            answer : "The course includes weekly live sessions, group activities, conversation practices, and real-time feedback. Each week introduces new communication themes, vocabulary, and speaking challenges."
        }, {
            question : 'Is this course only in person?',
            answer : "Yes, this program is designed to be delivered in person to maximize your speaking practice and real-time interaction with instructors and classmates."
        }, {
            question : 'Will there be assessments or feedback?',
            answer : "Yes! You’ll receive personalized feedback from instructors on your pronunciation, fluency, and accuracy after every speaking task and activity."
        }, {
            question : 'What makes this course unique?',
            answer : "Unlike typical English courses, this one focuses exclusively on communication skills. You’ll spend most of your time speaking, listening, and thinking in English, supported by a scientific learning approach and constant instructor feedback."
        }, {
            question : 'Do I receive a certificate at the end?',
            answer : "Yes, upon completing all sessions and assignments, you will receive a certificate of completion recognizing your progress and your ability to communicate effectively in English."
        }
    ],
    testomonials : [
        {
            name : "Hassan Merabet",
            testimonial : "Before joining the English Speaking program, I understood English but couldn’t express myself well. After just a few weeks, I can confidently speak and hold real conversations!"
        },{
            name : "Leila Mansouri",
            testimonial : "The in-person classes made a huge difference for me. Speaking face-to-face with others helped me overcome my fear of mistakes and improve my fluency naturally."
        },{
            name : "Karim Bouzid",
            testimonial : "Polyglot’s intermediate course pushed me to speak more and think in English. The teachers correct you kindly and give great advice. I feel much more confident now!"
        }
    ]
},{
  code: 2,
  name: "French for Beginners",
  icon: "https://res.cloudinary.com/dub4fhabm/image/upload/v1770323108/5e1f2b54-d8bc-4e76-a18d-77b1b1631957.png",
  perfectText: "The perfect program to start speaking French with confidence",
  level: "Beginner",
  perfectIcon: "https://res.cloudinary.com/dub4fhabm/image/upload/v1762638659/undraw_destination_fkst_yqpapr.png",
  shortDescrition:
    "French for Beginners is designed for learners with little or no prior knowledge of French who want to build a strong foundation in speaking, listening, reading, and basic writing.",
  longDescription:
    "Our French for Beginners program helps you start your French journey step by step in a supportive and interactive environment. You will learn essential vocabulary, basic grammar, and everyday expressions used in real-life situations. Through guided practice, simple conversations, and practical exercises, you’ll gain confidence in introducing yourself, asking questions, and understanding basic spoken French. This course focuses on communication from day one, ensuring that you don’t just learn French—you actually use it.",
  attractiveText:
    "Start your French journey today! Learn how to speak, understand, and interact in French with confidence. This beginner-friendly course makes learning French simple, practical, and enjoyable.",
  duration: "6 Weeks",
  type: "On site",
  students: 20,
  purchasePrice: 6000,
  advantages: ["6 Weeks of Learning", "On-site Classes", "Small Groups"],
  why: [
    {
      icon: "fa-solid fa-seedling",
      title: "Start from zero, step by step",
      description:
        "This course is designed for absolute beginners. We guide you gently through the basics of French, ensuring you understand and feel confident before moving forward."
    },
    {
      icon: "fa-solid fa-comments",
      title: "Speak French from day one",
      description:
        "You won’t just memorize words—you’ll practice speaking French from your first lesson through simple dialogues and everyday expressions."
    },
    {
      icon: "fa-solid fa-chalkboard-teacher",
      title: "Clear and supportive teaching",
      description:
        "Our instructors explain concepts clearly, using simple examples and interactive activities to help you learn faster and stress-free."
    },
    {
      icon: "fa-solid fa-users",
      title: "Small group learning",
      description:
        "Learn in small groups where you can practice comfortably, ask questions freely, and receive personalized guidance."
    },
    {
      icon: "fa-solid fa-globe",
      title: "Real-life French situations",
      description:
        "You’ll learn how to order food, introduce yourself, ask for directions, and handle basic everyday conversations in French."
    },
    {
      icon: "fa-solid fa-brain",
      title: "Effective learning methods",
      description:
        "Our teaching approach is based on proven language-learning techniques to help you remember vocabulary and build confidence naturally."
    }
  ],
  faq: [
    {
      question: "Is this course suitable for complete beginners?",
      answer:
        "Yes! This course is specifically designed for learners with no prior experience in French. Everything starts from the basics."
    },
    {
      question: "What skills will I learn?",
      answer:
        "You will learn basic speaking, listening, reading, and writing skills, with a strong focus on everyday communication."
    },
    {
      question: "Do I need to know any French before joining?",
      answer:
        "No previous knowledge is required. We start from the alphabet, pronunciation, and essential expressions."
    },
    {
      question: "How are classes structured?",
      answer:
        "Classes include guided lessons, simple conversations, vocabulary practice, and interactive activities designed for beginners."
    },
    {
      question: "Is the course taught in person?",
      answer:
        "Yes, this course is delivered on-site to provide better interaction and immediate feedback from instructors."
    },
    {
      question: "Will I be able to speak French after this course?",
      answer:
        "By the end of the course, you’ll be able to handle basic conversations, introduce yourself, and understand simple spoken French."
    },
    {
      question: "Do I receive a certificate?",
      answer:
        "Yes, you will receive a certificate of completion after successfully finishing the course."
    }
  ],
  testomonials: [
    {
      name: "Amel Benkacem",
      testimonial:
        "I had never studied French before, but this course made everything clear and easy. I can now introduce myself and have simple conversations!"
    },
    {
      name: "Yacine Rahmani",
      testimonial:
        "The teachers are very patient and supportive. I really liked the step-by-step approach—it made learning French enjoyable."
    },
    {
      name: "Sara Khelifi",
      testimonial:
        "This beginner course gave me confidence to start speaking French without fear. The atmosphere in class is amazing!"
    }
  ]
},

 {
  code: 3,
  name: "Italian for Beginners",
  icon: "https://res.cloudinary.com/dub4fhabm/image/upload/v1770323360/5381b6a4-b74a-4edc-b4ba-713550d41ea0.png",
  perfectText: "The perfect program to start speaking Italian with confidence",
  level: "Beginner",
  perfectIcon: "https://res.cloudinary.com/dub4fhabm/image/upload/v1762638659/undraw_destination_fkst_yqpapr.png",
  shortDescrition:
    "Italian for Beginners is designed for learners with little or no prior knowledge of Italian who want to build a solid foundation in speaking and understanding everyday Italian.",
  longDescription:
    "Our Italian for Beginners program introduces you to the Italian language in a clear, friendly, and practical way. You’ll learn essential vocabulary, pronunciation, and basic grammar while practicing simple conversations from the very beginning. Through interactive lessons and real-life scenarios, you’ll gain confidence in speaking Italian, understanding common expressions, and communicating in everyday situations such as travel, introductions, and social interactions.",
  attractiveText:
    "Start your Italian journey today! Learn how to speak and understand Italian naturally through practical conversations and beginner-friendly lessons.",
  duration: "6 Weeks",
  type: "On site",
  students: 20,
  purchasePrice: 6000,
  advantages: ["6 Weeks of Learning", "On-site Classes", "Small Groups"],
  why: [
    {
      icon: "fa-solid fa-pizza-slice",
      title: "Learn the Italian you really need",
      description:
        "Focus on useful everyday Italian—from greetings and introductions to ordering food and asking for directions."
    },
    {
      icon: "fa-solid fa-comment-dots",
      title: "Speak Italian from the first week",
      description:
        "We encourage you to start speaking Italian immediately with guided dialogues and simple conversation practice."
    },
    {
      icon: "fa-solid fa-chalkboard",
      title: "Clear explanations for beginners",
      description:
        "Grammar and pronunciation are explained in a simple and accessible way, perfect for learners starting from zero."
    },
    {
      icon: "fa-solid fa-users",
      title: "Supportive group environment",
      description:
        "Practice in small groups where everyone is learning together, making it easier to gain confidence and participate."
    },
    {
      icon: "fa-solid fa-plane-departure",
      title: "Perfect for travel and daily life",
      description:
        "Learn Italian you can immediately use when traveling, meeting new people, or exploring Italian culture."
    },
    {
      icon: "fa-solid fa-brain",
      title: "Effective and fun learning method",
      description:
        "Our teaching approach combines interactive exercises and real-life situations to help you learn Italian naturally."
    }
  ],
  faq: [
    {
      question: "Is this course suitable for absolute beginners?",
      answer:
        "Yes, this course is designed for learners with no previous experience in Italian. Everything starts from the basics."
    },
    {
      question: "What will I be able to do after this course?",
      answer:
        "You’ll be able to introduce yourself, understand simple conversations, and communicate in everyday situations."
    },
    {
      question: "Do I need to know another language?",
      answer:
        "No prior knowledge of Italian or any other language is required to join this course."
    },
    {
      question: "How are the classes organized?",
      answer:
        "Classes include vocabulary learning, pronunciation practice, guided conversations, and interactive activities."
    },
    {
      question: "Is this course in person?",
      answer:
        "Yes, the course is taught on-site to encourage interaction and real speaking practice."
    },
    {
      question: "Will I receive feedback from the teacher?",
      answer:
        "Absolutely. Instructors provide continuous feedback to help you improve pronunciation and confidence."
    },
    {
      question: "Do I get a certificate at the end?",
      answer:
        "Yes, you will receive a certificate of completion after finishing the course."
    }
  ],
  testomonials: [
    {
      name: "Nadia Rossi",
      testimonial:
        "I always wanted to learn Italian, and this course made it so easy and fun. I can now speak basic Italian confidently!"
    },
    {
      name: "Omar Haddad",
      testimonial:
        "The lessons are very practical and beginner-friendly. I loved practicing real conversations from the start."
    },
    {
      name: "Lina Bouchareb",
      testimonial:
        "Great atmosphere and excellent teachers! I feel comfortable speaking Italian now, even as a beginner."
    }
  ]
},

     {
  code: 4,
  name: "German for Beginners",
  icon: "https://res.cloudinary.com/dub4fhabm/image/upload/v1770323523/52cd8f9f-cdc6-4290-951e-60fd608bcfc7.png",
  perfectText: "The perfect program to start speaking German with confidence",
  level: "Beginner",
  perfectIcon: "https://res.cloudinary.com/dub4fhabm/image/upload/v1762638659/undraw_destination_fkst_yqpapr.png",
  shortDescrition:
    "German for Beginners is designed for learners with little or no prior knowledge of German who want to build a strong foundation in speaking and understanding everyday German.",
  longDescription:
    "Our German for Beginners program introduces you to the German language in a structured, clear, and beginner-friendly way. You will learn essential vocabulary, correct pronunciation, and basic grammar while practicing simple conversations from the very first lessons. Through interactive activities and real-life scenarios, you’ll gain confidence in understanding German, forming simple sentences, and communicating in everyday situations such as introductions, travel, and daily routines.",
  attractiveText:
    "Start your German journey today! Learn to speak and understand German through practical lessons and real-life conversations designed for beginners.",
  duration: "6 Weeks",
  type: "On site",
  students: 20,
  purchasePrice: 6500,
  advantages: ["6 Weeks of Learning", "On-site Classes", "Small Groups"],
  why: [
    {
      icon: "fa-solid fa-language",
      title: "Learn essential everyday German",
      description:
        "Focus on practical German used in daily life—from greetings and introductions to basic questions and expressions."
    },
    {
      icon: "fa-solid fa-comment-dots",
      title: "Start speaking German from day one",
      description:
        "Our lessons encourage you to speak German early with guided dialogues and simple conversation practice."
    },
    {
      icon: "fa-solid fa-book",
      title: "Beginner-friendly grammar explanations",
      description:
        "German grammar and sentence structure are explained clearly and simply, making learning accessible for beginners."
    },
    {
      icon: "fa-solid fa-users",
      title: "Small and supportive classes",
      description:
        "Learn in small groups where everyone is at the same level, creating a comfortable and encouraging environment."
    },
    {
      icon: "fa-solid fa-briefcase",
      title: "Useful for travel and professional life",
      description:
        "Gain practical German skills that are helpful for travel, studies, or future career opportunities."
    },
    {
      icon: "fa-solid fa-brain",
      title: "Effective and structured learning method",
      description:
        "Our teaching approach combines practice, repetition, and real-life situations to help you learn German efficiently."
    }
  ],
  faq: [
    {
      question: "Is this course suitable for complete beginners?",
      answer:
        "Yes, this course is designed for learners with no previous knowledge of German. Everything starts from the basics."
    },
    {
      question: "What level will I reach after the course?",
      answer:
        "You will be able to understand and use basic German phrases and hold simple everyday conversations."
    },
    {
      question: "Do I need any prior language experience?",
      answer:
        "No prior knowledge of German or other languages is required to enroll in this course."
    },
    {
      question: "How are the classes structured?",
      answer:
        "Classes include vocabulary building, pronunciation practice, grammar basics, and interactive speaking activities."
    },
    {
      question: "Is the course taught in person?",
      answer:
        "Yes, this is an on-site course that focuses on interaction and real speaking practice."
    },
    {
      question: "Will I get feedback during the course?",
      answer:
        "Yes, instructors provide regular feedback to help you improve your pronunciation and confidence."
    },
    {
      question: "Do I receive a certificate after completion?",
      answer:
        "Yes, you will receive a certificate of completion at the end of the course."
    }
  ],
  testomonials: [
    {
      name: "Sarah Müller",
      testimonial:
        "This course helped me overcome my fear of German. The lessons are clear and very practical."
    },
    {
      name: "Yacine Benali",
      testimonial:
        "I started with zero German, and now I can introduce myself and have simple conversations. Highly recommended!"
    },
    {
      name: "Amel K.",
      testimonial:
        "Great teachers and a very supportive environment. Learning German felt structured and enjoyable."
    }
  ]
},

   {
  code: 5,
  name: "Spanish for Beginners",
  icon: "https://res.cloudinary.com/dub4fhabm/image/upload/v1770323619/e0b8f160-dbf8-46f2-896a-2b7d37a07129.png",
  perfectText: "The perfect program to start speaking Spanish with confidence",
  level: "Beginner",
  perfectIcon: "https://res.cloudinary.com/dub4fhabm/image/upload/v1762638659/undraw_destination_fkst_yqpapr.png",
  shortDescrition:
    "Spanish for Beginners is designed for learners with little or no prior knowledge of Spanish who want to build a strong foundation in speaking and understanding everyday Spanish.",
  longDescription:
    "Our Spanish for Beginners program introduces you to the Spanish language in a friendly, interactive, and practical way. You will learn essential vocabulary, correct pronunciation, and basic grammar while practicing simple conversations from the very first lessons. Through real-life scenarios and guided speaking activities, you’ll gain confidence in understanding Spanish and communicating naturally in everyday situations such as travel, introductions, shopping, and social interactions.",
  attractiveText:
    "Start your Spanish journey today! Learn to speak and understand Spanish naturally through practical lessons designed for beginners.",
  duration: "6 Weeks",
  type: "On site",
  students: 20,
  purchasePrice: 6000,
  advantages: ["6 Weeks of Learning", "On-site Classes", "Small Groups"],
  why: [
    {
      icon: "fa-solid fa-globe",
      title: "Learn practical everyday Spanish",
      description:
        "Focus on useful Spanish expressions you can use in daily life, travel, and real conversations."
    },
    {
      icon: "fa-solid fa-comment-dots",
      title: "Speak Spanish from the first week",
      description:
        "You’ll start speaking Spanish immediately through guided dialogues and simple conversation practice."
    },
    {
      icon: "fa-solid fa-book-open",
      title: "Clear and simple explanations",
      description:
        "Spanish grammar and pronunciation are explained in a clear and beginner-friendly way."
    },
    {
      icon: "fa-solid fa-users",
      title: "Small interactive groups",
      description:
        "Learn in small groups that encourage participation, confidence, and real speaking practice."
    },
    {
      icon: "fa-solid fa-plane-departure",
      title: "Perfect for travel and communication",
      description:
        "Learn Spanish you can immediately use when traveling, meeting new people, or exploring Spanish-speaking cultures."
    },
    {
      icon: "fa-solid fa-brain",
      title: "Fun and effective learning method",
      description:
        "Our approach combines interactive exercises, repetition, and real-life situations to help you learn Spanish naturally."
    }
  ],
  faq: [
    {
      question: "Is this course suitable for absolute beginners?",
      answer:
        "Yes, this course is designed for learners with no previous experience in Spanish."
    },
    {
      question: "What will I be able to do after completing the course?",
      answer:
        "You’ll be able to introduce yourself, understand basic Spanish, and communicate in simple everyday situations."
    },
    {
      question: "Do I need to know another language?",
      answer:
        "No prior knowledge of Spanish or any other language is required."
    },
    {
      question: "How are the classes structured?",
      answer:
        "Classes include vocabulary learning, pronunciation practice, grammar basics, and interactive speaking activities."
    },
    {
      question: "Is the course taught in person?",
      answer:
        "Yes, this is an on-site course focused on interaction and real conversation practice."
    },
    {
      question: "Will I receive feedback from the instructor?",
      answer:
        "Yes, instructors provide continuous feedback to help you improve your pronunciation and confidence."
    },
    {
      question: "Do I get a certificate at the end of the course?",
      answer:
        "Yes, you will receive a certificate of completion after finishing the course."
    }
  ],
  testomonials: [
    {
      name: "Carlos Mendoza",
      testimonial:
        "The course was very practical and fun. I can now speak basic Spanish with confidence."
    },
    {
      name: "Imane Zahra",
      testimonial:
        "Perfect for beginners! The lessons are clear and I started speaking Spanish very quickly."
    },
    {
      name: "Rachid A.",
      testimonial:
        "Great atmosphere and supportive teachers. Learning Spanish felt natural and motivating."
    }
  ]
}
,
   
{
  code: 6,
  name: "French Speaking Club",
  icon: "https://res.cloudinary.com/dub4fhabm/image/upload/v1770323901/97241e9a-5b85-4d77-a3c9-f89efaa11f99.png",
  perfectText: "The perfect club to practice French and speak with confidence",
  level: "All Levels",
  perfectIcon: "https://res.cloudinary.com/dub4fhabm/image/upload/v1762638659/undraw_destination_fkst_yqpapr.png",
  shortDescrition:
    "French Speaking Club is designed for learners who want to improve their spoken French through real conversations, discussions, and interactive speaking sessions.",
  longDescription:
    "Our French Speaking Club focuses entirely on oral communication and confidence-building. Instead of traditional lessons, you’ll participate in guided discussions, debates, role-plays, and real-life conversation scenarios. Sessions are designed to help you think in French, express your ideas naturally, and improve pronunciation and fluency. Whether you are a student, professional, or language enthusiast, this club offers a relaxed and supportive environment to practice French regularly.",
  attractiveText:
    "Speak French naturally, confidently, and without fear! Join our French Speaking Club and turn practice into real progress.",
  duration: "Ongoing",
  type: "On site",
  students: 15,
  purchasePrice: 4500,
  advantages: ["Conversation-Based Sessions", "On-site Practice", "Small Speaking Groups"],
  why: [
    {
      icon: "fa-solid fa-comments",
      title: "100% speaking-focused",
      description:
        "Every session is centered around speaking. No heavy theory—just real conversations and active participation."
    },
    {
      icon: "fa-solid fa-face-smile",
      title: "Gain confidence naturally",
      description:
        "Practice French in a relaxed, judgment-free environment that helps you overcome fear and hesitation."
    },
    {
      icon: "fa-solid fa-users",
      title: "Small interactive groups",
      description:
        "Small groups ensure everyone gets time to speak, interact, and receive feedback."
    },
    {
      icon: "fa-solid fa-bullhorn",
      title: "Improve pronunciation & fluency",
      description:
        "Guided speaking activities help you sound more natural and fluent in everyday French."
    },
    {
      icon: "fa-solid fa-lightbulb",
      title: "Engaging discussion topics",
      description:
        "Talk about culture, daily life, current topics, and real situations to make learning meaningful."
    },
    {
      icon: "fa-solid fa-graduation-cap",
      title: "Guided by experienced facilitators",
      description:
        "Sessions are led by instructors who guide discussions, correct gently, and encourage progress."
    }
  ],
  faq: [
    {
      question: "Who can join the French Speaking Club?",
      answer:
        "Anyone with basic knowledge of French can join. The club is open to all levels and adapts to participants."
    },
    {
      question: "Is this a traditional French course?",
      answer:
        "No, this is a speaking club focused entirely on conversation and oral practice, not grammar lessons."
    },
    {
      question: "How often are the sessions?",
      answer:
        "Sessions are held regularly, allowing members to practice French consistently."
    },
    {
      question: "Will I receive corrections?",
      answer:
        "Yes, facilitators provide gentle corrections and helpful feedback during and after discussions."
    },
    {
      question: "Is it suitable for shy learners?",
      answer:
        "Absolutely. The club is designed to be welcoming and supportive, helping shy learners gain confidence."
    },
    {
      question: "Is this program on-site?",
      answer:
        "Yes, sessions are conducted on-site to encourage real interaction and authentic conversation."
    },
    {
      question: "Do I receive a certificate?",
      answer:
        "Yes, regular participants can receive a participation certificate upon request."
    }
  ],
  testomonials: [
    {
      name: "Amine B.",
      testimonial:
        "This club helped me speak French without stress. The atmosphere is friendly and motivating."
    },
    {
      name: "Sarah K.",
      testimonial:
        "I finally feel confident expressing my ideas in French. The discussions are really interesting."
    },
    {
      name: "Youssef L.",
      testimonial:
        "Much better than traditional classes! You speak a lot and learn naturally through conversation."
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