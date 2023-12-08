import React from 'react'
import './Login1.css'
import { Route,Routes,Link } from 'react-router-dom'
function Login1() { 
  return (
    <div id="main">
        <h2>Login form</h2>
        <input   type="text" placeholder='Enter your userid'/>
        <input   type="password" placeholder='Enter your password'/>
        <button>Login</button>
        <Link to='/signup'>SignUp1</Link>
    </div>
  )
}

export default Login1