import  { memo } from "react"
import Header from "../Components/Header";

import Hero from "../Components/Hero";
import About from "../Components/About";


const Home = () => {

    return(
        <>
          <Header/>
          <Hero/>
          <About/>
        </>
    )
}

export default memo(Home);