import emailjs from "@emailjs/browser";
import type { Program } from "../../Contexts/Types";
import { memo, useState } from "react";

const FormSend = ({program} : {program : Program}) => {


     const [loading, setLoading] = useState<boolean>(false);
     const [success, setSuccess] = useState<boolean>(false);

     const sendMessage = (e : React.FormEvent<HTMLFormElement>) => {
        
        e.preventDefault();

        const form = e.currentTarget;

        const formData = new FormData(form);

        const name = formData.get("name") as string;

        const email = formData.get("email") as string;
        const program = formData.get("program") as string;
        const message = formData.get("message") as string;

        if(!name || name.trim() === "" || !email || email.trim() === "" || !program || program.trim() === ""){
            alert("Please fill all required fields");
            return;
        }

        setLoading(true);

              emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
            name,
            email,
            program,
            message
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
    .then(() => {
        setSuccess(true);   // 🔹 Afficher succès
        form.reset();       // 🔹 Réinitialiser le formulaire
    })
    .catch((err) => {
        console.error("EmailJS error:", err);
        alert("Something went wrong. Please try again.");
    })
    .finally(() => {
        setLoading(false); // 🔹 Désactiver le loader
    });

     }

    return(

        <section className="flex flex-col justify-center items-center w-full" id="join">

              
           <h1 className="mt-5 text-[2.2em] font-bold text-gray-100 text-center">Join Training Now!</h1>
           <p className="text-gray-100 font-bold text-[2em] mt-4 underline">{program.purchasePrice} Dzd</p>

           <form onSubmit={sendMessage} className="flex flex-col justify-center items-center mt-7 gap-5 p-7 border-3 rounded-[10px] border-gray-100 mb-10">
              
              <div className="flex flex-col gap-1">
                <p className="text-[17px] text-gray-100 font-[600]">Full Name*</p>
              <input 
              type="text" 
              name="name"
              placeholder="Your name"
              className="w-[500px] p-2 bg-gray-100 rounded-[5px] text-[14px]"
              required
              />
              </div>

           <div className="flex flex-col gap-1">
               <p className="text-[17px] text-gray-100 font-[600]">Email*</p>
              <input 
              type="email" 
              name="email"
              placeholder="Your Email"
              className="w-[500px] p-2 bg-gray-100 rounded-[5px] text-[14px]"
              required
              />
              </div>

            <div className="flex flex-col gap-1">
                <p className="text-[17px] text-gray-100 font-[600]">Program*</p>
              <input
              name="program"
              value={program.name}
              className="w-[500px] p-2 bg-gray-100 rounded-[5px] text-[14px]"
              readOnly
              />
              </div>

             <div className="flex flex-col gap-1">
                <p className="text-[17px] text-gray-100 font-[600]">Optional Message</p>
              <textarea 
              name="message" 
              placeholder="Optional message"
              className="w-[500px] p-2 bg-gray-100 rounded-[5px] text-[14px] h-[100px]"
              ></textarea>
              </div>

              <button  type="submit" disabled={loading} className="bg-gray-100 text-[#001f54] text-[15px] font-bold w-[120px] h-[40px] rounded-[5px] cursor-pointer transition-opacity duration-200 hover:opacity-80 active:opacity-60">
                   {loading ? "Sending..." : "Join Now"}
              </button>
           </form>

           {success && <p className="text-green-600 mb-10">✅ Registration sent successfully!</p>}
             
        </section>
    )
}

export default memo(FormSend);