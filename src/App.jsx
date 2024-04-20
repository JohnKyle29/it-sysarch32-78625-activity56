import { useState } from 'react'
import './App.css'
import SignUp from './SignUp.jsx'
import Login from './Login.jsx'
import { Auth } from './components/Auth'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <SignUp />
      <Login /> */}
      <Auth />
    </>
  )
}

export default App
