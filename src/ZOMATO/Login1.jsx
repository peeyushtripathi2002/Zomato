import React from 'react'
import { Route,Routes,Link } from 'react-router-dom'
import './Login1.css'
function Login1() {
  return (
    <div id="main">
        <h1>Login form</h1>
        <input   type="text" placeholder='Enter your userid'/>
        <input   type="password" placeholder='Enter your password'/>
        <button>Login</button>
        <Link to='/signup'>SignUp1</Link>
    </div>
  )
}

export default Login1