import React from 'react'
import { Route,Routes,Link } from 'react-router-dom'
import './SignUp1.css'
function SignUp1() {
  return (
    <div id="main">
        <h1>SignUp1 Form</h1>
    <input type="text" placeholder='Enter your name'/>
    <input type="text" placeholder='Enter your last name'/>
    <input type="email" placeholder='Enter your email'/>
    <input type="password" placeholder='Enter your password'/>
    <button>Signup</button>
    <Link to='/login'>Login1</Link>
</div>
  )
}

export default SignUp1