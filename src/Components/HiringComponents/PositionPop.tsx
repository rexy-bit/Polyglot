import { memo, useState } from "react"
import type { Position } from "../../Contexts/Types"
import { PaperClipIcon } from "@heroicons/react/24/solid";


const PositionPop = ({setShowPop, position} : {setShowPop : (b : boolean)=>void, position : Position}) => {

    const teacherExpectations : string[] = [
  "Passion for teaching and sharing knowledge with learners.",
  "Strong communication skills and a supportive teaching approach.",
  "Ability to adapt lessons to students’ levels and learning goals.",
  "Patience, empathy, and a positive attitude in every class.",
  "Comfortable teaching in an online and multicultural environment.",
  "Commitment to continuous learning and professional growth."
];

       const [fullName, setFullName] = useState<string>("");
       const [email, setEmail] = useState("");
       const [phone, setPhone] = useState("");
       const [cv, setCv] = useState<File | null>(null);
       const [message, setMessage] = useState("");
       const [submitted, setSubmitted] = useState(false);


       const handleSubmit = (e : React.FormEvent) => {

        e.preventDefault();

        setSubmitted(true);

        setFullName("");
        setEmail("");
        setPhone("");
        setMessage("");
        setCv(null);

       }


    return(

           <div onClick={()=>setShowPop(false)} className="fixed inset-0 bg-black/40  flex justify-center z-50">
    
               <div className="flex flex-col shadow-2xl gap-2  w-[700px] h-[450px] bg-[#001f54]  rounded-[20px] p-5 max-[1025px]:w-[500px] max-[550px]:w-[300px] mt-10 px-6 overflow-y-auto space-y-1 relative" onClick={(e) => e.stopPropagation()}>

                      <div className="text-gray-100 text-[1.5em] font-bold">{position.title}</div>

                      <div className="flex flex-row items-center gap-2 text-gray-50">
                        <p className="font-[600]">Format: </p>
                        <p className="text-[17px]">{position.format}</p>
                      </div>

                      <div className="flex flex-row items-center gap-2 text-gray-50">
                        <p className="font-[600]">Schedule: </p>
                        <p className="text-[17px]">{position.schedule}</p>
                      </div>

                      <div className="mt-5 text-gray-100">
                        <p className="font-[600]">Description: </p>
                        <p className="text-[15px] text-gray-50 leading-5 mt-1">{position.longDescription}</p>
                      </div>

                      <div className="flex flex-col mt-10">
                        <p className="font-[600] text-gray-100 text-[1.2em]">What we expect from our teachers</p>
                      <div className="flex flex-col text-[15px] text-gray-100 ml-8 mt-5">
                        {teacherExpectations.map((t)=>{
                            return(
                                <li>{t}</li>
                            )
                        })}
                      </div>
                      </div>

                      <form action=""
                      className="flex flex-col justify-center items-center gap-5 border-2 border-gray-50 w-full p-3 rounded-[10px] mt-10 mb-10"
                      >

                        <p className="text-[1.3em] font-bold text-gray-100 underline mt-2">Job Application Form</p>

                        <input 
                        type="text"
                        value={fullName}
                        className="p-2 border-gray-300 bg-gray-50 rounded-[5px] w-full mt-2 text-[15px]"
                        onChange={(e)=>setFullName(e.target.value)}
                        placeholder="Full Name"
                        required
                        
                        />

                        <input 
                        type="text" 
                        placeholder="Email"
                        className="p-2 border-gray-300 bg-gray-50 rounded-[5px] w-full text-[15px]"
                        value={email}
                        onChange={(e)=>setEmail(e.target.value)}
                        required
                        />

                        <input 
                        type="tel" 
                        placeholder="Phone"
                        className="p-2 border-gray-300 bg-gray-50 rounded-[5px] w-full text-[15px]"
                        value={phone}
                        onChange={(e)=>setPhone(e.target.value)}
                        required
                        />

                        <textarea
                        
                        placeholder="Message /motivation"
                        value={message}
                        onChange={(e)=>setMessage(e.target.value)}
                        className="p-2 border-gray-300 bg-gray-50 rounded-[5px] w-full text-[15px]"
                        rows={4}
                        />

                       <div className="flex flex-col gap-2">
      <label
        htmlFor="file-upload"
        className="flex items-center gap-2 cursor-pointer px-4 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition-colors"
      >
        <PaperClipIcon className="w-5 h-5" />
        {cv ? "Change File" : "Upload CV"}
      </label>
      <input
        id="file-upload"
        type="file"
        accept=".pdf,.doc,.docx"
        className="hidden"
        onChange={(e) => setCv(e.target.files ? e.target.files[0] : null)}
        required
      />
      {cv && <p className="text-gray-200 text-sm truncate">{cv.name}</p>}
    </div>

                        <button type="submit" 
                        className="w-full bg-gray-200 mt-5 p-3 cursor-pointer transition-opacity duration-200 hover:opacity-80 active:opacity-60 rounded-[5px] text-[#001f54] font-black mb-10"
                        >
                            Apply Now
                        </button>
                      </form>
               </div>
               </div>
    )
}

export default memo(PositionPop);