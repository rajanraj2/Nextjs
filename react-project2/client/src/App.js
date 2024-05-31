import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import  Home  from './pages/Home.js'
import Signup  from './pages/Signup.js'
import Signin  from './pages/Signin.js'


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<h1>Hello from App</h1>} /> */}
          <Route path="/" element={<Home/>} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/signin" element={<Signin/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App








// import logo from './logo.svg';
// import './App.css';
// import { Button } from '@mui/material';

// function App() {
//   return (
//     <>
//     <div className="App">
//       Hello from app
//       <Button color="primary">Hello World</Button>;
//     </div>
//     </>
//   );
// }

// export default App;
