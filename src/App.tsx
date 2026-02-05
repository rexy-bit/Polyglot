
import './App.css'

import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import { LanguagesProvider } from './Contexts/LanguagesContext'
import Course from './Pages/Course'
import ScrollToTop from './ScrollToTop'
import Hiring from './Pages/Hiring'
import Terms from './Pages/Terms'
import Header from './Components/Header'
import All from './Pages/All'
import Footer from './Components/Footer'

function App() {
  
  return(
    <LanguagesProvider>


      <ScrollToTop/>
    <Routes>
       <Route path="/" element={
        <Home/>
       }/>

       <Route path='/course/:code' element={
        <Course/>
       }/>

       <Route path='/hiring' element={
          <Hiring/>
       }/>

       <Route path='/terms' element={
        <>
          <Header/>
          <Terms/>
        </>
       }/>

       <Route path='/all' element={
        <>
          <Header/>
          <All/>
          <Footer/>
        </>
       }/>
    </Routes>
    </LanguagesProvider>
  )
}

export default App
