
import './App.css'
import User from './User'
import { UserProvider } from './UserContextProvider'

function App() {
  

  return (
    <UserProvider>
      <User name={"yanis"} age={22} isMarried={false}/>
    </UserProvider>
  )
}

export default App
