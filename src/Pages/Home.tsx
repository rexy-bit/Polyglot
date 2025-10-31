import  { memo } from "react"
import Header from "../Components/Header";

import Hero from "../Components/Hero";
import About from "../Components/About";
import Programs from "../Components/Programs";


const Home = () => {

    return(
        <>
          <Header/>
          <Hero/>
          <About/>
          <Programs/>
        </>
    )
}

export default memo(Home);