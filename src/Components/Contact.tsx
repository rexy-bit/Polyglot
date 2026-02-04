import { memo } from "react"


const Contact = () => {

    return(
        <section className="flex flex-col justify-center items-center w-full">
            <h1 className="mt-10 text-gray-100 font-black text-[2.2em]">Contact Us</h1>

            <div className="flex flex-row justify-center items-center gap-30 w-full">
                 <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d336.10535242930644!2d-73.61266589536498!3d45.53745538363268!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cc9196d4a206ca7%3A0xe2d7c1065d7d76ee!2sR.%20Saint-Denis%2C%20Montr%C3%A9al%2C%20QC%2C%20Canada!5e0!3m2!1sfr!2sdz!4v1770244458037!5m2!1sfr!2sdz"
            className="w-[600px] h-[400px] max-[1050px]:w-[400px] max-[1050px]:h-[300px] max-[750px]:w-[300px] max-[750px]:h-[200px] slideLeft"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade">
            </iframe>

            <div>
               <div>
                <i className="fa-solid fa-envelope"></i>
                <p>support@polyglotacademy-mtl.com</p>
                </div>

                <div>
                    <i className="fa-solid fa-phone"></i>
                    <p>+1 (514) 987-6543</p>
                </div>

                <div>
                    <i className="fa-solid fa-location-dot"></i>
                    <p>1235 Rue Saint-Denis, Montréal</p>
                </div>
            </div>
            </div>
        </section>
    )
}

export default memo(Contact);
