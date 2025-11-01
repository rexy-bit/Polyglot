
import './App.css'

import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import { LanguagesProvider } from './Contexts/LanguagesContext'
import Course from './Pages/Course'

function App() {
  
  return(
    <LanguagesProvider>
    <Routes>
       <Route path="/" element={
        <Home/>
       }/>

       <Route path='/course/:code' element={
        <Course/>
       }/>
    </Routes>
    </LanguagesProvider>
  )
}

export default App
