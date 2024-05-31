import { useState } from 'react'
// import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import  Home  from './pages/Home.jsx'
import Signup  from './pages/Signup.jsx'
import Signin  from './pages/Signin.jsx'

import './styles/signup.scss';
// import './styles/signin.scss';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/signin" element={<Signin/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
