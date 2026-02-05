import  { memo } from "react"
import HiringHero from "../Components/HiringComponents/HiringHero";
import Header from "../Components/Header";
import WhyWork from "../Components/HiringComponents/WhyWork";
import Positions from "../Components/HiringComponents/Positions";
import Footer from "../Components/Footer";
import FaqHiring from "../Components/HiringComponents/FaqHiring";

const Hiring = () => {

    return(
        <section>
            <Header/>
           <HiringHero/>
           <WhyWork/>
           <Positions/>
           <FaqHiring/>
           <Footer/>
        </section>
    )
}

export default memo(Hiring);