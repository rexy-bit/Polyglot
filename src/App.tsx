
import './App.css'

import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import { LanguagesProvider } from './Contexts/LanguagesContext'

function App() {
  
  return(
    <LanguagesProvider>
    <Routes>
       <Route path="/" element={
        <Home/>
       }/>
    </Routes>
    </LanguagesProvider>
  )
}

export default App
