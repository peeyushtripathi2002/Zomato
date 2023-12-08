import React from 'react'
import './App.css'
import Zometo from './Zometo'
import { Route,Routes } from 'react-router-dom'
import Login1 from './Login1'
import SignUp1 from './SignUp1'
import Addrestro from './Addrestro' 
import Viewfood from './Viewfood'
// import React, { useState } from 'react'
// import Home from './Zometo'
// import Peeyush from './Peeyush'
// import Count from './Count'
// import UseEffect from './UseEffect'
// import Nbr from './Nbr'
// import About from './About'
// import Contact from './Contact'
// import Todoolist from './Todoolist'
// import Hospital from './Hospital'
function App() {
  return (
    <div>
      {/* <Hospital/> */}
      {/* <Zometo/> */}
      {/* <Todoolist/> */}
      {/* <Peeyush key1='hello' nam1='Peeyush' user='Software'/> */}
      {/* <h1>Count App</h1> */}
      {/* <Count/> */}
      {/* <UseEffect/> */}
      {/* <Nbr/>
      <Routes>      
        <Route path='/home' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes> */}
      {/* <Login/> */}
      <Routes>
      <Route path='/' element={<Zometo/>}/>
        <Route path='/login' element={<Login1/>}/>
        <Route path='/signup' element={<SignUp1/>}/>
        <Route path='/addr' element={<Addrestro/>}/>
        <Route path='/viewfood' element={<Viewfood/>}/>
      </Routes>

      <h1>hello</h1>
    </div>
  )
}

export default App        