import  { memo } from "react"
import Header from "../Components/Header";

import Hero from "../Components/Hero";
import About from "../Components/About";
import Programs from "../Components/Programs";
import WhyChoose from "../Components/WhyChoose";
import MainTestimonials from "../Components/MainTestimonials";
import MainFaq from "../Components/MainFaq";
import Contact from "../Components/Contact";
import Footer from "../Components/Footer";


const Home = () => {

    return(
        <>
          <Header/>
          <Hero/>
          <About/>
          <Programs/>
          <WhyChoose/>
          <MainTestimonials/>
          <MainFaq/>
          <Contact/>
          <Footer/>
        </>
    )
}

export default memo(Home);