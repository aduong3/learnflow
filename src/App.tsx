import { useState } from 'react'
import './App.css'
import { UserProvider } from "./UserContext/UserProvider";


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <UserProvider>
      
    </UserProvider>
    </>
  )
};

export default App;
